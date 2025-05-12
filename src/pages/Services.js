import { useEffect, useState } from 'react';

function Services() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const allServices = {
    dataCenter: [
      {
        title: "Residential Services",
        img: "/assets/service1.jpg",
        desc: "Anyone who owns a home understands that plumbing issues can never be foreseen 100%."
      },
      {
        title: "Commercial Services",
        img: "/assets/service2.jpg",
        desc: "No job is too large for us! Commercial properties need professional plumbers in any case..."
      },
      {
        title: "Plumber Repair Works",
        img: "/assets/service3.jpg",
        desc: "Toilet Installation. Sink Installation. Water Heater Installation. Garbage Disposal..."
      },
      {
        title: "Emergency Services",
        img: "/assets/service4.jpg",
        desc: "24/7 emergency plumbing services for urgent situations."
      },
      {
        title: "Maintenance Plans",
        img: "/assets/service5.jpg",
        desc: "Regular maintenance to prevent plumbing issues before they occur."
      },
      {
        title: "Drain Cleaning",
        img: "/assets/service6.jpg",
        desc: "Professional drain cleaning services for clogged or slow drains."
      }
    ],
    serverStorage: [
      {
        title: "Server Solutions",
        img: "/assets/server1.jpg",
        desc: "Enterprise-grade server solutions for all business needs."
      },
      {
        title: "Storage Solutions",
        img: "/assets/storage1.jpg",
        desc: "Scalable storage solutions to grow with your business."
      },
      {
        title: "Backup Solutions",
        img: "/assets/backup1.jpg",
        desc: "Reliable backup solutions to protect your critical data."
      },
      {
        title: "Virtualization",
        img: "/assets/virtual1.jpg",
        desc: "Optimize your infrastructure with virtualization solutions."
      }
    ],
    networkInfra: [
      {
        title: "Network Design",
        img: "/assets/network1.jpg",
        desc: "Custom network designs tailored to your business requirements."
      },
      {
        title: "Cabling Solutions",
        img: "/assets/cabling1.jpg",
        desc: "Structured cabling solutions for reliable connectivity."
      },
      {
        title: "Wireless Solutions",
        img: "/assets/wireless1.jpg",
        desc: "Enterprise wireless solutions for seamless mobility."
      },
      {
        title: "Security Solutions",
        img: "/assets/security1.jpg",
        desc: "Network security solutions to protect your infrastructure."
      }
    ],
    industrialAutomation: [
      {
        title: "Process Automation",
        img: "/assets/automation1.jpg",
        desc: "Streamline your industrial processes with automation."
      },
      {
        title: "Control Systems",
        img: "/assets/control1.jpg",
        desc: "Advanced control systems for industrial applications."
      },
      {
        title: "SCADA Systems",
        img: "/assets/scada1.jpg",
        desc: "Monitor and control your industrial processes remotely."
      },
      {
        title: "IoT Solutions",
        img: "/assets/iot1.jpg",
        desc: "Industrial IoT solutions for smart manufacturing."
      }
    ],
    transportation: [
      {
        title: "Fleet Management",
        img: "/assets/fleet1.jpg",
        desc: "Comprehensive solutions for managing transportation fleets."
      },
      {
        title: "Tracking Systems",
        img: "/assets/tracking1.jpg",
        desc: "Real-time tracking solutions for vehicles and assets."
      },
      {
        title: "Logistics Solutions",
        img: "/assets/logistics1.jpg",
        desc: "Optimize your logistics operations with our solutions."
      },
      {
        title: "Passenger Systems",
        img: "/assets/passenger1.jpg",
        desc: "Advanced systems for passenger information and management."
      }
    ]
  };

  const ServiceSection = ({ title, services }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex + 3 >= services.length ? 0 : prevIndex + 3
      );
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex - 3 < 0 ? services.length - (services.length % 3 || 3) : prevIndex - 3
      );
    };

    const visibleServices = services.slice(currentIndex, currentIndex + 3);

    return (
      <div style={{ padding: "60px 20px", backgroundColor: "#ccc" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>
          {title}
        </h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative"
        }}>
          <button 
            onClick={prevSlide}
            style={{
              background: "white",
              border: "none",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              cursor: "pointer",
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
              fontSize: "1.2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0
            }}
          >
            &lt;
          </button>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "20px",
            width: "100%",
            maxWidth: "1000px"
          }}>
            {visibleServices.map((service, i) => (
              <div key={i} style={{
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease"
              }}>
                <img 
                  src={service.img} 
                  alt={service.title} 
                  style={{ 
                    width: "100%", 
                    height: "200px", 
                    objectFit: "cover" 
                  }} 
                />
                <div style={{ padding: "20px" }}>
                  <h3 style={{ 
                    fontSize: "1.25rem", 
                    marginBottom: "10px",
                    minHeight: "60px",
                    color: "#333"
                  }}>
                    {service.title}
                  </h3>
                  <p style={{ 
                    fontSize: "0.9rem", 
                    color: "#333",
                    minHeight: "60px"
                  }}>
                    {service.desc}
                  </p>
                  <div className="collapse collapse-arrow" style={{ fontSize: "22px",
        color: "#000"}}>
  <input type="checkbox" />
  <div className="collapse-title font-semibold">Read More</div>
  <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            style={{
              background: "white",
              border: "none",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              cursor: "pointer",
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
              fontSize: "1.2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0
            }}
          >
            &gt;
          </button>
        </div>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      {/* Hero Section */}
      <div
        style={{
          minHeight: isMobile ? "60vh" : "50vh",
          backgroundColor: "#ccc",
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

        <h1
          style={{
            fontSize: isMobile ? "2.5rem" : "3rem",
            fontFamily: "'Space Grotesk', sans-serif",
            color: "white",
            marginBottom: "20px",
            padding: isMobile ? "20px" : "70px",
            position: "relative",
            zIndex: 2,
          }}
          className="font-light"
        >
          Solutions and Services
        </h1>
      </div>

      <ServiceSection title="DATA CENTER SOLUTION" services={allServices.dataCenter} />
      <ServiceSection title="SERVER AND STORAGE SOLUTION" services={allServices.serverStorage} />
      <ServiceSection title="PREMISE NETWORK INFRASTRUCTURE SOLUTION" services={allServices.networkInfra} />
      <ServiceSection title="INDUSTRIAL / COMMERCIAL AUTOMATION SOLUTION" services={allServices.industrialAutomation} />
      <ServiceSection title="TRANSPORTATION SECTOR" services={allServices.transportation} />
    </div>
  );
};



export default Services;