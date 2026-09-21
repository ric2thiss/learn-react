import React from 'react'
import {useTimer} from "./hooks/useTimer.js"
function Timer() {
    const {seconds, start, stop, reset} = useTimer();
  return (
    <>
        <h1>{seconds}</h1>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
    </>
  )
}

export default Timer