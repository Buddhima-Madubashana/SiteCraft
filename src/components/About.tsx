import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-alt about-section">
      <div className="container">
        <div className="about-grid grid-2">
          <div className="about-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="SiteCraft Construction Team" 
              className="about-image"
            />
            <div className="about-badge">
              <span className="badge-number">20+</span>
              <span className="badge-text">Years of<br/>Experience</span>
            </div>
          </div>
          
          <div className="about-content">
            <span className="section-subtitle">About SiteCraft</span>
            <h2 className="about-title">Building the Future With Integrity & Precision</h2>
            <p className="about-desc">
              Founded over two decades ago, SiteCraft has grown into one of the most trusted names 
              in commercial and high-end residential construction. We believe that a rigid adherence to deadlines 
              and an unwavering commitment to safety are the cornerstones of successful project delivery.
            </p>
            <p className="about-desc">
              Our track record speaks for itself. We don't just build structures; we build long-standing relationships 
              built on mutual trust and a standard of quality that exceeds expectations.
            </p>
            
            <ul className="about-list">
              <li>
                <CheckCircle2 className="about-icon" />
                <span>Unyielding Standard of Quality Assurance</span>
              </li>
              <li>
                <CheckCircle2 className="about-icon" />
                <span>Strict Adherence to Project Budgets & Deadlines</span>
              </li>
              <li>
                <CheckCircle2 className="about-icon" />
                <span>Total Commitment to On-Site Safety & Compliance</span>
              </li>
            </ul>
            
            <a href="#contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>Consult Our Experts</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
