import React, { useState, useEffect, useRef } from "react";

function ClientPortfolio() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;
  const carouselRef = useRef(null);
  const slideRefs = useRef([]);
  const autoSlideInterval = useRef(null);

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize slide refs
  useEffect(() => {
    slideRefs.current = slideRefs.current.slice(0, totalSlides);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    autoSlideInterval.current = setInterval(() => {
      goToNextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [currentSlide]);

  const goToSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
    const slideElement = slideRefs.current[slideNumber - 1];
    if (slideElement) {
      // Use transform instead of scrollIntoView to prevent page jumping
      carouselRef.current.scrollTo({
        left: slideElement.offsetLeft,
        behavior: 'smooth'
      });
    }
    // Reset the auto-slide timer
    clearInterval(autoSlideInterval.current);
    autoSlideInterval.current = setInterval(() => {
      goToNextSlide();
    }, 3000);
  };

  const goToNextSlide = () => {
    const nextSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
    goToSlide(nextSlide);
  };

  const goToPrevSlide = () => {
    const prevSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
    goToSlide(prevSlide);
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          minHeight: isMobile ? "40vh" : "50vh",
          backgroundImage: "url('/assets/aboutus.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Black Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>

        {/* Title */}
        <h1
          style={{
            fontSize: isMobile ? "2rem" : "3rem",
            fontFamily: "'Space Grotesk', sans-serif",
            color: "white",
            position: "relative",
            zIndex: 2,
            padding: isMobile ? "20px" : "0",
          }}
          className="font-light"
        >
          Client Portfolio
        </h1>
      </div>

      {/* Trusted By Section */}
      <div
        style={{
          padding: isMobile ? "40px 20px" : "60px 120px",
          maxWidth: "600px",
          minHeight: isMobile ? "20vh" : "30vh",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#fff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "1.25rem" : "1.5rem",
            fontFamily: "'Space Grotesk', sans-serif",
            color: "black",
            maxWidth: "500px",
          }}
          className="font-light"
        >
          Trusted By Millions
        </h2>
      </div>

      {/* Carousel */}
      <div 
        className="carousel w-full py-16 md:py-32" 
        ref={carouselRef}
        style={{
          overflowX: 'hidden', // Prevent horizontal scrollbar flickering
          scrollBehavior: 'smooth' // Enable smooth scrolling
        }}
      >
        {[1, 2, 3, 4].map((slideNum) => (
          <div 
            id={`slide${slideNum}`} 
            key={slideNum}
            ref={el => slideRefs.current[slideNum - 1] = el}
            className="carousel-item relative w-full justify-center items-center"
            style={{
              flex: '0 0 100%' // Ensure each slide takes full width
            }}
          >
            <img
              src={
                slideNum % 2 === 1 
                  ? "/assets/Roundel_of_Bangladesh_–_Army_Aviation.svg.png" 
                  : "/assets/Walton_Group.svg.png"
              }
              className={`${isMobile ? "w-24" : "w-32"} max-h-32 object-contain`}
              alt={`Client Logo ${slideNum}`}
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  goToPrevSlide();
                }} 
                className="btn btn-circle"
              >
                ❮
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  goToNextSlide();
                }} 
                className="btn btn-circle"
              >
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 pb-8">
        {[1, 2, 3, 4].map((slideNum) => (
          <button
            key={slideNum}
            onClick={() => goToSlide(slideNum)}
            className={`h-3 w-3 rounded-full ${currentSlide === slideNum ? 'bg-black' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${slideNum}`}
          />
        ))}
      </div>

      {/* Portfolio Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16 justify-center items-center py-10">
        {[...Array(6)].map((_, index) => (
          <div 
            key={index} 
            className="card bg-white shadow-sm w-full max-w-md mx-auto hover:shadow-md transition-shadow duration-300"
          >
            <figure className="w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Portfolio Item"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-black">Project Title</h2>
              <p className="text-black">
                Project Description
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientPortfolio;