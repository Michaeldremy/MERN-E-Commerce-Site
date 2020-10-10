import React, { useState, useEffect } from "react";
import axios from "axios";

import useHidePageInformation from "../../hooks/useHidePageInformation";
import ProductDisplay from "../products/ProductDisplay";

export default function ShirtHome() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products/all-products").then((res) => {
      setProduct(res.data);
      console.log(res.data);
    });
  }, []);

  // useHidePageInformation();

  return (
    <div>
      {product.map((item, i) => {
        return (
          <ProductDisplay
            imgUrl={item.imgUrl}
            title={item.title}
            price={item.price}
            itemId={item._id}
          />
        );
      })}
    </div>
  );
}
