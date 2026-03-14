import React from 'react';
import { ShieldCheck, Award, HardHat, FileCheck } from 'lucide-react';
import './TrustIndicators.css';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: <ShieldCheck size={40} className="trust-icon" />,
      title: "Fully Licensed & Insured",
      desc: "Comprehensive coverage and certified for all commercial projects."
    },
    {
      icon: <Award size={40} className="trust-icon" />,
      title: "Award-Winning Excellence",
      desc: "Recognized as a Top 10 Commercial Builder in the industry."
    },
    {
      icon: <HardHat size={40} className="trust-icon" />,
      title: "Safety First",
      desc: "OSHA compliant with a 100% spotless safety record."
    },
    {
      icon: <FileCheck size={40} className="trust-icon" />,
      title: "Bonded Contracts",
      desc: "Your investment is secure with our comprehensively bonded projects."
    }
  ];

  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-grid">
          {indicators.map((item, index) => (
            <div key={index} className="trust-card glass-panel">
              <div className="trust-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="trust-title">{item.title}</h3>
              <p className="trust-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
