function Footer() {
  const styles = {
    underlineLink: {
      display: "block",
      color: "black",
      textDecoration: "underline",
      fontSize: "14px",
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 400,
      padding: "8px 1px",
      transition: "color 0.2s ease",
    },
  };

  return (
    <footer className="bg-[#fff] text-black py-3 border-t-2 border-gray-300 font-light font-['Space_Grotesk']">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-28 place-items-center text-center md:text-left">
          {/* Column 1: Logo and Text */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/Office logo.png" alt="BT Logo" className="w-44 sm:w-48 mb-4" />
            <p className="leading-relaxed text-justify text-sm sm:text-base max-w-[300px]">
              Engineering powerful business solutions from complex network technologies to improve efficiency and reduce expenditures.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-semibold mb-2 text-base sm:text-lg">Solutions</h4>
            <ul className="list-none m-0 p-0">
              <li><a href="/services#DATA_CENTER_SOLUTION" style={styles.underlineLink}>Data Center Solution</a></li>
              <li><a href="/services#SERVER_AND_STORAGE_SOLUTION" style={styles.underlineLink}>Server Storage Solution</a></li>
              <li><a href="/services#PREMISE_NETWORK_INFRASTRUCTURE_SOLUTION" style={styles.underlineLink}>Premise Network Infrastructure</a></li>
              <li><a href="/services#INDUSTRIAL_COMMERCIAL_AUTOMATION_SOLUTION" style={styles.underlineLink}>Industrial/Commercial Automation</a></li>
              <li><a href="/services#TRANSPORTATION_SECTOR" style={styles.underlineLink}>Transportation Sector</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="mt-6 space-y-4 text-sm sm:text-base text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-2">Office Address</h4>
              <p>
                7/3 (Ground Floor),<br />
                Block – C, Lalmatia,<br />
                Dhaka-1207, Bangladesh
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Phone Numbers</h4>
              <p>+880-2-9128608<br />+880-2-9130322</p>
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>bt@citechco.net</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center pt-10 mt-20 text-xs sm:text-sm">
        <p>All rights reserved Business Technologies © 2025</p>
      </div>
    </footer>
  );
}

export default Footer;
