import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <header>
            <nav>
                <NavLink to="/products" className={(isActive)=> isActive ? "nav-link active":"nav-link"}>Products</NavLink>
            </nav>
        </header>

        <Outlet />
    </>
  )
}

export default Layout