import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Arthur Pendelton",
      project: "Alpine Luxury Build",
      text: "SiteCraft is simply unmatched in their attention to detail. Our new headquarters was completed two weeks ahead of schedule and the structural integrity is fully evident."
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      project: "Retail Core Renovation",
      text: "Handling a commercial renovation while staying operational is stressful, but the SiteCraft team managed every phase professionally. Their zero-accident record gave us complete peace of mind."
    },
    {
      id: 3,
      name: "Marcus Liang",
      project: "Silicon Tech Hub",
      text: "From the initial blueprint consultation to the final fit-out, communicating with their team was seamless. They are highly transparent with costs, preventing any budget surprises."
    },
    {
      id: 4,
      name: "David Chen",
      project: "Skyline Tower",
      text: "Absolute professionals. Their adherence to the timeline without sacrificing safety or quality is unprecedented in the high-rise commercial sector."
    },
    {
      id: 5,
      name: "Elena Rodriguez",
      project: "Harbor View Mall",
      text: "SiteCraft handled our massive retail build-out smoothly. They provided excellent communication and delivered a flawless end product for our tenants."
    },
    {
      id: 6,
      name: "James Carter",
      project: "Downtown Complex",
      text: "The craftsmanship is top-tier. When we encountered unexpected foundational challenges, their engineering team solved them rapidly and efficiently."
    },
    {
      id: 7,
      name: "Anita Desai",
      project: "Sunrise Industrial",
      text: "We required a contractor who could handle complex zoning laws and heavy industrial requirements. SiteCraft exceeded all expectations at every turn."
    },
    {
      id: 8,
      name: "Oliver Bennett",
      project: "Metro Transit Hub",
      text: "They bring a level of technical precision and structural genius that gave our investors complete confidence from the very first day of breaking ground."
    }
  ];

  // Group reviews into slides containing 4 cards each (2 lines of 2 cards)
  const slides = [];
  for (let i = 0; i < reviews.length; i += 4) {
    slides.push(reviews.slice(i, i + 4));
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

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
        
        <div className="testimonial-slider-wrapper">
          <button className="testimonial-btn prev-btn" onClick={prevSlide} aria-label="Previous Testimonials">
            <ChevronLeft size={28} />
          </button>
          
          <div className="testimonial-slider-container">
            <div 
              className="testimonial-slider-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slideGroup, slideIndex) => (
                <div key={slideIndex} className="testimonial-slide">
                  <div className="testimonial-slide-grid">
                    {slideGroup.map((rev) => (
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
              ))}
            </div>
          </div>

          <button className="testimonial-btn next-btn" onClick={nextSlide} aria-label="Next Testimonials">
            <ChevronRight size={28} />
          </button>
        </div>
        
        <div className="testimonial-indicators">
          {slides.map((_, idx) => (
            <button 
              key={idx}
              className={`t-indicator-dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
