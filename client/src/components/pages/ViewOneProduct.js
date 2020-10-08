import React, { useState, useEffect } from "react";
import axios from "axios";

import "../products/styles/SingleProductPage.css";

import useHidePageInformation from "../../hooks/useHidePageInformation";

export default function ViewOneProduct(props) {
  // useHidePageInformation();

  const [product, setProduct] = useState({});

  // Getting one product
  useEffect(() => {
    axios
      .get("http://localhost:5000/products/product/" + props.match.params.id)
      .then((res) => {
        setProduct(res.data);
      });
  }, [props.match.params.id]);

  return (
    <div className="single-product-contianer">
      <img src={product.imgUrl} alt="" />
      <div className="interactive-container">
        <p>{product.category}</p>
        <h1>{product.title}</h1>
        <h3>${product.price}</h3>
        {product.colors ? (
          product.colors.map((item, i) => {
            return <button className="colors" key={i}>{item}</button>;
          })
        ) : (
          <p>No Colors Available</p>
        )}
        <br/>
        <br/>
        <br/>
        {product.size ? (
          product.size.map((item, i) => {
            return <button className="sizes" key={i}>{item}</button>;
          })
        ) : (
          <p>No Sizes Available</p>
        )}
      </div>
    </div>
  );
}
