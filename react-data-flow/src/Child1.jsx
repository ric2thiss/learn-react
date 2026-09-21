import React from 'react'

function Child({sendName}) {
  return (
    <div>
        <h1>Child</h1>
        <button onClick={()=> sendName("Ric")}>Send the Name Ric</button>
    </div>
  )
}

export default Child