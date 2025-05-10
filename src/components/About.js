import { useEffect, useRef, useState } from "react";

function About() {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

        <button
          style={{
            borderRadius: "999px",
            padding: "16px 24px",
            backgroundColor: "#ffffff",
            border: "2px solid #ffffff",
            color: "#000",
            fontWeight: "bold",
            fontSize: "14px",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0px 8px 12px rgba(0, 0, 0, 0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0px 4px 6px rgba(0, 0, 0, 0.1)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.95)";
            e.currentTarget.style.boxShadow =
              "0px 2px 4px rgba(0, 0, 0, 0.15)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0px 8px 12px rgba(0, 0, 0, 0.2)";
          }}
        >
          <a href="/contactus">
            Learn More{" "}
            <span
              style={{
                fontSize: "16px",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              →
            </span>
          </a>
        </button>
      </section>
    </div>
  );
}

export default About;
