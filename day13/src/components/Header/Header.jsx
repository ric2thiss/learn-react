import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import HeaderActions from '../HeaderActions/HeaderActions'
import Logo from "../../assets/logo.png"
import "./Header.css"

function Header() {
  return (
    <header className="site-header">
      <Navbar />

      <Link to="/" className="site-logo" aria-label="Home">
        <img src={Logo} alt="" />
      </Link>

      <HeaderActions />
    </header>
  )
}

export default Header
