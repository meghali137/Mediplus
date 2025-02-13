import { useState, useEffect, useRef } from "react";
import "../../Styles/header.css";

const slides = [
  { image: "/slide1.PNG", text: "Flat 20% off on all medicines!" },
  { image: "/slide2.webp", text: "Buy 1 Get 1 Free on Health Supplements!" },
  { image: "/slide3.jpg", text: "Exclusive Discounts on Essentials!" },
  { image: "/slide4.jpg", text: "Upto 30% Off on Personal Care Products!" },
  { image: "/slide5.jpg", text: "Best Quality Ayurvedic Products Now Available!" },
  { image: "/slide5.jpg", text: "Doctor Consultation ans Lab Tests are Now Available!" }
];

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayInterval = 5000;
  const sliderRef = useRef(null);
  let touchStartX = 0;
  let touchEndX = 0;

  // Auto-play logic with pause on hover
  useEffect(() => {
    if (!isPaused) {
      const slideTimer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, autoPlayInterval);

      return () => clearInterval(slideTimer);
    }
  }, [isPaused]);

  // Handle touch gestures for mobile
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      // Swipe left (next slide)
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (touchEndX - touchStartX > 50) {
      // Swipe right (previous slide)
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <div
      className="slider-container"
      ref={sliderRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-text">{slide.text}</div>
        </div>
      ))}

      <button className="prev-btn" onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}>
        &#10094;
      </button>
      <button className="next-btn" onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}>
        &#10095;
      </button>

      <div className="indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Header;
