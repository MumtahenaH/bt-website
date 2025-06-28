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
        img: "/assets/services/raised floor.jpg",
        desc: "Provides flexible underfloor space for cooling, cabling, and airflow management in data centers.",
        detail: "Essential for flexible and efficient data center infrastructure."
      },
      {
        title: "Rack and Containment System",
        img: "/assets/services/ai-generated-7957988_1280.jpg",
        desc: "Houses IT equipment in organized racks with airflow containment.",
        detail: "Improves cooling efficiency and physical equipment security."
      },
      {
        title: "Data Center Backbone & Passive SCS",
        img: "/assets/services/data center backbone_cabling.png",
        desc: "Builds the structured cabling foundation for data and communication.",
        detail: "Ensures seamless connectivity and high-speed data transmission."
      },
      {
        title: "Cooling System",
        img: "/assets/services/Data Center cooling Solution.jpg",
        desc: "Maintains optimal environmental conditions for servers.",
        detail: "Prevents overheating and ensures consistent system performance."
      },
      {
        title: "Data Center Power Solution",
        img: "/assets/services/Lighting.jpg",
        desc: "Provides reliable power with UPS, switchgear, and grounding.",
        detail: "Sub-services include: Grounding & Bonding System, Trunking Pathway,Distribution Switchgear,Power Cabling, Automatic Voltage Regulator (AVR),Online UPS,ATS / STS, Basic / Smart Inteligent PDU, Lighting, Lightning Protection"
      },
      {
        title: "Fire Door",
        img: "/assets/services/Fire-door-single.jpg",
        desc: "Fire-rated door system for data center compartments.",
        detail: "Enhances fire safety and structural protection in emergencies."
      }, {
        title: "Data Center Door Access Control",
        img: "/assets/services/Door Access control.jpg",
        desc: "Controls and monitors entry to restricted server areas.",
        detail: "Enhances physical security using card, biometric, or digital systems."
      }, {
        title: "Environmental Monitoring System (EMS)",
        img: "/assets/services/Data center Environmental Monitoring system.jpg",
        desc: "Tracks temperature, humidity, and air quality in real time.",
        detail: "Alerts on abnormal changes to prevent equipment damage."
      }, {
        title: "Network Monitoring System (NMS)",
        img: "/assets/services/NAS_solution.webp",
        desc: "Monitors network traffic, uptime, and device status.",
        detail: "Helps quickly identify faults and optimize performance."
      }, {
        title: "Rodent Repellent System",
        img: "/assets/services/rodent-repellent-system-.avif",
        desc: "Protects cabling and hardware from rodent intrusion.",
        detail: "Uses safe deterrents to maintain infrastructure integrity."
      },
      {
        title: "Fire Detection & Suppression System",
        img: "/assets/services/Automatic_Fire_Suppression.webp",
        desc: "Detects early signs of fire and activates extinguishing agents.",
        detail: "Minimizes fire damage and safeguards data center assets."
      }
    ],
    serverStorage: [
      {
        title: "IAM",
        img: "/assets/services/data-network-illustration_24908-57787.jpg",
        desc: "Secure identity and access management for enterprise infrastructure.",
        detail: "Identity and Access Management solutions to control and secure user access across IT environments."
      },
      {
        title: "NAS",
        img: "/assets/services/data-center_24911-45211.jpg",
        desc: "Centralized file storage that scales with your business growth.",
        detail: "Network Attached Storage systems providing centralized, file-based storage with easy access and management."
      },
      {
        title: "SAN",
        img: "/assets/services/SAN.jpg",
        desc: "High-speed data storage network for mission-critical applications.",
        detail: "Storage Area Networks enabling high-speed block-level data access for mission-critical applications."
      },
    ],
    
    networkInfra: [
      {
        title: "Routing, Switching & Security",
        img: "/assets/services/routing.avif",
        desc: "High-performance networking and enterprise-grade security solutions.",
        detail: "Comprehensive networking infrastructure including routing, switching, and cybersecurity for seamless operations."
      },
      {
        title: "Structured Cabling System",
        img: "/assets/services/general_cabling_img01.jpg",
        desc: "Organized cabling systems for optimized performance and manageability.",
        detail: "Standardized cabling infrastructure to support data, voice, and video across your IT ecosystem."
      },
      {
        title: "Smart Wi-Fi",
        img: "/assets/services/connected-devices-smart-home-digital-world-network-internet-connection-technology-wifi-communication.avif",
        desc: "Scalable wireless connectivity for seamless business operations.",
        detail: "Intelligent wireless networks ensuring high-speed, secure, and scalable connectivity."
      },
      {
        title: "Surveillance Security System",
        img: "/assets/services/CCTV Camera.jpg",
        desc: "24/7 monitoring and security through advanced surveillance technologies.",
        detail: "Integrated video surveillance solutions for 24/7 monitoring, threat detection, and incident management."
      },
      {
        title: "Time Attandence & Access Control",
        img: "/assets/services/Time attendance system.jpg",
        desc: "Automated access control and attendance tracking for workforce management.",
        detail: "Automated attendance and access control systems to enhance workforce management and security."
      },
      {
        title: "Video Conferencing",
        img: "/assets/services/video-conferencing-software.avif",
        desc: "Real-time collaboration tools for remote and hybrid teams.",
        detail: "HD video conferencing solutions enabling real-time collaboration across locations."
      },
      {
        title: "Network Monitoring System (NMS)",
        img: "/assets/services/Centralized network monitoring.png",
        desc: "Proactive network oversight to ensure performance and reliability.",
        detail: "Centralized tools for tracking network health, performance, and fault detection in real-time."
      },
      {
        title: "IP Telephone",
        img: "/assets/services/VoIP-Diagram-Image.jpeg",
        desc: "Crystal-clear communication with integrated IP telephony.",
        detail: "Advanced IP-based telephony systems providing clear communication and integration with digital services."
      }
    ],
    
    industrialAutomation: [
      {
        title: "Electrification Design & Implementation",
        img: "/assets/services/planning & implementation.jpg",
        desc: "Comprehensive design and execution of electrical systems.",
        detail: "Design and deployment of safe, efficient electrical systems for industrial facilities."
      },
      {
        title: "Commercial Power",
        img: "/assets/services/Commercial Power system.jpg",
        desc: "Robust power solutions to support commercial infrastructure.",
        detail: "Reliable and scalable power solutions to meet commercial and industrial energy demands."
      },
      {
        title: "Building Management System (BMS)",
        img: "/assets/services/bms.jpg",
        desc: "Smart control of HVAC, lighting, and building automation.",
        detail: "Smart systems to control HVAC, lighting, and energy use for efficient building operations."
      },
      {
        title: "BusBar Trunking System (BBT)",
        img: "/assets/services/busbar system.jpg",
        desc: "Efficient and flexible power distribution for large setups.",
        detail: "Modular and efficient electrical power distribution systems for large infrastructure."
      },
      {
        title: "Fire Detection & Protection System",
        img: "/assets/services/fire detection.webp",
        desc: "Reliable detection and suppression systems for fire safety.",
        detail: "Comprehensive fire safety systems including detection, alarms, and suppression technologies."
      },
      {
        title: "Generator",
        img: "/assets/services/generator.jpg",
        desc: "Uninterrupted power supply with industrial-grade generators.",
        detail: "Backup and standby power generation systems for uninterrupted business continuity."
      }
    ],
    
    transportation: [
      {
        title: "Emergency Telephone System",
        img: "/assets/services/Emargency Call.jpg",
        desc: "Critical communication infrastructure for emergencies.",
        detail: "Secure and reliable communication systems for emergency response in transit environments."
      },
      {
        title: "Outdoor Cabinets",
        img: "/assets/services/outdoor cabinet.jpg",
        desc: "Weatherproof enclosures for field-deployed systems.",
        detail: "Weather-resistant enclosures for protecting telecom and electrical equipment in outdoor settings."
      },
      {
        title: "Variable Message Sign",
        img: "/assets/services/Massager Sign Board.jpg",
        desc: "Dynamic signage systems for real-time public updates.",
        detail: "Dynamic signage systems for real-time traffic and public information in transport networks."
      },
      {
        title: "Optical Line Monitoring",
        img: "/assets/services/optical line monitoring.png",
        desc: "Real-time fiber optic monitoring for fault prevention.",
        detail: "Real-time fiber optic monitoring solutions to detect faults and ensure network integrity."
      },
      {
        title: "Weatherproof / Explosion-proof Lighting",
        img: "/assets/services/Explosion Water Proof Light.jpg",
        desc: "Safe and durable lighting for extreme environments.",
        detail: "Durable lighting systems designed for extreme environments and hazardous industrial zones."
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
          >  <img src='/assets/back.png'>
              </img></button>
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
              <img src='/assets/next.png'>
              </img>
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
               <img src='/assets/back.png'>
               </img>
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
               <img src='/assets/next.png'>
               </img>
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