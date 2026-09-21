
import { useEffect, useState } from "react"

function App() {
    const [count, setCount] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        if (!isRunning) {
            return
        }

        const interval = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [isRunning])

    function Start() {
        setIsRunning(true)
    }

    function Stop() {
        setIsRunning(false)
    }

    function Reset() {
        setIsRunning(false)
        setCount(0)
    }

    return (
        <div>
            <h1>Seconds {count}</h1>

            <button onClick={Start}>Start</button>
            <button onClick={Stop}>Stop</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default App

