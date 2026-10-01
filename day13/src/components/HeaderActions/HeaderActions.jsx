import React from 'react'
import "./HeaderActions.css"
import {NavLink} from "react-router-dom"
import ProfileIcon from "../../assets/profile-action-btn.png"
import CartIcon from "../../assets/cart-icon.png"
import WishListIcon from "../../assets/wishlist-icon.png"
import { useCarts } from '../../hooks/useCarts'

function HeaderActions() {
  const {cart} = useCarts()
  
  return (
    <div className="header-actions">
      <button className="header-icon-button" type="button" aria-label="Wishlist">
        <img src={WishListIcon} alt="" />
      </button>

    <NavLink to="/profile/cart">
      <button className="cart-button" type="button" aria-label="Open cart">
        <span>Cart {cart.length > 0 ? `(${cart.length})`:""}</span>
        <span className="cart-button__icon">
          <img src={CartIcon} alt="" />
        </span>
      </button>
    </NavLink>

      <button className="header-icon-button" type="button" aria-label="Profile">
        <img src={ProfileIcon} alt="" />
      </button>
    </div>
  )
}

export default HeaderActions
