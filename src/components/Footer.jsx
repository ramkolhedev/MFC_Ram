import React from 'react';
import './Footer.css';
import About from "./components/About";
import Contact from "./components/Contact";

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
                            <a href="#" className="social-icon"><img src={facebook_icon} /></a>
                            <a href="#" className="social-icon"><img src={twitter_icon} /></a>
                            <a href="#" className="social-icon"><img src={linkedin_icon} /></a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/rewards-coupons">Rewards</a></li>
                            <li><a href="/gift-cards">Gift Cards</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul className="footer-links">
                            <li><a href="/About">About Us</a></li>
                            <li><a href="/Contact">Contact</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Support</h4>
                        <ul className="footer-links">
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Feedback</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <div className="contact-info">
                            <p><strong>📞 Phone:</strong><br />1800-22-4244</p>
                            <p><strong>📧 Email:</strong><br />support@kfc.co.in</p>
                            <p><strong>🕐 Hours:</strong><br />24/7 Service</p>
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; {currentYear} MFC India. All rights reserved. | Finger-Lickin' Good 🍗
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
