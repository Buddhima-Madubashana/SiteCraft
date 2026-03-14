import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Arthur Pendelton",
      project: "Alpine Luxury Build",
      text: "SiteCraft is simply unmatched in their attention to detail. Our new headquarters was completed two weeks ahead of schedule and the structural integrity is fully evident.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      project: "Retail Core Renovation",
      text: "Handling a commercial renovation while staying operational is stressful, but the SiteCraft team managed every phase professionally. Their zero-accident record gave us complete peace of mind.",
      rating: 4
    },
    {
      id: 3,
      name: "Marcus Liang",
      project: "Silicon Tech Hub",
      text: "From the initial blueprint consultation to the final fit-out, communicating with their team was seamless. They are highly transparent with costs, preventing any budget surprises.",
      rating: 5
    },
    {
      id: 4,
      name: "David Chen",
      project: "Skyline Tower",
      text: "Absolute professionals. Their adherence to the timeline without sacrificing safety or quality is unprecedented in the high-rise commercial sector.",
      rating: 5
    },
    {
      id: 5,
      name: "Elena Rodriguez",
      project: "Harbor View Mall",
      text: "SiteCraft handled our massive retail build-out smoothly. They provided excellent communication and delivered a flawless end product for our tenants.",
      rating: 4
    },
    {
      id: 6,
      name: "James Carter",
      project: "Downtown Complex",
      text: "The craftsmanship is top-tier. When we encountered unexpected foundational challenges, their engineering team solved them rapidly and efficiently.",
      rating: 5
    },
    {
      id: 7,
      name: "Anita Desai",
      project: "Sunrise Industrial",
      text: "We required a contractor who could handle complex zoning laws and heavy industrial requirements. SiteCraft exceeded all expectations at every turn.",
      rating: 3
    },
    {
      id: 8,
      name: "Oliver Bennett",
      project: "Metro Transit Hub",
      text: "They bring a level of technical precision and structural genius that gave our investors complete confidence from the very first day of breaking ground.",
      rating: 4
    }
  ];

  // Split reviews into two halves for the two rows
  const topRowReviews = reviews.slice(0, 4);
  const bottomRowReviews = reviews.slice(4, 8);
  
  // Duplicate arrays to create the infinite scroll illusion seamlessly
  const topMarquee = [...topRowReviews, ...topRowReviews, ...topRowReviews, ...topRowReviews];
  const bottomMarquee = [...bottomRowReviews, ...bottomRowReviews, ...bottomRowReviews, ...bottomRowReviews];

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
      </div>
      
      <div className="marquee-container">
        {/* Top line moves Right */}
        <div className="marquee-track right">
          {topMarquee.map((rev, idx) => (
            <div key={`top-${rev.id}-${idx}`} className="testimonial-card marquee-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < rev.rating ? "currentColor" : "none"} 
                    opacity={i < rev.rating ? 1 : 0.3} 
                  />
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
        
        {/* Bottom line moves Left */}
        <div className="marquee-track left">
          {bottomMarquee.map((rev, idx) => (
            <div key={`bottom-${rev.id}-${idx}`} className="testimonial-card marquee-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < rev.rating ? "currentColor" : "none"} 
                    opacity={i < rev.rating ? 1 : 0.3} 
                  />
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
