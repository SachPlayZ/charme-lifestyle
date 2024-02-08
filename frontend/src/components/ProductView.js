import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Marketplace.css"
import "./ProductDetails.scss"
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const buttonAnimate = () => {
    const button = document.querySelector('.product__button');
    button.classList.add('product__button--success');
  };
  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const response = await fetch(`http://127.0.0.1:5000/products?id=${id}`, {
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
          <div className="containerp">
          <div className="header">
            <div className="header-logo">
              <span className='whitetext'>Charm</span><span className='pink'>è</span>
            </div>
            
          </div>
          <div className="product">
            <div className="product-photo">
              <img src={'http://localhost:5000/products/image?id=' + product.id + '&n=1'} alt={product.name} />
              <img src={'http://localhost:5000/products/image?id=' + product.id + '&n=2'} alt={product.name} />
            </div>
            <div className="product-detail">
              <h1 className="product__title" style={{
                color: "white",
              }}>{product.name}</h1>
              <div className="product__price">₹ {product.price}</div>
              <div className="product__subtitle">{product.description}</div>
              <div className="product__color">
                <form action="">
                  <fieldset>
                    <input type="radio" name="color" />
                    <label htmlFor="straw">
                      <i className="ion-android-done"></i>
                    </label>
                  </fieldset>
                  <fieldset>
                    <input type="radio" name="color" />
                    <label htmlFor="brown">
                      <i className="ion-android-done"></i>
                    </label>
                  </fieldset>
                </form>
              </div>
              <Link className="product__button" href="#" onClick={buttonAnimate}>
                <span>Add to cart</span>
                <span>Success</span>
              </Link>
            </div>
          </div>
        </div>

          // <div className="row">
          //   <div className="col-md-3">
          //     <img className='image-fluid sqrmage' src={'http://localhost:5000/products/image?id=' + product.id} alt={product.name} />
          //   </div>
          //   <div className="col-md-6 text-light">
          //     <h2>{product.name}</h2>
          //     <p>Price: ₹ {product.price}</p>
          //     <p>Description: {product.description}</p>
          //     <button className="btn button-87">Add to Cart</button>
          //   </div>
          // </div>
          ) : (
            <p>Loading...</p>
            )}
            </div>
            </div>
            </div>
  );
};

export default ProductDetails;
