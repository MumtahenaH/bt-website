import React, { useEffect, useRef, useState } from "react";

function Masthead() {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const buttonRef = useRef(null);
  const taglineRef = useRef(null);

  const [h1Visible, setH1Visible] = useState(false);
  const [h2Visible, setH2Visible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(false);

  useEffect(() => {
    const observeElement = (ref, setter, delay = 0) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setter(true), delay);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
    };

    observeElement(h1Ref, setH1Visible);
    observeElement(h2Ref, setH2Visible, 300);
    observeElement(buttonRef, setButtonVisible, 600);
    observeElement(taglineRef, setTaglineVisible, 900);
  }, []);

  return (
    <section
      id="masthead"
      className="min-h-screen md:min-h-[125vh] bg-cover bg-center flex flex-col items-center justify-center text-center px-4 md:px-8 relative overflow-hidden"
      style={{ 
        backgroundImage: "url(/assets/1801886b-974d-41bb-bd87-7c743c706d4f.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
      
    >
        <div className="absolute inset-0 bg-white bg-opacity-80" />
      {/* Animation Styles */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInLeft {
            0% {
              opacity: 0;
              transform: translateX(-30px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .fade-in-up {
            animation: fadeInUp 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
          }
          .fade-in-left {
            animation: fadeInLeft 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-4">
        <h1
          ref={h1Ref}
          className={`text-4xl md:text-6xl lg:text-7xl font-medium text-gray-100 mb-4 tracking-tight leading-tight ${
            h1Visible ? "fade-in-up" : "opacity-0"
          }`}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            textShadow: "0 2px 6px rgba(0,0,0,0.3)",
            color: "#931f1d"
          }}
        >
          Business Technologies
        </h1>

        <h2
          ref={h2Ref}
          className={`text-xl md:text-3xl text-gray-300 mb-12 max-w-2xl mx-auto ${
            h2Visible ? "fade-in-up" : "opacity-0"
          }`}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 300,
            letterSpacing: "0.5px",
            color: "#931f1d"
          }}
        >
          Seamless Tech, Limitless Growth
        </h2>

        <div
          ref={buttonRef}
          className={`${buttonVisible ? "fade-in-up" : "opacity-0"} flex justify-center`}
        >
          <button className="rounded-full px-6 py-4 text-gray-200 font-bold text-sm md:text-base uppercase flex items-center gap-2 bg-gradient-to-r from-red-900 to-gray-700 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm">
            <a href="/about">
              Learn More <span className="text-lg transition-transform">→</span>
            </a>
          </button>
        </div>

        <p
          ref={taglineRef}
          className={`text-lg md:text-xl text-gray-200 font-light mt-16 max-w-3xl mx-auto leading-relaxed ${
            taglineVisible ? "fade-in-up" : "opacity-0"
          }`}
          style={{
            color: "#931f1d"}}
        >
          Transforming complex network technology into{" "}
          <span className="font-medium text-white" style={{
            color: "#931f1d"}}>
            powerful business solutions that optimize efficiency and reduce costs
          </span>
        </p>
      </div>
    </section>
  );
}

export default Masthead;