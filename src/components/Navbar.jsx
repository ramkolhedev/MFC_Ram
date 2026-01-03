import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="./images/KFC_Logo1.png" alt="KFC Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/rewards-coupons">Rewards</Link></li>
        <li><Link to="/gift-cards">Gift Cards</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button className="signin-btn">Sign In</button>
    </div>
  );
};

export default Navbar;