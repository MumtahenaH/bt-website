import React, { useEffect, useRef, useState } from "react";
function Client() {
    const ServicesSection = () => {
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
        return (
            <section id="client" style={styles.section}>
                {/* Image Section */}
                <div className="image-container" style={styles.imageContainer}>
                    <img
                        src="/assets/client.png"
                        alt="Client Portfolio"
                        style={styles.image}
                    />
                </div>

                {/* Text Section */}
                <div style={styles.textContainer}>
                    <h2 style={styles.heading}>
                        <span style={styles.icon}></span>CLIENT PORTFOLIO
                    </h2>

                    <p style={styles.paragraph}>
                        Trusted by a diverse portfolio of clients, driving innovation and excellence together.
                    </p>

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
                </div>

                {/* Mobile Styles */}
                <style>{`
                    @media (max-width: 768px) {
                        #client {
                            flex-direction: column !important;
                            padding: 20px 10px;
                        }
                        #client .image-container {
                            width: 100%;
                            margin-bottom: 20px;
                        }
                        #client img {
                            width: 100%;
                            height: auto;
                        }
                        #client h2, #client p {
                            text-align: center;
                        }
                        #client button {
                            margin: 20px auto 0;
                        }
                    }
                `}</style>
            </section>
        );
    };

    return (
        <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh", width: "100%" }}>
            <ServicesSection />
        </div>
    );
}

const styles = {
    section: {
        padding: "80px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "50px",
        background: "#f5f5f5"
    },
    imageContainer: { flex: 1 },
    image: {
        width: "100%",
        height: "auto",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)"
    },
    textContainer: { flex: 1 },
    heading: {
        fontSize: "32px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginTop: "10px",
        color: "#000",
        fontWeight: "regular",
        fontFamily: "'Space Grotesk', sans-serif"
    },
    icon: { fontSize: "24px", color: "#000" },
    paragraph: {
        fontSize: "18px",
        color: "#4B5563",
        padding: "20px",
        fontWeight: "regular",
        fontFamily: "'Space Grotesk', sans-serif"
    },
    button: {
        borderRadius: "999px",
        padding: "14px 24px",
        backgroundColor: "#000",
        border: "2px solid #000",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "14px",
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        marginTop: "20px"
    }
};

export default Client;
