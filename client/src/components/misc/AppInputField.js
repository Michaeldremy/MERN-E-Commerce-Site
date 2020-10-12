import React from 'react'

export default function Input({ placeholder, type }) {
  return (
    <div>
      <input type={type} placeholder={placeholder}/>
    </div>
  )
}
