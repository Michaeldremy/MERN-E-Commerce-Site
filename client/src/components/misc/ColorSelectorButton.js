import React from 'react'

export default function ColorSelectorButton({scopeColor, title}) {

  const styles = {
    color: scopeColor,
    display: 'flex',
    margin: '10px 0px',
    padding: '5px 10px',
    fontWeight: 'bold',
    borderRadius: '5px',
    backgroundColor: 'black',
    border: '2px solid dodgerblue',
    textTransform: 'uppercase',
    opacity: '.9'
  }

  return (
    <div>
      <button style={styles}>{title}</button>
    </div>
  )
}