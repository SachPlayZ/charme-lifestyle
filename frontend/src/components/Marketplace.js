import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Marketplace.css";

const getData = async () => {
  try {
    const response = await fetch(
      "http://127.0.0.1:5000/products",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const Marketplace = () => {
  const [data1, setData1] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      if (data) {
        setData1(data);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="abo2">
        <div className="leadtext text-center pt-3">Marketplace</div>
        <div className="container text-center pt-5 pb-5">
          <div class="row">
            {data1 &&
              data1.products.map((getProd, index) => (
                <div key={index} className="col pb-3 ">
                  <div className="card ms-auto me-auto">
                    <img
                      src={
                        "http://localhost:5000/products/image?id=" +
                        getProd.id
                      }
                      className="card-img-top sqrmage"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">{getProd.name}</h5>
                      <p className="card-text">₹ {getProd.price}</p>
                      <Link to={`/product/${getProd.id}`} className="button-1">
                        Buy Now
                      </Link>
                      <Link class="button-81" role="button">
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
