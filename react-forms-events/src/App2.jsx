import React from 'react'
import { useState } from 'react';

function App() {
  const obj = {
                name: "",
                age: "",
                course: ""
            }
  const [user, setUser] = useState(obj);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted!")
  }
  
  return (
    <div>

        <h1>Name: {user.name}</h1>
        <h1>Age: {user.age}</h1>
        <h1>Course: {user.course}</h1>

        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                onChange={(e)=> setUser((prev)=> ({...prev, name: e.target.value}) )}
            />
            <input 
                type="text"
                onChange={(e)=> setUser((prev)=> ({...prev, age: e.target.value}) )}
            />
            <input 
                type="text"
                onChange={(e)=> setUser((prev)=> ({...prev, course: e.target.value}) )}
            />

            <button type="submit">Submit</button>

        </form>
    </div>
  )
}

export default App