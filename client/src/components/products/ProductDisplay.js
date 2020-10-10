import React from "react";
import { Link } from "react-router-dom";

// styles
import "../products/styles/Products.css";

export default function ProductDisplay({ imgUrl, title, price, itemId }) {

  return (
    <div className="product-display-container">
      <div className="product-card-container">
        <div>
          <Link to={`/products/product/${itemId}`} style={{ color: "black" }}>
            <img
              src={imgUrl}
              alt=""
              style={{
                height: "400px",
                maxWidth: "300px",
                marginRight: "2rem",
                marginLeft: "2rem",
              }}
            />
          </Link>
          <Link to={`/products/product/${itemId}`} style={{ color: "black" }}>
            <h1 style={{ margin: "0" }}>{title}</h1>
          </Link>
          <br />
          <p style={{ margin: "0" }}>${price}</p>
          <br/>
        </div>
      </div>
    </div>
  );
}
