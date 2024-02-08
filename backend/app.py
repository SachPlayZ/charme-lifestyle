from flask import Flask, render_template, request, redirect, url_for, flash, jsonify, session, send_from_directory, make_response
from flask_cors import CORS
import os
from cs50 import SQL
from werkzeug.security import generate_password_hash, check_password_hash


app = Flask(__name__)
CORS(app, origins='http://localhost:3000')


db = SQL("sqlite:///charme.db")


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


@app.route('/products', methods=['GET', 'OPTIONS'])
def get_products(id=None):
    if request.method == "GET":
        id = request.args.get('id')
        if id is not None:
            try:
                product = db.execute("SELECT * FROM products WHERE id = :id", id=id)[0]
                if product:
                    return jsonify({"product": product})
                else:
                    return jsonify({"error": "Product not found"}), 404
            except:
                return jsonify({"error": "Invalid request"}), 400
        else:
            products = db.execute("SELECT * FROM products")
            products = list(reversed(products))
            return jsonify({"products": products})
    if request.method == "OPTIONS":
        return handle_preflight()
    
    

@app.route('/products/image', methods=['GET', 'OPTIONS'])
def image(id=None, n=None):
    if request.method == "GET":
        id = request.args.get('id')
        n = request.args.get('n')
        if id is not None and n is not None:
            if os.path.exists('static/products/' + id + n + '.jpg'):
                return send_from_directory('static', 'products/' + id + n + '.jpg')
            elif os.path.exists('static/products/' + id + n + '.png'):
                return send_from_directory('static', 'products/'+ id + n + '.png')
            else:
                return send_from_directory('static', 'products/default.jpg')
        else:
            return send_from_directory('static', 'products/bad.jpg')
    if request.method == "OPTIONS":
        return handle_preflight()


def handle_preflight():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "http://localhost:3000")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type,Authorization")
    response.headers.add("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
    response.status_code = 200
    return response


if __name__ == "__main__":
    app.run(debug=False)