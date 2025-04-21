function AboutUs() {
    return (
        <div style={{ backgroundColor: "#fff" }}>
            
            <div
                style={{
                    position: "relative",
                    minHeight: "50vh",
                    backgroundImage: "url('/assets/aboutus.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    overflow: "hidden", // Ensures the overlay doesn't exceed bounds
                }}
            >
                {/* Black Overlay */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed
                        zIndex: 1, // Ensures it's behind text
                    }}
                ></div>

                {/* Text Content */}
                <a
                    style={{
                        fontSize: "3rem",
                        fontFamily: "'Space Grotesk', sans-serif",
                        color: "white",
                        marginBottom: "20px",
                        padding: "70px",
                        position: "relative", // Keeps it above the overlay
                        zIndex: 2, 
                    }}
                    className="font-light"
                >
                    About Us
                </a>
            </div>

            {/* About Us Description Section */}
            <div
                style={{
                    padding: "80px 150px",
                    maxWidth: "1200px",
                    minHeight: "100vh",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#fff",
                    textAlign: "center",
                }}
            >
                <a
                    style={{
                        fontSize: "3rem",
                        fontFamily: "'Space Grotesk', sans-serif",
                        color: "black",
                        maxWidth: "800px",
                    }}
                    className="font-light"
                >
                    About Us Description
                </a>
            </div>
        </div>
    );
}

export default AboutUs;
