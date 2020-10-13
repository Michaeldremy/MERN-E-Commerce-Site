import React from 'react'

export default function Input({ placeholder, type, onChange }) {
  return (
    <div>
      <input type={type} placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}
