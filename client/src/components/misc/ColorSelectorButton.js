import React from 'react'

export default function ColorSelectorButton({scopeColor, title}) {

  const styles = {
    height: '30px',
    width: '85px',
    color: scopeColor,
    display: 'flex',
    margin: '10px 0px',
    padding: '5px 15px',
    fontWeight: 'bold',
    borderRadius: '5px',
    border: '.25px solid black',
    backgroundColor: scopeColor,
    textTransform: 'uppercase',
  }

  return (
    <div>
      <button style={styles}>{title}</button>
    </div>
  )
}