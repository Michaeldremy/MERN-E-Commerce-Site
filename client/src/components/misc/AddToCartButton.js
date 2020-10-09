import React from 'react'

export default function AddToCartButton({ title, onClick}) {

  return (
    <div>
      <button style={addToCartStyle} onClick={onClick}>{title}</button>
    </div>
  )
}

const addToCartStyle = {
  color: 'white',
  fontSize: '15px',
  backgroundColor: 'black',
  padding: '10px 25px',
  borderRadius: '10px'
}