import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import HamburgerIcon from "../../assets/hamburger-icon.png"

function Navbar() {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Collections", path: "/collections" },
    { label: "New", path: "/new" },
  ]

  return (
    <nav className="main-nav" aria-label="Primary navigation">
      <button className="menu-button" type="button" aria-label="Open menu">
        <img src={HamburgerIcon} alt="" />
      </button>

      <div className="nav-list">
        {navLinks.map((navLink) => (
          <NavLink
            to={navLink.path}
            className={({ isActive }) =>
              isActive ? "nav-link nav-link--active" : "nav-link"
            }
            key={navLink.label}
          >
            {navLink.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
