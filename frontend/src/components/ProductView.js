import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Marketplace.css"

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const response = await fetch(`http://127.0.0.1:8000/marketplace/get_products/${id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          const productData = data.product;
          setProduct(productData);
        } else {
          throw new Error('Failed to fetch product details');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }

    fetchProductDetails();
  }, [id]);

  return (
    <div className="container-fluid">
    <div className='abo2'>
        <div className='w-100'>

        
        {product ? (
          <div className="row">
            <div className="col-md-3">
              <img className='image-fluid sqrmage' src={'http://localhost:8000/backend/' + product.image.substring(9)} alt={product.name} />
            </div>
            <div className="col-md-6 text-light">
              <h2>{product.name}</h2>
              <p>Price: ₹ {product.price}</p>
              <p>Description: {product.description}</p>
              <button className="btn button-87">Add to Cart</button>
            </div>
          </div>
          ) : (
            <p>Loading...</p>
            )}
            </div>
            </div>
            </div>
  );
};

export default ProductDetails;
