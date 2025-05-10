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
          minHeight: isMobile ? "60vh" : "50vh",
          backgroundcolor: "#ccc",
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

      <div style={{ padding: "60px 20px", backgroundColor: "#ccc" }}>
  <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>
  DATA CENTER SOLUTION
  </h2>
  <div style={{
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto"
  }}>
    {[
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
      }
    ].map((service, i) => (
      <div key={i} style={{
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)"
      }}>
        <img src={service.img} alt={service.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
        <div style={{ padding: "20px" }}>
          <h3 style={{ fontSize: "1.25rem", marginBottom: "10px" }}>{service.title}</h3>
          <p style={{ fontSize: "0.9rem", color: "#333" }}>{service.desc}</p>
          <button className="btn btn-link mt-2">READ MORE</button>
        </div>
      </div>
    ))}
  </div>
</div>



    </div>
  );
}

// Reusable Service Section Component



export default Services;