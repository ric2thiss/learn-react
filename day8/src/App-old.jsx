import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  useEffect(()=>{
    console.log("Component Mounted");
    document.title = `Count ${count}`
    setName((prev)=> prev = `${count}`)
  },[count])
  return (
    <div>
      <h1>{count}</h1>
      <h1>Name: {name}</h1>

      <button onClick={()=> setCount(count+1)}>Increment</button>
      <button onClick={()=> setCount((prev)=> prev === 0 ? 0 : prev - 1)}>Decrement</button>
    </div>
  )
}

export default App