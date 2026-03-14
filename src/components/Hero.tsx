import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">Premier Commercial Construction in Colombo</h1>
          <p className="hero-subtitle">
            Delivering uncompromising quality, safety, and precision for over two decades. 
            We specialize in high-end commercial built-outs and structurally complex developments.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Get a Free Estimate</a>
            <a href="#portfolio" className="btn btn-outline">View Our Work</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
