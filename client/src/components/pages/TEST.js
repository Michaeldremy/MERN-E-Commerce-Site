import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import AddToCartButton from '../misc/AddToCartButton'
import QuantityDropdownButton from '../misc/QuantityDropdownButton'
import ProductDisplay from '../products/ProductDisplay'
import ViewOneProduct from './ViewOneProduct'

export default function TEST() {

  return (
    <div>
      <AddToCartButton title="Add to Cart"/>
      <QuantityDropdownButton />
      {/* <ViewOneProduct /> */}
      {/* <ProductDisplay /> */}
    </div>
  )
}
