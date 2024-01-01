// components/Footer.js

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social media icons

function Footer() {
  return (
    <footer className="bg-light">
      <div className="container py-4">
        <div className="row">
          {/* Contact Information */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              Address: 123 Main Street<br />
              City, State ZIP Code<br />
              Email: contact@example.com<br />
              Phone: (123) 456-7890
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-2">
        <p>&copy; 2023 Ebrahim Khajeh. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

