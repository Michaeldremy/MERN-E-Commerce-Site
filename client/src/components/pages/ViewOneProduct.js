import React, { useState, useEffect } from "react";
import axios from "axios";

import "../products/styles/SingleProductPage.css";

import useHidePageInformation from "../../hooks/useHidePageInformation";
import AddToCartButton from "../misc/AddToCartButton";
import QuantityDropdownButton from "../misc/QuantityDropdownButton";
import ColorSelectorButton from "../misc/ColorSelectorButton";

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
            return (
              <ColorSelectorButton key={i} scopeColor={item} title={item} />
            );
          })
        ) : (
          <p>No Colors Available</p>
        )}
        <br />
        {product.size ? (
          product.size.map((item, i) => {
            return (
              <button className="sizes" key={i}>
                {item}
              </button>
            );
          })
        ) : (
          <p>No Sizes Available</p>
        )}
        <div className="product-info-container">
          <h3>Product Information</h3>
          <h4>{product.description}</h4>
        </div>
        <div className="amount-calulator">
          <QuantityDropdownButton />
          <AddToCartButton title="Add to Cart" />
        </div>
      </div>
    </div>
  );
}
