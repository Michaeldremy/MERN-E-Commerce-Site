import React, { useState, useEffect } from "react";
import AddToCartButton from "../misc/AddToCartButton";

import AppInputField from '../misc/AppInputField';

export default function CreateProduct() {




  return (
    <div>
      <h1>Create Product</h1>
      <form className="form">
        <AppInputField type={"text"} placeholder="Title"/>
        <AppInputField type={"text"} placeholder="Description"/>
        <AppInputField type={"number"} placeholder="Price"/>
        <AppInputField type={"text"} placeholder="Colors, seperate by a comma"/>
        <AppInputField type={"text"} placeholder="Size, seperate by a comma"/>
        <AppInputField type={"text"} placeholder="Image Url"/>
        <AppInputField type={"text"} placeholder="Category case sensitive"/>
        <label htmlFor="stock">In Stock, yes or no</label>
        <AppInputField type={"checkbox"} />
        <AppInputField type={"number"} placeholder="Quantity Available"/>
        <AddToCartButton title="Create Product"/>
      </form>
    </div>
  );
}
