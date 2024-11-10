import React from "react";

import "./homepage.css"; 
const Footer = () => {
    return (
        <footer className="footer">
      <div className="footer-container">
        {/* Company Information */}
        <div className="footer-section">
          <h3>About Edurl</h3>
          <p>
          "Empowering rural communities with advanced educational tools, our platform bridges the gap between remote areas and quality learning. Join us in transforming education through virtual classrooms, resource management, and enhanced connectivity solutions."
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: </p>
          <p>Phone: +91-XXXXXXX</p>
          <p>Address: 123, Business Park, New Delhi, India</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com"><img src="/images/facebook-icon.png" alt="Facebook" /></a>
            
            <a href="https://linkedin.com"><img src="/images/linkedin-icon.png" alt="LinkedIn" /></a>
            <a href="https://instagram.com"><img src="/images/instagram-icon.png" alt="Instagram" /></a>
          </div>
        </div>
      </div>

    
    </footer>
     );
    };
    
    export default Footer;