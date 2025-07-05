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
      <section id="solutions" style={styles.sectionWrapper}>
        {/* Centered Top Section */}
        <div style={styles.topSection}>
          <h3 style={styles.heading}>Solutions and Services</h3>
          <p style={styles.paragraph}>
            Empowering your business with cutting-edge solutions and innovative services tailored for success.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div style={styles.section}>
          {/* Image */}
          <div style={styles.imageContainer}>
            <img
              src="/assets/div.png"
              alt="Data Center Solution"
              style={styles.image}
            />
          </div>

          {/* Accordion + Button */}
          <div style={styles.textContainer}>
            <div style={styles.serviceList}>
              {collapsibleItems.map((item, idx) => (
                <div key={idx}>
                  <div className="collapse collapse-arrow" style={styles.collapse}>
                    <input type="checkbox" name="accordion" />
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
                <a href="/services">
                  Learn More <span className="text-lg transition-transform">→</span>
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Style */}
        <style>{`
          @media (max-width: 768px) {
            #solutions .image-container {
              margin-bottom: 20px;
            }
            #solutions h3, #solutions p {
              text-align: center;
            }
            #solutions button {
              margin: 20px auto 0;
            }
            #solutions > div:nth-child(2) {
              flex-direction: column !important;
              gap: 30px !important;
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
  {
    title: "DATA CENTER SOLUTION",
    content:
      "End-to-end design, deployment, and management of scalable, secure, and energy-efficient data center infrastructures for enterprise-grade performance.",
  },
  {
    title: "SERVER & STORAGE SOLUTION",
    content:
      "Robust server and storage systems tailored for high availability, fast data access, and secure workload management across business-critical environments.",
  },
  {
    title: "PREMISE NETWORK INFRASTRUCTURE SOLUTION",
    content:
      "Complete on-site network setup including LAN/WAN design, structured cabling, wireless integration, and security to ensure seamless connectivity.",
  },
  {
    title: "INFRASTRUCTURE SOLUTION",
    content:
      "Integrated IT and electrical infrastructure planning for sustainable, high-performance systems supporting long-term operational growth.",
  },
  {
    title: "INDUSTRIAL / COMMERCIAL AUTOMATION SOLUTION",
    content:
      "Custom-built solutions addressing automation, monitoring, and energy optimization needs across factories, plants, and commercial facilities.",
  },
  {
    title: "AUTOMATION SOLUTION",
    content:
      "Smart automation systems for industries and buildings that streamline processes, improve safety, and reduce human intervention.",
  },
  {
    title: "TRANSPORTATION SECTOR AUTOMATION",
    content:
      "Technology-driven solutions for transport systems including intelligent traffic management, fleet tracking, and automated fare collection.",
  },
];

const styles = {
  sectionWrapper: {
    padding: "80px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundColor: "#f5f5f5",
  },
  topSection: {
    textAlign: "center",
    marginBottom: "40px",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "50px",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    marginTop: "100px",
    height: "auto",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
  },
  textContainer: {
    flex: 1,
  },
  heading: {
    fontSize: "32px",
    fontFamily: "'Space Grotesk', sans-serif",
    color: "#000",
    marginTop: "10px",
  },
  paragraph: {
    fontSize: "18px",
    color: "#4B5563",
    padding: "20px 0",
    fontFamily: "'Space Grotesk', sans-serif",
  },
  serviceList: {
    fontFamily: "'Space Grotesk', sans-serif",
  },
  collapse: {
    fontSize: "22px",
    color: "#000",
  },
};

export default Sol;
