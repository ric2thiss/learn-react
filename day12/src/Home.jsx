
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">NEW COLLECTION</span>

          <h1>
            Find What You
            <span> Love.</span>
          </h1>

          <p>
            Discover quality products, great deals, and everything you need
            in one place.
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="primary-button">
              Shop Now →
            </Link>

            <Link to="/about" className="secondary-button">
              Learn More
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-card">
            <span>🔥</span>
            <h3>Best Deals</h3>
            <p>Discover our latest products</p>
          </div>
        </div>
      </section>


      {/* Features */}
      <section className="features">

        <div className="feature">
          <div className="feature-icon">🚚</div>
          <div>
            <h3>Fast Delivery</h3>
            <p>Quick and reliable shipping.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">🔒</div>
          <div>
            <h3>Secure Payment</h3>
            <p>Your transactions are protected.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">⭐</div>
          <div>
            <h3>Quality Products</h3>
            <p>Products you can trust.</p>
          </div>
        </div>

      </section>


      {/* Categories */}
      <section className="categories">

        <div className="section-heading">
          <div>
            <span>EXPLORE</span>
            <h2>Shop by Category</h2>
          </div>

          <Link to="/products">
            View All →
          </Link>
        </div>

        <div className="category-grid">

          <Link to="/products" className="category-card electronics">
            <div>
              <span>📱</span>
              <h3>Electronics</h3>
              <p>Latest technology</p>
            </div>
          </Link>

          <Link to="/products" className="category-card beauty">
            <div>
              <span>✨</span>
              <h3>Beauty</h3>
              <p>Look and feel great</p>
            </div>
          </Link>

          <Link to="/products" className="category-card fashion">
            <div>
              <span>👕</span>
              <h3>Fashion</h3>
              <p>Style for everyone</p>
            </div>
          </Link>

        </div>

      </section>


      {/* CTA */}
      <section className="home-cta">
        <div>
          <span>READY TO SHOP?</span>
          <h2>Find something you'll love.</h2>
          <p>
            Browse our collection and discover your next favorite product.
          </p>
        </div>

        <Link to="/products" className="cta-button">
          Explore Products →
        </Link>
      </section>

    </div>
  );
}

export default Home;

