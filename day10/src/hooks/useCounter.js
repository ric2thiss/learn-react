import { useState } from "react"

export function useCounter() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(prev => prev + 1)
    }

    function decrement(){
        setCount(prev => prev === 0 ? 0:prev-1)
    }

    function reset(){
        setCount(0)
    }

    return {
        count,
        increment,
        decrement,
        reset,
        setCount
    }
}