import React from 'react'
import {useCounter} from "./hooks/useCounter"

function Counter() {
    const {count, increment, decrement, reset, setCount} = useCounter();
  return (
    <div>
        <h1>Counter {count}</h1>
        <button onClick={increment}>+</button>
        <button disabled={count === 0} onClick={reset}>Reset</button>
        <button disabled={count === 0} onClick={decrement}>-</button>
        <br />
        <label htmlFor="inital">Initial Value: </label>
        <input type="number"  onChange={(e)=> setCount(Number(e.target.value))} value={count} />
    </div>
  )
}

export default Counter