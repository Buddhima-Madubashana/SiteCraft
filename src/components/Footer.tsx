import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid grid-4">
          <div className="footer-brand">
            <h2 className="footer-logo">SiteCraft<span className="text-primary">.</span></h2>
            <p className="footer-desc">
              Premier commercial construction and renovation experts serving Colombo and beyond. 
              We build structures that stand the test of time.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#portfolio">Project Portfolio</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Services</h4>
            <ul>
              <li><a href="#services">New Home Builds</a></li>
              <li><a href="#services">Structural Renovations</a></li>
              <li><a href="#services">Roofing & Foundation</a></li>
              <li><a href="#services">Commercial Fit-Outs</a></li>
            </ul>
          </div>

          <div className="footer-legal">
            <h4 className="footer-title">Legal & Licensing</h4>
            <p className="footer-license">
              <strong>License No:</strong> BC-987654<br/>
              <strong>Bonding:</strong> Fully Bonded ($5M)<br/>
              <strong>Insurance:</strong> Comprehensive Liability
            </p>
            <ul className="legal-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SiteCraft Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
