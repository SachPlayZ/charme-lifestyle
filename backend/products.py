# products.py
from models import Product
from app import app, db

# Use the existing Flask application context
with app.app_context():
    # Create tables if not exists
    db.create_all()

    # Create instances of the Product model
    product1 = Product(name='Product A', description='Description A', price=10.0, stock_quantity=100)
    product2 = Product(name='Product B', description='Description B', price=15.0, stock_quantity=50)

    # Set image data (replace 'path_to_image_a' and 'path_to_image_b' with actual paths)
    product1.save_image('path_to_image_a')
    product2.save_image('path_to_image_b')

    # Add products to the database session
    db.session.add(product1)
    db.session.add(product2)

    # Commit the changes to the database
    db.session.commit()
