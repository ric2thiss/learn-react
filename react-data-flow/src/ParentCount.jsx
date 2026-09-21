import React from 'react'
import { useState } from 'react'
import ChildCount from './ChildCount'

function ParentCount() {
    const [count, setCount] = useState(0)
    const handleCount = (method) => {
        if(method === "increment")  setCount(count + 1)
        if(method === "decrement")  setCount(count - 1)
    }
  return (
    <div>
        <h1>ParentCount</h1>
        <h1>{count}</h1>
        <ChildCount sendCount={handleCount}/>
    </div>
  )
}

export default ParentCount