import { useEffect, useRef, useState } from "react";

function About() {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
const [buttonVisible, setButtonVisible] = useState(false);
 const buttonRef = useRef(null);
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
 


     observeElement(buttonRef, setButtonVisible, 600);
 
   }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <div>
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

      <section
        id="about"
        style={{
          minHeight: "103vh",
          backgroundImage: "url('/assets/ChatGPT Image May 9, 2025, 09_04_56 AM.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <a
          ref={textRef}
          style={{
            fontSize: "3rem",
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#931f1d",
            marginBottom: "20px",
            padding: "70px",
            opacity: 0,
          }}
          className={`font-light ${isVisible ? "fade-in-left" : ""}`}
        >
           GET IN TOUCH WITH US TODAY.
        </a>

        <div
          ref={buttonRef}
          className={`${buttonVisible ? "fade-in-up" : "opacity-0"} flex justify-left`}
        >
          <button className="rounded-full px-6 py-4 text-gray-200 font-bold text-sm md:text-base uppercase flex items-center gap-2 bg-gradient-to-r from-red-900 to-gray-700 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm">
            <a href="/about">
              Learn More <span className="text-lg transition-transform">→</span>
            </a>
          </button>
        </div>


      </section>
    </div>
  );
}

export default About;
