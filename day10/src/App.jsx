import React from 'react'
import Counter from './Counter'
import {useDocumentTitle} from "./hooks/useDocumentTitle.js"
import Timer from './Timer.jsx'
import { useForm } from './hooks/useForm.js'

function App() {
  const {values, handleChange, reset} = useForm();
  useDocumentTitle("My Website")
  return (
    <div>
      <Timer />
      <Counter />

      <form>
        <h1>Name: {values.name}</h1>
        <h1>Email: {values.email}</h1>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name"  onChange={(e)=> handleChange({name:"name", value:e.target.value})} /> <br />
        <label htmlFor="email">Email: </label>
         <input type="text" name="email"  onChange={(e)=> handleChange({name:"email", value:e.target.value})} />
      </form>
    </div>
  )
}

export default App