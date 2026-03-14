import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Arthur Pendelton",
      project: "Alpine Luxury Build",
      text: "SiteCraft is simply unmatched in their attention to detail. Our new headquarters was completed two weeks ahead of schedule and the structural integrity is fully evident. They transformed our vision into reality without compromising on quality."
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      project: "Retail Core Renovation",
      text: "Handling a commercial renovation while staying operational is incredibly stressful, but the SiteCraft team managed every phase professionally. Their zero-accident safety record gave our board complete peace of mind."
    },
    {
      id: 3,
      name: "Marcus Liang",
      project: "Silicon Tech Hub",
      text: "From the initial blueprint consultation to the final fit-out, communicating with their team was seamless. They are highly transparent with costs, preventing any budget surprises. Truly a premier contractor."
    }
  ];

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="text-center section-header">
          <span className="section-subtitle">Social Proof</span>
          <h2>Client Testimonials</h2>
          <p className="section-desc">
            Don't just take our word for it. Hear from those who have trusted us with their largest investments.
          </p>
        </div>
        
        <div className="testimonials-grid grid-3">
          {reviews.map((rev) => (
            <div key={rev.id} className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">"{rev.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{rev.name.charAt(0)}</div>
                <div>
                  <h4 className="author-name">{rev.name}</h4>
                  <span className="author-project">{rev.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
