import React from 'react'
import { useState } from 'react'

function App() {
    const obj = {
        name: "",
        age: "",
        course: "",
        email: ""
    }

    const [user, setUser] = useState(obj)
    const [usersData, setusersData] = useState([])



    const handleSubmit = (e) => {
        e.preventDefault();

        if(user.name === "" || user.age === "" || user.course === "" || user.email === "") {
            console.log("All fields are required!")
            return;
        }

        let isExist = null;

        if(usersData.length !== 0) {
            isExist = usersData.some(u => u.name === user.name )
        }

        if(isExist){
            console.log("User already Exist")
            return;
        }

        setusersData((prev)=>[...prev, user])

        setUser({
            name: "",
            age: "",
            course: "",
            email: ""
        })

        alert("Registered successfully!")

        return

    }
    
  return (
    <div>
        <fieldset>
            <legend>Information : </legend>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Course: {user.course}</p>
            <p>Email: {user.email}</p>
        </fieldset>

        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name: </label>
            <input type="text" value={user.name} onChange={(e)=>setUser((prev)=> ({...prev, name: e.target.value}))} /> <br />
            <label htmlFor="">Age: </label>
            <input type="text"  value={user.age} onChange={(e)=>setUser((prev)=> ({...prev, age: e.target.value}))} /> <br />
            <label htmlFor="">Course: </label>
            <input type="text"  value={user.course} onChange={(e)=>setUser((prev)=> ({...prev, course: e.target.value}))} /><br />
            <label htmlFor="">Email: </label>
            <input type="text"  value={user.email} onChange={(e)=>setUser((prev)=> ({...prev, email: e.target.value}))} /><br />

            <button type="submit">Submit</button>
        </form>

        {usersData.length < 1 ? "No Profile yet": <>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Course</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {usersData.map(user => (
                    <tr key={user.name}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.course}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        
        </>}       
    </div>
  )
}

export default App