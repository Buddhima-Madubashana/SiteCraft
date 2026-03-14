import React from 'react';
import { Home, Hammer, Construction, Briefcase } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Home size={32} />,
      title: 'New Home Builds',
      desc: 'From blueprint to completion, we build custom luxury homes designed for your lifestyle.'
    },
    {
      id: 2,
      icon: <Hammer size={32} />,
      title: 'Structural Renovations',
      desc: 'Expert home additions, structural remodeling, and full-scale interior transformations.'
    },
    {
      id: 3,
      icon: <Construction size={32} />,
      title: 'Roofing & Foundation',
      desc: 'Durable and structurally sound foundations and premium roofing that stand the test of time.'
    },
    {
      id: 4,
      icon: <Briefcase size={32} />,
      title: 'Commercial Fit-Outs',
      desc: 'End-to-end commercial solutions for modern offices, retail spaces, and heavy industry.'
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="text-center section-header">
          <span className="section-subtitle">Our Expertise</span>
          <h2>Comprehensive Core Services</h2>
          <p className="section-desc">
            We deliver exceptional results across a wide range of commercial and residential construction projects.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((svc) => (
            <div key={svc.id} className="service-card">
              <div className="service-icon">
                {svc.icon}
              </div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.desc}</p>
              <div className="service-hover-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
