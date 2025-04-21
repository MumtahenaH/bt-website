import React, { useEffect, useRef, useState } from "react";

function Masthead() {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);

  const [h1Visible, setH1Visible] = useState(false);
  const [h2Visible, setH2Visible] = useState(false);

  useEffect(() => {
    const observeElement = (ref, setter) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.3 }
      );
      if (ref.current) observer.observe(ref.current);
    };

    observeElement(h1Ref, setH1Visible);
    observeElement(h2Ref, setH2Visible);
  }, []);

  return (
    <section
      id="logo"
      className="min-h-screen md:min-h-[120vh] bg-cover bg-center flex flex-col items-center justify-center text-center px-4 md:px-8"
      style={{ backgroundImage: "url('/assets/masthead.svg')" }}
    >
      {/* Animation Style */}
      <style>
        {`
          @keyframes fadeInLeft {
            0% {
              opacity: 0;
              transform: translateX(-50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .fade-in-left {
            animation: fadeInLeft 1s ease-out forwards;
          }
        `}
      </style>

      <h1
        ref={h1Ref}
        className={`text-4xl md:text-7xl font-bold text-white font-grotesk mb-4 ${
          h1Visible ? "fade-in-left" : "opacity-0"
        }`}
      >
        BUSINESS TECHNOLOGIES
      </h1>

      <h2
        ref={h2Ref}
        className={`text-xl md:text-4xl font-bold text-white font-grotesk mb-8 px-4 ${
          h2Visible ? "fade-in-left" : "opacity-0"
        }`}
      >
        SEAMLESS TECH, LIMITLESS GROWTH
      </h2>

      <button className="rounded-full px-6 py-4 bg-white text-black font-bold text-sm md:text-base uppercase flex items-center gap-2 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm">
        <a href="/about">
          Learn More <span className="text-lg transition-transform">→</span>
        </a>
      </button>

      <p className="text-lg md:text-2xl text-white font-light px-4 mt-12 md:mt-20">
        Turning complex network technology <br /> into{" "}
        <span className="font-bold">
          business solutions that save you time and money
        </span>
      </p>
    </section>
  );
}

export default Masthead;
