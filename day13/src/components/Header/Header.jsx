import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeaderActions from '../HeaderActions/HeaderActions'
import Logo from "../../assets/logo.png"
import "./Header.css"

function Header() {
  return (
    <header className="site-header">
      <Navbar />

      <a href="/" className="site-logo" aria-label="Home">
        <img src={Logo} alt="" />
      </a>

      <HeaderActions />
    </header>
  )
}

export default Header
