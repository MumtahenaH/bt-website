import React, { useState, useEffect, useRef } from "react";

function Client() {
  const portfolioItems = [
    {
      title: "Bangladesh Army Aviation",
      image: "/assets/Roundel_of_Bangladesh_–_Army_Aviation_resized.png",
    },
    {
      title: "BCPCL",
      image: "/assets/carousel/BCPCL.jpg",
    },
    {
      title: "BRAC Bank",
      image: "/assets/carousel/bracbank.jpg",
    },
    {
      title: "Bangladesh Eye Hospital",
      image: "/assets/carousel/BangldeshEyeHospital.jpeg",
    },
    {
      title: "JTI",
      image: "/assets/carousel/JTI__Logo.jpg",
    },
    {
      title: "FAO",
      image: "/assets/carousel/fao.png",
    },
    {
      title: "G4S",
      image: "/assets/carousel/g4s.png",
    },
    {
      title: "Intercooperation",
      image: "/assets/carousel/intercooperation.png",
    },
    {
      title: "LI & FUNG",
      image: "/assets/carousel/li&fung.png",
    },
    {
      title: "MIST",
      image: "/assets/carousel/mist.png",
    },
    {
      title: "ICC",
      image: "/assets/carousel/ICC-logo-new.jpg",
    },
    {
      title: "ILO",
      image: "/assets/carousel/ilo.png",
    },
    {
      title: "Standard Chartered Bank",
      image: "/assets/carousel/standardchartered.jpg",
    },
    {
      title: "Prime Bank",
      image: "/assets/carousel/primebankofficial_logo.jpg",
    },
    {
      title: "Rajshahi University",
      image: "/assets/carousel/RU.jpg",
    },
    {
      title: "DEKKO ISHO Group",
      image: "/assets/carousel/dekkoisho.png",
    },
    {
      title: "North-West Power",
      image: "/assets/carousel/northwest.png",
    },
    {
      title: "UNDP",
      image: "/assets/carousel/undp.png",
    },
    {
      title: "Wachovia",
      image: "/assets/carousel/wachovia.png",
    },
    {
      title: "JSTU",
      image: "/assets/carousel/jstu.png",
    },
    {
      title: "BSH",
      image: "/assets/carousel/bangladesh-specialized-hospital.jpg",
    },
    {
      title: "Jahangirnagar University",
      image: "/assets/carousel/Jahangirnagar_University_Logo.jpg",
    },
    {
      title: "UAP",
      image: "/assets/carousel/UAP.png",
    },
    {
      title: "Clariant",
      image: "/assets/carousel/clariant.jpg",
    },
  ];

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const slides = chunkArray(portfolioItems, 3);
  const totalSlides = slides.length;

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    slideRefs.current = slideRefs.current.slice(0, totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (slideNum) => {
    const newIndex = slideNum % totalSlides;
    setCurrentSlide(newIndex);

    const slideElement = slideRefs.current[newIndex];
    if (slideElement && carouselRef.current) {
      carouselRef.current.scrollTo({
        left: slideElement.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  const goToNextSlide = () => goToSlide(currentSlide + 1);
  const goToPrevSlide = () => goToSlide(currentSlide - 1 + totalSlides);

  return (
    <div style={{ backgroundColor: "#fff", padding: "150px 0" }}>
      <section style={{ maxWidth: "2000px", margin: "0 auto", textAlign: "center" }}>
      <h2 style={{ fontSize: 32, color: "#000", fontFamily: "'Space Grotesk', sans-serif" }}>
  CLIENT PORTFOLIO
</h2>

<p style={{ fontSize: 18, color: "#4B5563", maxWidth: 600, margin: "10px auto 40px" }}>
  Trusted by a diverse portfolio of clients, driving innovation and excellence together.
</p>




        <div
          ref={carouselRef}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            gap: 16,
          }}
        >
          {slides.map((slideGroup, index) => (
            <div
              key={index}
              ref={(el) => (slideRefs.current[index] = el)}
              className="carousel-slide"
              style={{
                flex: "0 0 100%",
                display: "flex",
                justifyContent: "center",
                gap: 200,
                scrollSnapAlign: "start",
                background: "#fff",
                borderRadius: 12,
                padding: 50,
                boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
              }}
            >
              {slideGroup.map((item, idx) => (
                <img
                  key={idx}
                  src={item.image}
                  alt={item.title}
                  style={{
                    maxHeight: 300,
                    maxWidth: 300,
                    objectFit: "contain",
                    width: "100%",
                  }}
                />
              ))}
            </div>
          ))}
        </div>



        {/* Dots */}
        <div style={{ marginTop: 20, display: "flex", justifyContent: "center", gap: 10 }}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: currentSlide === idx ? "#f5f5f5" : "#ccc",
                border: "none",
                cursor: "pointer",
              }}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        
<div className="flex justify-center mt-20">
  <button className="rounded-full px-6 py-4 text-gray-200 font-bold text-sm md:text-base uppercase flex items-center gap-2 bg-gradient-to-r from-red-900 to-gray-700 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm">
    <a href="/clients">
      Learn More <span className="text-lg transition-transform">→</span>
    </a>
  </button>
</div>
      </section>
    </div>
  );
}

const navButtonStyle = {
  fontSize: 24,
  background: "none",
  border: "none",
  cursor: "pointer",
  userSelect: "none",
};

export default Client;
