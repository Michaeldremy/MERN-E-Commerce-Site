import React from 'react'

export default function ColorSelectorButton({scopeColor, title}) {

  const styles = {
    height: '30px',
    width: '85px',
    fontSize: '1px',
    color: scopeColor,
    textAlign: 'center',
    display: 'inline-block',
    margin: '25px 5px',
    padding: '5px 15px',
    fontWeight: 'bold',
    borderRadius: '5px',
    border: '.25px solid black',
    backgroundColor: scopeColor,
    textTransform: 'uppercase',
  }

  return (
    <>
      <button style={styles}>{title}</button>
    </>
  )
}