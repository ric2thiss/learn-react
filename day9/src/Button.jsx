import React from 'react'

function Button({toggle, name}) {
  return (
    <>
    <button onClick={toggle}>{name}</button>
    </>
  )
}

export default Button