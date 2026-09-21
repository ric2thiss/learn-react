import React from 'react'

function ChildCount({sendCount}) {
  return (
    <div>
        <h1>ChildCount</h1>
        <button onClick={()=>sendCount("increment")}>Increment</button>
        <button onClick={()=>sendCount("decrement")}>Decrement</button>
    </div>
  )
}

export default ChildCount