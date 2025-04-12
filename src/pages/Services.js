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

  return (
    <div style={{ backgroundColor: "#fff" }}>
      {/* Hero Section */}
      <div
        style={{
          minHeight: isMobile ? "60vh" : "80vh",
          backgroundImage: "url('/assets/elements.svg')",
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

        <a
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
        </a>
      </div>

      {/* Data Center Solution Section */}
      <ServiceSection 
        title="DATA CENTER SOLUTION"
        items={[
          {
            title: "DATA CENTER POWER SOLUTION",
            content: [
              "Grounding & Bonding System",
              "Trunking Pathway",
              "Distribution Switchgear",
              "Power Cabling",
              "Automatic Voltage Regulator (AVR)",
              "Online UPS",
              "ATS / STS",
              "Basic / Smart Inteligent PDU",
              "Lighting",
              "Lightning Protection"
            ]
          },
          "FIRE DETECTION & SUPRESSION SYSTEM",
          "FIRE DOOR",
          "DATA CENTER DOOR ACCESS CONTROL",
          "NETWORK MONITORING SYSTEM (NMS)",
          "ENVIROMENTAL MONITORING SYSTEM (EMS)"
        ]}
        image="/assets/service.jpg"
        isMobile={isMobile}
      />

      {/* Server & Storage Solution Section */}
      <ServiceSection 
        title="SERVER & STORAGE SOLUTION"
        items={["IAM", "NAS", "SAN"]}
        image="/assets/service.jpg"
        reverse={true}
        isMobile={isMobile}
      />

      {/* Premise Network Infrastructure Solution  → */}
      <ServiceSection 
        title="PREMISE NETWORK INFRASTRUCTURE SOLUTION"
        items={["ROUTING, SWITCHING & SECURITY", "STRUCTURED CABLING SYSTEM", "SMART WI-FI", "IP TELEPHONE", "SURVEILLANCE SECURITY SYSTEM", "TIME ATTENDANCE & ACCESS CONTROL", "VIDEO CONFERENCING", "NETWORK MONITORING SYSTEM (NMS)"]}
        image="/assets/service.jpg"
        
        isMobile={isMobile}
      />
      {/* Industrial / Commercial Automation Solution → */}
      <ServiceSection 
        title="INDUSTRIAL/COMMERCIAL AUTOMATION SOLUTION"
        items={["ELECTRIFICATION DESIGN & IMPLEMENTATION", "COMMERCIAL POWER", "BUILDING MANAGEMENT SYSTEM (BMS)", "BUSBAR TRUNKING SYSTEM (BBT)", "FIRE DETECTION & PROTECTION SYSTEM", "GENERATOR", ]}
        image="/assets/service.jpg"
        reverse={true}
        isMobile={isMobile}
      />
      {/* Transportation Sector Automation → */}
      <ServiceSection 
        title="TRANSPORTATION SECTOR AUTOMATION"
        items={["EMERGENCY TELEPHONE SYSTEM", "OUTDOOR CABINETS", "VARIABLE MESSAGE SIGN", "OPTICAL LINE MONITORING", "WEATHERPROOF / EXPLOSIONG-PROOF LIGHTING",]}
        image="/assets/service.jpg"
        
        isMobile={isMobile}
      />
    </div>
  );
}

// Reusable Service Section Component
function ServiceSection({ title, items, image, reverse = false, isMobile }) {
  return (
    <div
      style={{
        padding: isMobile ? "40px 20px" : "80px 20px",
        maxWidth: "1200px",
        minHeight: isMobile ? "auto" : "100vh",
        margin: "0 auto",
        display: "flex",
        flexDirection: isMobile ? "column" : reverse ? "row-reverse" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: isMobile ? "30px" : "50px",
        background: "#fff",
      }}
    >
      {/* Image Section */}
      <div style={{ flex: 1 }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: isMobile ? "auto" : "100%",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>

      {/* Text Section */}
      <div style={{ flex: 1 }}>
        <h2
          style={{
            fontSize: isMobile ? "1.75rem" : "2rem",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "10px",
            color: "#000",
            fontWeight: "regular",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {title}
        </h2>

        <div style={{ 
          fontWeight: "regular",
          fontFamily: "'Space Grotesk', sans-serif",
        }}>
          {items.map((item, i) => (
            <div key={i}>
              {typeof item === 'object' ? (
                <>
                  <div className="collapse collapse-arrow" style={{ 
                    fontSize: isMobile ? "1rem" : "1.125rem", 
                    color: "#000" 
                  }}>
                    <input type="radio" name={`accordion-${title.replace(/\s+/g, '-')}`} defaultChecked />
                    <div className="collapse-title font-thin">{item.title}</div>
                    <div className="collapse-content text-sm">
                      {item.content.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </div>
                  </div>
                  {i < items.length - 1 && <div className="divider divider-neutral"></div>}
                </>
              ) : (
                <>
                  <div className="collapse" style={{ 
                    fontSize: isMobile ? "1rem" : "1.125rem", 
                    color: "#000" 
                  }}>
                    <input type="radio" name={`accordion-${title.replace(/\s+/g, '-')}`} />
                    <div className="collapse-title font-thin">{item}</div>
                  </div>
                  {i < items.length - 1 && <div className="divider divider-neutral"></div>}
                </>
              )}
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
}

export default Services;