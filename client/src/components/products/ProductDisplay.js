import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

// styles
import "../products/styles/Products.css";

export default function ProductDisplay() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products/all-products").then((res) => {
      setProduct(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div id="product-display-container">
      <div id="product-card-container">
        {product
          ? product.map((item, i) => {
              return (
                <div key={i}>
                  <img
                    src={item.imgUrl}
                    alt=""
                    style={{
                      height: "400px",
                      marginRight: "2rem",
                      marginLeft: "2rem",
                    }}
                  />
                  <Link to={`/products/product/${item._id}`} style={{color: "black"}}><h1 style={{ margin: "0" }}>{item.title}</h1></Link>
                  <br />
                  <p style={{margin: "0" }}>${item.price}</p>
                  <br/>
                  {/* Here are are mapping through our size array but first we had to go to the product aka item */}
                </div>
              );
            })
          : "Loading..."}
      </div>
    </div>
  );

  // if (product.data) {
  //   return (
  //     <div>
  //       <div id="product-display-container">
  //         {product.map(({ title, price }) => {
  //           return (
  //             <h1 key={price}>
  //               Title: {title} - ${price}
  //             </h1>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h1>hi</h1>
  //     </div>
  //   );
  // }
}
