import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import background from '../assets/background.png'

function Layout() {
  return (
    <div
      className="main-container"
      style={{
        backgroundImage: `url(${background})`,
        minHeight: '100dvh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
