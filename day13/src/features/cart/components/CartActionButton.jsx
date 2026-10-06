import React from 'react'
import { NavLink } from 'react-router-dom'
import {useCarts} from "../useCarts"

import CartIcon from "../../../assets/cart-icon.png"

function CartActionButton() {
    const {cart} = useCarts()
  return (
    <NavLink to="/profile/cart">
      <button className="cart-button" type="button" aria-label="Open cart">
        <span>Cart {cart.length > 0 ? `(${cart.length})`:""}</span>
        <span className="cart-button__icon">
          <img src={CartIcon} alt="" />
        </span>
      </button>
    </NavLink>
  )
}

export default CartActionButton