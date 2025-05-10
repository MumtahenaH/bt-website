import { useState } from "react";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
        services: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prev) => {
            const services = checked
                ? [...prev.services, value]
                : prev.services.filter((s) => s !== value);
            return { ...prev, services };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    const styles = {
        container: {
            display: "flex",
            flexDirection: { base: "column", md: "row" },
            minHeight: "100vh",
            backgroundColor: "#f9f2ee",
            fontFamily: "Space Grotesk, sans-serif",
            padding: { base: "2rem 1rem", md: "10rem" },
            justifyContent: "center",
            alignItems: "center",
            border: "6px solid #931f1d",
            gap: { base: "3rem", md: "5rem" },
        },
        imageContainer: {
            display: "flex",
            justifyContent: "center",
            width: "100%",
        },
        image: {
            width: { base: "100%", md: "70%" },
            height: "auto",
            maxWidth: "500px",
        },
        textContent: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            maxWidth: "700px",
            padding: { base: "0 1rem", md: "0" },
        },
        heading: {
            fontSize: { base: "1.5rem", md: "2rem" },
            color: "#1d1d1f",
            marginBottom: "1rem",
            marginTop: { base: "2rem", md: "5rem" },
        },
        emailLink: {
            color: "#931f1d",
            textDecoration: "underline",
        },
        form: {
            width: "100%",
            backgroundColor: "#f9f2ee",
            borderRadius: "8px",
            padding: { base: "1rem", md: "2rem" },
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            minWidth: { base: "auto", md: "500px" },
            maxWidth: "600px",
        },
        input: {
            padding: { base: "0.6rem", md: "0.8rem" },
            caretColor: "black",
            fontSize: { base: "1rem", md: "1.5rem" },
            backgroundColor: "#f9f2ee",
            textAlign: "center",
            outline: "none",
            border: "none",
            cursor: "text",
            color: "#000",
        },
        textarea: {
            padding: "0.5rem",
            fontSize: { base: "1rem", md: "1.5rem" },
            backgroundColor: "#f9f2ee",
            textAlign: "center",
            outline: "none",
            border: "none",
            cursor: "text",
            resize: "none",
            caretColor: "black",
            color: "#000",
            minHeight: "120px",
        },
        button: {
            padding: { base: "0.8rem", md: "1rem" },
            cursor: "pointer",
            marginTop: "1rem",
            textAlign: "center",
            fontSize: { base: "0.9rem", md: "1rem" },
        },
    };

    return (
        <div style={styles.container}>
            {/* Left Side Text */}
            <div style={styles.textContent}>
                <div style={styles.imageContainer}>
                    <img
                        src="/assets/contactus.png"
                        alt="Contact Us"
                        style={styles.image}
                    />
                </div>

                <h1 style={styles.heading}>Reach out to us</h1>
                <p style={{ fontSize: "1rem", color: "#333" }}>
                    Get a <a href="mailto:start@lliosocial.com" style={styles.emailLink}>email@email.com</a>
                </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} style={styles.form}>
                {[
                    { name: "name", label: "Name", type: "text" },
                    { name: "company", label: "Company", type: "text" },
                    { name: "phone", label: "Phone", type: "tel" },
                    { name: "email", label: "Email Address", type: "email" },
                ].map((field) => (
                    <div key={field.name} style={{ display: "flex", flexDirection: "column" }}>
                        <input
                            name={field.name}
                            type={field.type}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={`Type ${field.label.toLowerCase()}`}
                            required
                            style={styles.input}
                        />
                        <div className="divider divider-neutral"></div>
                    </div>
                ))}

                {/* Message Textarea */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows={4}
                        required
                        style={styles.textarea}
                    />
                    <div className="divider divider-neutral"></div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="rounded-full px-6 py-4 text-gray-200 font-bold text-sm md:text-base uppercase flex items-center justify-center gap-2 bg-gradient-to-r from-red-900 to-gray-700 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm"
                    style={styles.button}
                >
                    Send message
                </button>
            </form>
        </div>
    );
}

export default ContactUs;