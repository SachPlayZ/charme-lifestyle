from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
import os

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")
bcrypt = Bcrypt(app)

# SQLite database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///marketplace.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['SECRET_KEY'] = 'your_secret_key'  # Replace with a strong secret key
db = SQLAlchemy(app)

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)  # Hashed password

# Product model
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)
    image = db.Column(db.String(255), nullable=False)

# Ensure 'uploads' folder exists
uploads_folder = os.path.join(os.getcwd(), 'uploads')
if not os.path.exists(uploads_folder):
    os.makedirs(uploads_folder)

# Create database tables
db.create_all()

# Route to serve product images
@app.route('/images/<filename>')
def get_image(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# Route to get product data
@app.route('/api/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    product_list = [{"id": product.id, "name": product.name, "price": product.price, "image": f"/images/{product.image}"} for product in products]
    return jsonify(product_list)

# Route to handle image uploads
@app.route('/api/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file:
        filename = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(filename)

        # Add product information to the database
        new_product = Product(
            name=request.form['name'],
            description=request.form['description'],
            price=float(request.form['price']),
            image=file.filename
        )
        db.session.add(new_product)
        db.session.commit()

        return jsonify({"message": "File uploaded successfully"}), 201

# Route to register a new user
@app.route('/api/register', methods=['POST'])
def register_user():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    # Check if the email is already registered
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"error": "Email already registered"}), 400

    # Hash the password before storing it in the database
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    new_user = User(name=name, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201

if __name__ == '__main__':
    app.run(debug=True)
