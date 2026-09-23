import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import HamburgerIcon from "../../assets/hamburger-icon.png"

function Navbar() {
    const navLinks = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "Collections",
            path: "/collections"
        },
        {
            label: "New",
            path: "/new"
        },
    ]
  return (
    <>
        <nav>
            <div><img src={HamburgerIcon} alt="Menu Icon" /></div>
            {navLinks.map((navLink)=> <NavLink to={navLink.path} className="nav-links" key={navLink.label}>{navLink.label}</NavLink>)}
        </nav>
    </>
    
  )
}

export default Navbar