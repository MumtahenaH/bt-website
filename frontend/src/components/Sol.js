import React, { useEffect, useRef, useState } from "react";

function Sol() {
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
    const ServicesSection = () => {
        return (
            <section id="solutions" style={styles.section}>
                {/* Image */}
                <div style={styles.imageContainer}>
                    <img
                        src="/assets/div.png"
                        alt="Data Center Solution"
                        style={styles.image}
                    />
                </div>

                {/* Text & Accordions */}
                <div style={styles.textContainer}>
                    <h3 style={styles.heading}>Solutions and Services</h3>
                    <p style={styles.paragraph}>
                        Empowering your business with cutting-edge solutions and innovative services tailored for success.
                    </p>

                    <div style={styles.serviceList}>
                        {collapsibleItems.map((item, idx) => (
                            <div key={idx}>
                                <div className="collapse collapse-arrow" style={styles.collapse}>
                                    <input type="checkbox" name="accordion"  />
                                    <div className="collapse-title">{item.title}</div>
                                    <div className="collapse-content text-sm">{item.content}</div>
                                </div>
                                <div className="divider divider-neutral"></div>
                            </div>
                        ))}
                    </div>

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

                {/* Force stacking on mobile */}
                <style>{`
                    @media (max-width: 768px) {
                        #solutions {
                            flex-direction: column !important;
                            padding: 20px 10px;
                        }
                        #solutions .image-container {
                            margin-bottom: 20px;
                        }
                        #solutions h3, #solutions p {
                            text-align: center;
                        }
                        #solutions button {
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

const collapsibleItems = [
    { title: "DATA CENTER SOLUTION", content: "Lorem ipsum Lorem ipsum." },
    { title: "SERVER & STORAGE SOLUTION", content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum." },
    { title: "PREMISE NETWORK INFRASTRUCTURE SOLUTION", content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum." },
    { title: "INDUSTRIAL / COMMERCIAL AUTOMATION SOLUTION", content: "Go to 'My Account' settings and select 'Edit Profile' to make changes." },
    { title: "TRANSPORTATION SECTOR AUTOMATION", content: "Go to 'My Account' settings and select 'Edit Profile' to make changes." }
];

const styles = {
    section: {
        padding: "80px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "50px",
        backgroundImage: "#f5f5f5",
       
    },
    imageContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "center"
    },
    image: {
        width: "100%",
        height: "auto",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px"
    },
    textContainer: { flex: 1 },
    heading: {
        fontSize: "32px",
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#000",
        marginTop: "10px"
    },
    paragraph: {
        fontSize: "18px",
        color: "#4B5563",
        padding: "20px 0",
        fontFamily: "'Space Grotesk', sans-serif"
    },
    serviceList: {
        fontFamily: "'Space Grotesk', sans-serif"
    },
    collapse: {
        fontSize: "22px",
        color: "#000"
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

export default Sol;
