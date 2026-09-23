import React from 'react'
import "./HeaderActions.css"
import ProfileIcon from "../../assets/profile-action-btn.png"
import CartIcon from "../../assets/cart-icon.png"
import WishListIcon from "../../assets/wishlist-icon.png"

function HeaderActions() {
  return (
    <div className="header-actions">
      <button className="header-icon-button" type="button" aria-label="Wishlist">
        <img src={WishListIcon} alt="" />
      </button>

      <button className="cart-button" type="button" aria-label="Open cart">
        <span>Cart</span>
        <span className="cart-button__icon">
          <img src={CartIcon} alt="" />
        </span>
      </button>

      <button className="header-icon-button" type="button" aria-label="Profile">
        <img src={ProfileIcon} alt="" />
      </button>
    </div>
  )
}

export default HeaderActions
