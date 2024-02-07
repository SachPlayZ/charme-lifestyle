from flask import Flask, render_template, request, redirect, url_for, flash, jsonify, session
from flask_cors import CORS
import json
import random
from cs50 import SQL
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app, origins='http://localhost:3000')

db = SQL("sqlite:///edumadefun.db")


@app.route("/register", methods=["GET", "POST", "OPTIONS"])
def register():
    if request.method == "POST":
        data = request.get_json()
        email = data.get("logemail")
        username = data.get("logname")
        password = data.get("logpass")
        if not username:
            return jsonify({"success": False, "message": "Username not provided"})
        elif not password:
            return jsonify({"success": False, "message": "Password not provided"})
        elif db.execute("SELECT * FROM users WHERE email = :email", email=email):
            return jsonify({"success": False, "message": "Email already exists"})
        else:
            password = generate_password_hash(password)
            db.execute("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)", username=username, email=email, password=password)
            return jsonify({"success": True, "message": "User created successfully"})
    else:
        return jsonify({"success": False, "message": "Only POST requests allowed"})
    

@app.route("/login", methods=["GET", "POST", "OPTIONS"])
def login():
    if request.method == "POST":
        data = request.get_json()
        email = data.get("logemail")
        password = data.get("logpass")
        if not email:
            return jsonify({"success": False, "message": "Username not provided"})
        elif not password:
            return jsonify({"success": False, "message": "Password not provided"})
        elif not db.execute("SELECT * FROM users WHERE email = :email", email=email):
            return jsonify({"success": False, "message": "Username does not exist"})
        else:
            user = db.execute("SELECT * FROM users WHERE email = :email", email=email)[0]
            if check_password_hash(user["password"], password):
                return jsonify({"success": True, "message": "Login successful"})
            else:
                return jsonify({"success": False, "message": "Incorrect password"})
    else:
        return jsonify({"success": False, "message": "Only POST requests allowed"})


@app.route('/products', methods=['GET'])
def get_products(id=None):
    if request.method == "GET":
        id = request.args.get('id')
        if id is not None:
            try:
                product = db.execute("SELECT * FROM products WHERE id = :id", id=id)[0]
                if product:
                    return jsonify({"product": product.to_dict()})
                else:
                    return jsonify({"error": "Product not found"}), 404
            except:
                return jsonify({"error": "Invalid request"}), 400
        else:
            products = db.execute("SELECT * FROM products")
            return jsonify({"products": [product.to_dict() for product in products]})
    else:
        return jsonify({"error": "GET request required."}), 405


app.run(debug=False)