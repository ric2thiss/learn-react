import React from 'react'
import "./App.css"
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'
import Button from './Button'
import Header from './Header'
import { UserContext } from './UserContext'
function App() {
  const {theme, toggle} = useContext(ThemeContext)
  const { user, setUser } = useContext(UserContext)
  return (
    <div className={theme}>
        <h1>App</h1>
        <Header />
        <input type="text" value={user} onChange={(e)=> setUser((prev)=> e.target.value)}  />
        <Button toggle={toggle} name="Change Theme"/>
    </div>
  )
}

export default App