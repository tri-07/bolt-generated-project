import React from 'react';
    import { Link } from 'react-router-dom';

    function Navbar() {
      return (
        <nav className="landing-nav">
          <div className="landing-nav-left">
            <span className="logo">TriWare</span>
            <Link to="/pricing">Pricing</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="landing-nav-right">
            <Link to="/login">Login</Link>
            <button className="get-started-btn">Get Started Free</button>
          </div>
        </nav>
      );
    }

    export default Navbar;
