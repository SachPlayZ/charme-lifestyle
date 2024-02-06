# add_products.py
from models import Product
from app import app, db  # Import the app and db objects

# Use the existing Flask application context
with app.app_context():
    # Create instances of the Product model
    product1 = Product(name='Product A', image_filename='product_a.jpg')
    product2 = Product(name='Product B', image_filename='product_b.jpg')

    # Add products to the database session
    db.session.add(product1)
    db.session.add(product2)

    # Commit the changes to the database
    db.session.commit()
