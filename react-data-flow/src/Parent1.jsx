import React from 'react'
import Child from './Child1'

function Parent() {
    const handleName = (name) =>{
        console.log(name)
    }
  return (
    <div>
        <h1>Parent</h1>
        <Child sendName={handleName}/>
    </div>
  )
}

export default Parent