import React, { useState, useEffect, useRef } from "react";

function ClientPortfolio() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;
  const carouselRef = useRef(null);
  const slideRefs = useRef([]);
  const autoSlideInterval = useRef(null);

  // Client portfolio data
  const portfolioItems = [
    {
      title: "Bangladesh Army Aviation",
      description: "Implemented advanced avionics systems for 50+ military helicopters, enhancing navigation accuracy by 40%.",
      logo: "/assets/Roundel_of_Bangladesh_–_Army_Aviation.svg.png",
      image: "/assets/Roundel_of_Bangladesh_–_Army_Aviation_resized.png"
    },
    {
      title: "Walton Group",
      description: "Deployed enterprise IoT solutions across 12 manufacturing plants, reducing energy costs by 25% annually.",
      logo: "/assets/Walton_Group.svg.png",
      image: "/assets/Walton_Group.svg.png"
    },
    {
      title: "Beximco Pharmaceuticals",
      description: "Automated pharmaceutical production lines serving 3 million patients monthly with 99.9% reliability.",
      logo: "/assets/beximco-logo.png",
      image: "/assets/pharma-project.jpg"
    },
    {
      title: "Bangladesh Railway",
      description: "Modernized signaling systems across 300km of rail network, improving safety and on-time performance.",
      logo: "/assets/railway-logo.png",
      image: "/assets/railway-project.jpg"
    },
    {
      title: "Dhaka Power Distribution",
      description: "Smart grid implementation reduced outage times by 65% for 2 million metro residents.",
      logo: "/assets/dpdc-logo.png",
      image: "/assets/power-project.jpg"
    },
    {
      title: "Teletalk Bangladesh",
      description: "5G network infrastructure deployment covering 15 major cities with 1Gbps speeds.",
      logo: "/assets/teletalk-logo.png",
      image: "/assets/telecom-project.jpg"
    }
  ];

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
      carouselRef.current.scrollTo({
        left: slideElement.offsetLeft,
        behavior: 'smooth'
      });
    }
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
          Trusted By Leading Organizations Nationwide
        </h2>
      </div>

      {/* Carousel */}
      <div 
        className="carousel w-full py-16 md:py-32" 
        ref={carouselRef}
        style={{
          overflowX: 'hidden',
          scrollBehavior: 'smooth'
        }}
      >
        {portfolioItems.slice(0,4).map((client, index) => (
          <div 
            id={`slide${index+1}`} 
            key={index}
            ref={el => slideRefs.current[index] = el}
            className="carousel-item relative w-full justify-center items-center"
            style={{
              flex: '0 0 100%'
            }}
          >
            <img
              src={client.logo}
              className={`${isMobile ? "w-24" : "w-32"} max-h-32 object-contain`}
              alt={`${client.title} Logo`}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16 justify-center items-center py-10 pb-20">
        {portfolioItems.map((item, index) => (
          <div 
            key={index} 
            className="card bg-white shadow-sm w-full max-w-md mx-auto hover:shadow-md transition-all duration-300 group"
          >
            <figure className="w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className={`w-full max-h-76 object-cover transition-transform duration-500 ${!isMobile ? 'group-hover:scale-110' : ''}`}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-black">{item.title}</h2>
              <p className="text-black text-sm">
                {item.description}
              </p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientPortfolio;