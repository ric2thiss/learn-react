import React from 'react'
import { useContext } from 'react'
import {UserContext} from "./UserContext"

function Header() {
  const {user} = useContext(UserContext)
  return (
    <div className='header'>
        <h1>LOGO</h1>
        <nav>
            <ul>
                <li>Dashboard</li>
                <li>Profile</li>
                <li>{user}</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header