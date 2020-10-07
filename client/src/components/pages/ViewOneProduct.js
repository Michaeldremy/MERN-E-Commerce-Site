import React, { useState, useEffect } from "react";
import axios from "axios";

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
      <img src={product.imgUrl} alt="" style={{height: "550px"}}/>
    </div>
  );
}
