
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useProduct } from "./useProduct";
import "./Layout.css";

function Layout() {
  const { cartItems } = useProduct();

  return (
    <div className="layout">

      {/* Navigation */}
      <header className="navbar">
        <div className="nav-container">

          <NavLink to="/" className="logo">
            MyStore
          </NavLink>

          <nav className="nav-links">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
              }
            >
              Dashboard
            </NavLink>
          </nav>

          <button className="cart-button" >
            🛒 Cart

            {cartItems.length > 0 && (
              <span className="cart-badge">
                {cartItems.length}
              </span>
            )}
          </button>

        </div>
      </header>

      {/* Page Content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 MyStore. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Layout;
