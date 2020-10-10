import React from "react";
import { Link } from "react-router-dom";

export default function RelatedItems({ imgUrl, title, price, itemId }) {
  const h1Styles = {
    margin: "5px 0",
    fontSize: "18px",
  };

  const h3Styles = {
    margin: "5px 0",
    fontWeight: "200",
    fontSize: "15px",
  };

  const container = {
    maxWidth: "px",
    margin: "2rem 2rem",
  };

  return (
    <div style={container}>
      {/* Img and h1 is routing to single product page */}
      <Link to={`/products/product/${itemId}`} style={{ color: "black" }}>
        <img style={{ height: "275px", maxWidth: '225px' }} src={imgUrl} />
      </Link>
      <Link to={`/products/product/${itemId}`} style={{ color: "black" }}>
        <h1 style={h1Styles}>{title}</h1>
      </Link>
      <h3 style={h3Styles}>${price}</h3>
    </div>
  );
}
