import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import "./Layout.css"

function Layout() {
  return (
    <div className="main-container">
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
