from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, login_required
from models import db, Product, User
from authentication import login, logout, profile, signup

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///marketplace.db'
app.config['SECRET_KEY'] = 'your_secret_key'  # Change this to a secure secret key
app.config['UPLOAD_FOLDER'] = 'uploads'
db.init_app(app)
login_manager = LoginManager(app)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/products')
def display_products():
    # Fetch all products from the database
    products = Product.query.all()

    # For simplicity, display products without using templates
    product_list = [f"{product.id}: {product.name}" for product in products]
    return f'<h1>Product List</h1><ul>{"".join(f"<li>{product}</li>" for product in product_list)}</ul>'

@app.route('/login', methods=['GET', 'POST'])
def login_route():
    return login()

@app.route('/logout')
@login_required
def logout_route():
    return logout()

@app.route('/profile')
@login_required
def profile_route():
    return profile()

@app.route('/signup', methods=['GET', 'POST'])
def signup_route():
    return signup()

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
