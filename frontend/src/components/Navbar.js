import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.navbar-content')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav
      className="navbar-content"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "25px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        background: scrolled ? "rgba(231, 226, 226, 0.25)" : "rgba(0, 0, 0, 0)",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "all 0.3s ease-in-out",
      }}
    >
      {/* Desktop Nav - Centered */}
      {!isMobile && (
        <div style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1200px",
        }}>
          <ul style={{
            listStyle: "none",
            display: "flex",
            gap: "20px",
            padding: 0,
            margin: 0,
            justifyContent: "center",
          }}>
            <li><a href="/" style={styles.navLink}>HOME</a></li>
            <li><a href="/services" style={styles.navLink}>SOLUTIONS & SERVICES</a></li>
            <li><a href="/clients" style={styles.navLink}>CLIENT PORTFOLIO</a></li>
            <li><a href="/about" style={styles.navLink}>ABOUT US</a></li>
            <li><a href="/contactus" style={styles.navLink}>CONTACT US</a></li>
          </ul>
        </div>
      )}

      {/* Mobile Menu Button - Absolutely positioned */}
      {isMobile && (
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            position: "absolute",
            right: "20px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            zIndex: 1100,
            padding: "10px",
          }}
        >
          <span style={{
            width: "25px",
            height: "3px",
            backgroundColor: "#fff",
            borderRadius: "2px",
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            transition: 'transform 0.3s ease'
          }}></span>
          <span style={{
            width: "25px",
            height: "3px",
            backgroundColor: "#fff",
            borderRadius: "2px",
            opacity: menuOpen ? 0 : 1,
            transition: 'opacity 0.3s ease'
          }}></span>
          <span style={{
            width: "25px",
            height: "3px",
            backgroundColor: "#fff",
            borderRadius: "2px",
            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            transition: 'transform 0.3s ease'
          }}></span>
        </button>
      )}

      {/* Mobile Dropdown Menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: "fixed",
          top: "60px",
          left: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.95)",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          zIndex: 999,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          animation: "slideDown 0.3s ease-out"
        }}>
          <a href="/" style={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>HOME</a>
          <a href="/services" style={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>SOLUTIONS & SERVICES</a>
          <a href="/clients" style={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>CLIENT PORTFOLIO</a>
          <a href="/about" style={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>ABOUT US</a>
          <a href="/contactus" style={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>CONTACT US</a>
        </div>
      )}

      {/* Animation for mobile menu */}
      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </nav>
  );
}

const styles = {
  navLink: {
    color: "#931f1d",
    textDecoration: "none",
    fontSize: "14px",
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 500,
    letterSpacing: "0.5px",
    transition: "color 0.2s ease",
    padding: "8px 12px",
    borderRadius: "4px",
    ':hover': {
      color: "#fff",
    }
  },
  mobileNavLink: {
    color: "#931f1d",
    textDecoration: "none",
    fontSize: "16px",
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 500,
    padding: "12px 0",
    display: "block",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    transition: "color 0.2s ease",
    ':hover': {
      color: "#ddd",
    }
  }
};

export default Navbar;