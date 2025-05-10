function Client() {
    const ServicesSection = () => {
        return (
            <section id="client" style={styles.section}>
                {/* Image Section */}
                <div className="image-container" style={styles.imageContainer}>
                    <img
                        src="/assets/client.png"
                        alt="Client Portfolio"
                        style={styles.image}
                    />
                </div>

                {/* Text Section */}
                <div style={styles.textContainer}>
                    <h2 style={styles.heading}>
                        <span style={styles.icon}></span>CLIENT PORTFOLIO
                    </h2>

                    <p style={styles.paragraph}>
                        Trusted by a diverse portfolio of clients, driving innovation and excellence together.
                    </p>

                    <button
                        style={styles.button}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow = "0px 8px 12px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
                        }}
                        onMouseDown={(e) => {
                            e.currentTarget.style.transform = "scale(0.95)";
                            e.currentTarget.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.15)";
                        }}
                        onMouseUp={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow = "0px 8px 12px rgba(0, 0, 0, 0.2)";
                        }}
                    > <a href="/clients">
                        Learn More <span style={{ fontSize: "16px", transition: "transform 0.3s ease-in-out" }}>→</span> </a>
                    </button>
                </div>

                {/* Mobile Styles */}
                <style>{`
                    @media (max-width: 768px) {
                        #client {
                            flex-direction: column !important;
                            padding: 20px 10px;
                        }
                        #client .image-container {
                            width: 100%;
                            margin-bottom: 20px;
                        }
                        #client img {
                            width: 100%;
                            height: auto;
                        }
                        #client h2, #client p {
                            text-align: center;
                        }
                        #client button {
                            margin: 20px auto 0;
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

const styles = {
    section: {
        padding: "80px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "50px",
        background: "#f5f5f5"
    },
    imageContainer: { flex: 1 },
    image: {
        width: "100%",
        height: "auto",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)"
    },
    textContainer: { flex: 1 },
    heading: {
        fontSize: "32px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginTop: "10px",
        color: "#000",
        fontWeight: "regular",
        fontFamily: "'Space Grotesk', sans-serif"
    },
    icon: { fontSize: "24px", color: "#000" },
    paragraph: {
        fontSize: "18px",
        color: "#4B5563",
        padding: "20px",
        fontWeight: "regular",
        fontFamily: "'Space Grotesk', sans-serif"
    },
    button: {
        borderRadius: "999px",
        padding: "14px 24px",
        backgroundColor: "#000",
        border: "2px solid #000",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "14px",
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        marginTop: "20px"
    }
};

export default Client;
