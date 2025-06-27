// src/Components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <img src="https://via.placeholder.com/40" alt="Studily Logo" className="footer-logo" />
          <h3>Studily</h3>
          <p>We provide a comprehensive educational experience from Class 1 to 12, complete with structured curriculum.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Blog</li>
            <li>Support</li>
            <li>Site Map</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li>About US</li>
            <li>Careers</li>
            <li>Contact US</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Social Media</h4>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-google"></i>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2025 Studily Learning. All rights reserved.</p>
        <p className="footer-note">Inspired by Neo Robo Labs. Website design based on user-provided image.</p>
      </div>
    </footer>
  );
}

export default Footer;
