import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        !event.target.closest('.navbar-content') &&
        !event.target.closest('.dropdown-menu')
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
        background: "#f5f5f5",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <a href="/" style={{ display: "flex", alignItems: "left" }}>
        <img
          src="/Office logo.png"
          alt="Logo"
          style={{ height: "40px", objectFit: "contain" }}
        />
      </a>

      {!isMobile && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "20px",
              padding: 0,
              margin: 0,
              justifyContent: "center",
            }}
          >
            <li>
              <a href="/" style={styles.navLink}>
                HOME
              </a>
            </li>

            <li
              className="group"
              style={{ position: "relative" }}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span
                style={{
                  ...styles.navLink,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                SOLUTIONS & SERVICES <span style={{ fontSize: "10px" }}>▼</span>
              </span>
              <ul
                className="dropdown-menu"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  padding: "10px 0",
                  zIndex: 1001,
                  minWidth: "220px",
                  listStyle: "none",
                  margin: 0,
                  display: dropdownOpen ? "block" : "none",
                }}
              >
                <li>
                  <a
                    href="/services#DATA_CENTER_SOLUTION"
                    style={styles.navLink}
                  >
                    Data Center Solution
                  </a>
                </li>
                <li>
                  <a
                    href="/services#SERVER_AND_STORAGE_SOLUTION"
                    style={styles.navLink}
                  >
                    Server Storage Solution
                  </a>
                </li>
                <li>
                  <a
                    href="/services#PREMISE_NETWORK_INFRASTRUCTURE_SOLUTION"
                    style={styles.navLink}
                  >
                    Premise Network Infrastructure
                  </a>
                </li>
                <li>
                  <a
                    href="/services#INDUSTRIAL_COMMERCIAL_AUTOMATION_SOLUTION"
                    style={styles.navLink}
                  >
                    Industrial/Commercial Automation
                  </a>
                </li>
                <li>
                  <a
                    href="/services#TRANSPORTATION_SECTOR"
                    style={styles.navLink}
                  >
                    Transportation Sector
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/clients" style={styles.navLink}>
                CLIENT PORTFOLIO
              </a>
            </li>
            <li>
              <a href="/about" style={styles.navLink}>
                ABOUT US
              </a>
            </li>
            <li>
              <a href="/contactus" style={styles.navLink}>
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      )}

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
            verticalAlign: "middle",
            display: "inline-flex",
            alignItems: "center",
            height: "100%",
            paddingTop: "8px",
          }}
        >
          <span
            style={{
              width: "25px",
              height: "3px",
              backgroundColor: "#fff",
              borderRadius: "2px",
              transform: menuOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
              transition: "transform 0.3s ease",
            }}
          ></span>
          <span
            style={{
              width: "25px",
              height: "3px",
              backgroundColor: "#fff",
              borderRadius: "2px",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.3s ease",
            }}
          ></span>
          <span
            style={{
              width: "25px",
              height: "3px",
              backgroundColor: "#fff",
              borderRadius: "2px",
              transform: menuOpen
                ? "rotate(-45deg) translate(5px, -5px)"
                : "none",
              transition: "transform 0.3s ease",
            }}
          ></span>
        </button>
      )}

      {isMobile && menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            right: 0,
            background: "rgba(255, 255, 257)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            zIndex: 999,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            animation: "slideDown 0.3s ease-out",
          }}
        >
          <a href="/services#DATA_CENTER_SOLUTION">Data Center Solution</a>
          <a href="/services#SERVER_AND_STORAGE_SOLUTION">
            Server Storage Solution
          </a>
          <a href="/services#PREMISE_NETWORK_INFRASTRUCTURE_SOLUTION">
            Premise Network Infra Solution
          </a>
          <a href="/services#INDUSTRIAL_COMMERCIAL_AUTOMATION_SOLUTION">
            Industrial/Commercial Automation
          </a>
          <a href="/services#TRANSPORTATION_SECTOR">
            Transportation Sector Automation
          </a>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
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
    display: "flex",
    alignItems: "center",
    height: "100%",
    lineHeight: "1",
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
  },
};

export default Navbar;
