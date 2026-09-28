import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import HeaderActions from '../HeaderActions/HeaderActions'
import Logo from "../../assets/logo.png"
import "./Header.css"

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <Navbar />

      <Link to="/" className="site-logo" aria-label="Home">
        <img src={Logo} alt="" />
      </Link>

      <HeaderActions />
    </header>
  )
}

export default Header
