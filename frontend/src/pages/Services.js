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
        title: "Raised Floor System",
        img: "/assets/service1.jpg",
        desc: "Provides flexible underfloor space for cooling, cabling, and airflow management in data centers.",
        detail: "Essential for flexible and efficient data center infrastructure."
      },
      {
        title: "Rack and Containment System",
        img: "/assets/service2.jpg",
        desc: "Houses IT equipment in organized racks with airflow containment.",
        detail: "Improves cooling efficiency and physical equipment security."
      },
      {
        title: "Data Center Backbone & Passive SCS",
        img: "/assets/service3.jpg",
        desc: "Builds the structured cabling foundation for data and communication.",
        detail: "Ensures seamless connectivity and high-speed data transmission."
      },
      {
        title: "Cooling System",
        img: "/assets/service4.jpg",
        desc: "Maintains optimal environmental conditions for servers.",
        detail: "Prevents overheating and ensures consistent system performance."
      },
      {
        title: "Data Center Power Solution",
        img: "/assets/service5.jpg",
        desc: "Provides reliable power with UPS, switchgear, and grounding.",
        detail: "Sub-services include: Grounding & Bonding System, Trunking Pathway,Distribution Switchgear,Power Cabling, Automatic Voltage Regulator (AVR),Online UPS,ATS / STS, Basic / Smart Inteligent PDU, Lighting, Lightning Protection"
      },
      {
        title: "Fire Door",
        img: "/assets/service5.jpg",
        desc: "Fire-rated door system for data center compartments.",
        detail: "Enhances fire safety and structural protection in emergencies."
      }, {
        title: "Data Center Door Access Control",
        img: "/assets/service5.jpg",
        desc: "Controls and monitors entry to restricted server areas.",
        detail: "Enhances physical security using card, biometric, or digital systems."
      }, {
        title: "Environmental Monitoring System (EMS)",
        img: "/assets/service5.jpg",
        desc: "Tracks temperature, humidity, and air quality in real time.",
        detail: "Alerts on abnormal changes to prevent equipment damage."
      }, {
        title: "Network Monitoring System (NMS)",
        img: "/assets/service5.jpg",
        desc: "Monitors network traffic, uptime, and device status.",
        detail: "Helps quickly identify faults and optimize performance."
      }, {
        title: "Rodent Repellent System",
        img: "/assets/service5.jpg",
        desc: "Protects cabling and hardware from rodent intrusion.",
        detail: "Uses safe deterrents to maintain infrastructure integrity."
      },
      {
        title: "Fire Detection & Suppression System",
        img: "/assets/service6.jpg",
        desc: "Detects early signs of fire and activates extinguishing agents.",
        detail: "Minimizes fire damage and safeguards data center assets."
      }
    ],
    serverStorage: [
      {
        title: "IAM",
        img: "/assets/server1.jpg",
        desc: "Enterprise-grade server solutions for all business needs.",
        detail: "abz"
      },
      {
        title: "NAS",
        img: "/assets/storage1.jpg",
        desc: "Scalable storage solutions to grow with your business.",
        detail: "abz"
      },
      {
        title: "SAN",
        img: "/assets/backup1.jpg",
        desc: "Reliable backup solutions to protect your critical data.",
        detail: "abz"
      },
    
    ],
    networkInfra: [
      {
        title: "Network Design",
        img: "/assets/network1.jpg",
        desc: "Custom network designs tailored to your business requirements.",
        detail: "abz"
      },
      {
        title: "Cabling Solutions",
        img: "/assets/cabling1.jpg",
        desc: "Structured cabling solutions for reliable connectivity.",
        detail: "abz"
      },
      {
        title: "Wireless Solutions",
        img: "/assets/wireless1.jpg",
        desc: "Enterprise wireless solutions for seamless mobility.",
        detail: "abz"
      },
      {
        title: "Security Solutions",
        img: "/assets/security1.jpg",
        desc: "Network security solutions to protect your infrastructure.",
        detail: "abz"
      }
    ],
    industrialAutomation: [
      {
        title: "Process Automation",
        img: "/assets/automation1.jpg",
        desc: "Streamline your industrial processes with automation.",
        detail: "abz"
      },
      {
        title: "Control Systems",
        img: "/assets/control1.jpg",
        desc: "Advanced control systems for industrial applications.",
        detail: "abz"
      },
      {
        title: "SCADA Systems",
        img: "/assets/scada1.jpg",
        desc: "Monitor and control your industrial processes remotely.",
        detail: "abz"
      },
      {
        title: "IoT Solutions",
        img: "/assets/iot1.jpg",
        desc: "Industrial IoT solutions for smart manufacturing.",
        detail: "abz"
      }
    ],
    transportation: [
      {
        title: "Fleet Management",
        img: "/assets/fleet1.jpg",
        desc: "Comprehensive solutions for managing transportation fleets.",
        detail: "abz"
      },
      {
        title: "Tracking Systems",
        img: "/assets/tracking1.jpg",
        desc: "Real-time tracking solutions for vehicles and assets.",
        detail: "abz"
      },
      {
        title: "Logistics Solutions",
        img: "/assets/logistics1.jpg",
        desc: "Optimize your logistics operations with our solutions.",
        detail: "abz"
      },
      {
        title: "Passenger Systems",
        img: "/assets/passenger1.jpg",
        desc: "Advanced systems for passenger information and management.",
        detail: "abz"
      }
    ]
  };

  const ServiceSection = ({ title, services }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedIndices, setExpandedIndices] = useState([]);
    const itemsToShow = isMobile ? 1 : 3;
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex + itemsToShow >= services.length ? 0 : prevIndex + itemsToShow
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex - itemsToShow < 0 ? services.length - (services.length % itemsToShow || itemsToShow) : prevIndex - itemsToShow
      );
    };

    const toggleExpand = (index) => {
      setExpandedIndices((prev) =>
        prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      );
    };
  
    const visibleServices = services.slice(currentIndex, currentIndex + itemsToShow);
  
    return (
      <div style={{ padding: isMobile ? "40px 10px" : "60px 20px", backgroundColor: "#f5f5f5" }}>
        <h2 style={{ textAlign: "center", fontSize: isMobile ? "1.5rem" : "2rem", marginBottom: "20px", color: "#931f1d" }}>
          {title}
        </h2>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: isMobile ? "10px" : "20px", maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          {!isMobile && (
            <button onClick={prevSlide} style={{
              background: "#ccc",
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
            aria-label="Previous services"
          >&lt;</button>
          )}
          
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? "15px" : "20px", width: "100%", maxWidth: "1000px" }}>
            {visibleServices.map((service, i) => {
              const actualIndex = currentIndex + i;
              const isExpanded = expandedIndices.includes(actualIndex);
  
              return (
                <div key={i}>
                  <div style={{ backgroundColor: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)" }}>
                    <img src={service.img} alt={service.title} style={{ width: "100%", height: isMobile ? "180px" : "200px", objectFit: "cover" }} />
                    <div style={{ padding: isMobile ? "15px" : "20px" }}>
                      <h3 style={{ fontSize: isMobile ? "1.1rem" : "1.25rem", marginBottom: "10px", color: "#333" }}>{service.title}</h3>
                      <p style={{ fontSize: isMobile ? "0.85rem" : "0.9rem", color: "#555", marginBottom: "10px" }}>{service.desc}</p>
                    </div>
                    <div style={{ backgroundColor: "#fff", color: "#666" }}>
                      <button
                        onClick={() => toggleExpand(actualIndex)}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: isMobile ? "10px 15px" : "12px 20px",
                          background: "none",
                          border: "none",
                          fontSize: isMobile ? "0.9rem" : "1rem",
                          cursor: "pointer"
                        }}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                      {isExpanded && (
                        <div style={{ fontSize: isMobile ? "0.8rem" : "0.85rem", padding: isMobile ? "0 15px 10px" : "0 20px 15px" }}>
                          {service.detail}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {!isMobile && (
            <button 
              onClick={nextSlide}
              style={{
                background: "#ccc",
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
              aria-label="Next services"
            >
              &gt;
            </button>
          )}
        </div>
        
        {isMobile && (
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px"
          }}>
            <button 
              onClick={prevSlide}
              style={{
                background: "#ccc",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                fontSize: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              aria-label="Previous services"
            >
              &lt;
            </button>
            <button 
              onClick={nextSlide}
              style={{
                background: "#ccc",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                fontSize: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              aria-label="Next services"
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      {/* Hero Section */}
      <div 
        style={{
          minHeight: isMobile ? "40vh" : "50vh",
          backgroundImage: "url(/assets/1801886b-974d-41bb-bd87-7c743c706d4f.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: isMobile ? "0 20px" : "0"
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-70"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            
            zIndex: 1,
          }}
        ></div>

        <h1
          style={{
            fontSize: isMobile ? "1.8rem" : "3rem",
            color: "white",
            marginBottom: "10px",
            position: "relative",
            zIndex: 2,
            lineHeight: "1.3",
            maxWidth: "800px",
            fontWeight: "400",
            color: "#931f1d",
            textShadow: "0 2px 6px rgba(0,0,0,0.3)",
          }}
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