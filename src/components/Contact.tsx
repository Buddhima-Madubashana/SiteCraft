import React, { useState } from 'react';
import { PhoneCall, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Commercial Build'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you soon.');
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container" style={{ position: 'relative', zIndex: '2' }}>
        <div className="contact-grid grid-2">
          
          <div className="contact-info">
            <span className="section-subtitle">Get In Touch</span>
            <h2 className="contact-title">Let's Discuss Your Next Big Project</h2>
            <p className="contact-desc">
              We remove the friction from construction management. Reach out to our 
              experts today for a free consultation and project estimate.
            </p>
            
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon"><PhoneCall /></div>
                <div>
                  <h4>Call Us Directly</h4>
                  <a href="tel:+94771234567" className="info-link">+94 77 123 4567</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Mail /></div>
                <div>
                  <h4>Email Us</h4>
                  <a href="mailto:contact@sitecraft.lk" className="info-link">contact@sitecraft.lk</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><MapPin /></div>
                <div>
                  <h4>Office Location</h4>
                  <span className="info-link">Level 25, West Tower, World Trade Center,<br/> Colombo 01, Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper glass-panel">
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Request a Quote</h3>
              
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="John Doe"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  placeholder="+94 77 123 4567"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="projectType">Project Type</label>
                <select name="projectType" id="projectType" value={formData.projectType} onChange={handleChange}>
                  <option value="Commercial Build">Commercial Build</option>
                  <option value="New Home Build">New Home Build</option>
                  <option value="Renovation">Renovation</option>
                  <option value="Roofing">Roofing & Foundation</option>
                </select>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">Submit Request</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
