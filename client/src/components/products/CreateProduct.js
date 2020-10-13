import React, { useState } from "react";
import axios from "axios";

import AddToCartButton from "../misc/AddToCartButton";
import AppInputField from "../misc/AppInputField";
import ErrorNotice from "../misc/ErrorNotice";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(Number);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(false);
  const [quantity, setQuantity] = useState(Number);
  const [amount, setAmount] = useState(Number);
  const [error, setError] = useState();

  const toggleCheckbox = () => {
    setStock(!stock);
    console.log("Checkbox checked:", stock);
  };

  const onSubmitHandler = (e) => {
    try {
      e.preventDefault();
      axios
        .post("http://localhost:5000/products/create", {
          title,
          description,
          price,
          colors,
          sizes,
          imgUrl,
          category,
          stock,
          quantity,
          amount,
        })
        .then((res) => console.log(res));
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div>
      <h1>Create Product</h1>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
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
          onChange={(e) => setSizes(e.target.value)}
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
        <input type="checkbox" defaultChecked onChange={toggleCheckbox} />
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
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
