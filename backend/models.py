from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
import base64

db = SQLAlchemy()

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)   
    phone = db.Column(db.String(16), unique=True, nullable=False) 

    def __repr__(self):
        return f'<User {self.id}: {self.username}>'

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)
    stock_quantity = db.Column(db.Integer, nullable=False)
    image_data = db.Column(db.LargeBinary, nullable=False) 

    def __repr__(self):
        return f'<Product {self.id}: {self.name}>'

    def save_image(self, image_path):
        with open(image_path, "rb") as image_file:
            self.image_data = base64.b64encode(image_file.read())

    def get_image(self):
        if self.image_data:
            return base64.b64decode(self.image_data)
        return None