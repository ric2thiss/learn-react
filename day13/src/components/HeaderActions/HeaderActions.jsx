import React from 'react'
import "./HeaderActions.css"
import ProfileIcon from "../../assets/profile-action-btn.png"
import CartIcon from "../../assets/cart-icon.png"
import WishListIcon from "../../assets/wishlist-icon.png"
function HeaderActions() {
  return (
    <section className='header-actions'>
        <div><img src={WishListIcon} alt="Wishlist Icon" /></div>
        <div className='cart-action-btn'>
            <p>Cart</p>
            <img src={CartIcon} alt="cart icon" />
        </div>
        <div>
            <img src={ProfileIcon} alt="profile-action-btn" />
        </div>
    </section>
  )
}

export default HeaderActions