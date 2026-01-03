import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

import linkedin_icon from "../assets/linkedin_icon.png";
import facebook_icon from "../assets/facebook_icon.png";
import twitter_icon from "../assets/twitter_icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">
          
          <div className="footer-section brand-section">
            <h3 className="footer-logo">🍗 MFC</h3>
            <p className="brand-desc">
              Finger-Lickin' Good since 1992. Bringing you the taste of authentic, crispy, and delicious fried chicken.
            </p>

            <div className="social-links">
              <a href="#"><img src={facebook_icon} /></a>
              <a href="#"><img src={twitter_icon} /></a>
              <a href="#"><img src={linkedin_icon} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/rewards-coupons">Rewards</Link></li>
              <li><Link to="/gift-cards">Gift Cards</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p><strong>📞 Phone:</strong><br/>1800-22-4244</p>
              <p><strong>📧 Email:</strong><br/>support@kfc.co.in</p>
              <p><strong>🕐 Hours:</strong><br/>24/7 Service</p>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} MFC India. All rights reserved. | Finger-Lickin' Good 🍗
          </p>

          <div className="footer-badges">
            <span className="badge">Made with ❤️ in India</span>
            <span className="badge">🔒 Secure & Safe</span>
          </div>
        </div>
      </div>

      <div className="footer-glow"></div>
    </footer>
  );
};

export default Footer;
