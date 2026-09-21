import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Contact() {
  return (
    <>
    <h1>Contact Page</h1>
    <Link to="/contact/contact-form">Form</Link>

    <Outlet />
    </>
  )
}

export default Contact