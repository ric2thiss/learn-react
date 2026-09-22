import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const navLinks = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "Products",
            path: "/products"
        },
        {
            label: "About",
            path: "/about"
        },
    ]
  return (
    <nav>
        {navLinks.map((navLink)=> <NavLink to={navLink.path} key={navLink.label}>{navLink.label}</NavLink>)}
    </nav>
  )
}

export default Navbar