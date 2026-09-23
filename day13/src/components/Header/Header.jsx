import React from 'react'
import Navbar from '../Navbar/Navbar'

import "./Header.css"
import Logo from "../../assets/logo.png"
import HeaderActions from '../HeaderActions/HeaderActions'

function Header() {
  return (
    <header>
        <Navbar />
        <img src={Logo} alt="Logo" />
        <HeaderActions />
    </header>
  )
}

export default Header