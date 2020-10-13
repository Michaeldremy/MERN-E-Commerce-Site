import React, { useState } from "react";
import Axios from "axios";

import AddToCartButton from "../misc/AddToCartButton";
import AppInputField from "../misc/AppInputField";
import ErrorNotice from "../misc/ErrorNotice";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(Number);
  const [colors, setColors] = useState([]);
  const [size, setSize] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(true);
  const [quantity, setQuantity] = useState(Number);
  const [amount, setAmount] = useState(Number);

  const toggleCheckbox = () => {
    setStock(!stock);
    console.log("Checkbox checked:", stock);
  };

  const onSubmitHandler = (e) => {
      e.preventDefault();
      Axios
        .post("http://localhost:5000/products/create", {
          title,
          description,
          price,
          colors,
          size,
          imgUrl,
          category,
          stock,
          quantity,
          amount,
        })
        .then(res => console.log(res))
        .catch(err => console.log(err.response))
  };

  return (
    <div>
      <h1>Create Product</h1>
      <form className="form" onSubmit={onSubmitHandler}>
        <AppInputField
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <AppInputField
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <AppInputField
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <AppInputField
          type="text"
          placeholder="Colors, seperate by a comma"
          onChange={(e) => setColors(e.target.value)}
        />
        <AppInputField
          type="text"
          placeholder="Size, seperate by a comma"
          onChange={(e) => setSize(e.target.value)}
        />
        <AppInputField
          type="text"
          placeholder="Image Url"
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <AppInputField
          type="text"
          placeholder="Category case sensitive"
          onChange={(e) => setCategory(e.target.value)}
        />
        <label htmlFor="stock">In Stock, yes or no</label>
        <input type="checkbox" checked />
        <AppInputField
          type="number"
          placeholder="Quantity Available"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <AppInputField
          type="number"
          placeholder="Amount: Please enter 0"
          onChange={(e) => setAmount(e.target.value)}
        />
        <AddToCartButton type="submit" title="Create Product"/> 
      </form>
    </div>
  );
}
