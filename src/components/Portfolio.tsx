import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Alpine Luxury Build",
      category: "New Home Build",
      isBeforeAfter: false
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Colombo City Plaza",
      category: "Commercial Fit-Out",
      isBeforeAfter: false
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Heritage Restoration",
      category: "Renovation",
      isBeforeAfter: false
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Silicon Tech Hub",
      category: "Commercial Office",
      isBeforeAfter: false
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  // Auto-slide specifically for mobile viewports
  useEffect(() => {
    const handleAutoSlide = () => {
      if (window.innerWidth <= 768) {
        setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      }
    };

    const intervalId = setInterval(handleAutoSlide, 3000);

    return () => clearInterval(intervalId);
  }, [projects.length]);

  return (
    <section id="portfolio" className="section-alt portfolio-section">
      <div className="container">
        <div className="text-center section-header">
          <span className="section-subtitle">Our Work</span>
          <h2>Featured Projects</h2>
          <p className="section-desc">
            Explore our visual gallery of masterfully completed projects, showcasing precision and architectural integrity.
          </p>
        </div>
        
        <div className="portfolio-slider-wrapper">
          <button className="slider-btn prev-btn" onClick={prevSlide} aria-label="Previous Project">
            <ChevronLeft size={28} />
          </button>
          <button className="slider-btn next-btn" onClick={nextSlide} aria-label="Next Project">
            <ChevronRight size={28} />
          </button>

          <div className="portfolio-slider-container">
            <div 
              className="portfolio-slider-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((proj) => (
                <div key={proj.id} className="portfolio-slide">
                  <div className="portfolio-card">
                    <div className="portfolio-image-wrapper">
                      <img src={proj.image} alt={proj.title} />
                      <div className="portfolio-overlay">
                        <div className="portfolio-content">
                          <span className="portfolio-category">{proj.category}</span>
                          <h3 className="portfolio-title">{proj.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="slider-indicators">
            {projects.map((_, idx) => (
              <button 
                key={idx}
                className={`indicator-dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <a href="#contact" className="btn btn-primary">Start Your Project</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
