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

    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#f9f2ee] px-4 md:px-20 py-10 md:py-20 border-[6px] border-[#931f1d] gap-10 font-['Space_Grotesk']">
            
            <div className="flex flex-col items-center text-center max-w-xl w-full px-4">
                <img
                    src="/assets/contactus.png"
                    alt="Contact Us"
                    className="w-full max-w-sm md:max-w-md"
                />
                <h1 className="text-2xl md:text-3xl text-[#1d1d1f] mt-6 mb-2 font-bold">Reach out to us</h1>
                <p className="text-base text-[#333]">
                    Get a <a href="mailto:start@lliosocial.com" className="text-[#931f1d] underline">email@email.com</a>
                </p>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="bg-[#f9f2ee] rounded-lg px-6 py-6 md:p-10 flex flex-col gap-4 w-full max-w-lg text-center"
            >
                {[
                    { name: "name", label: "Name", type: "text" },
                    { name: "company", label: "Company", type: "text" },
                    { name: "phone", label: "Phone", type: "tel" },
                    { name: "email", label: "Email Address", type: "email" },
                ].map((field) => (
                    <div key={field.name} className="flex flex-col">
                        <input
                            name={field.name}
                            type={field.type}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={`Type ${field.label.toLowerCase()}`}
                            required
                            className="p-3 md:p-4 bg-[#f9f2ee] border-b border-neutral-300 text-center focus:outline-none text-black placeholder:text-gray-500"
                        />
                    </div>
                ))}

                
                <div className="flex flex-col">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows={4}
                        required
                        className="p-3 md:p-4 bg-[#f9f2ee] border-b border-neutral-300 text-center focus:outline-none text-black placeholder:text-gray-500 resize-none"
                    />
                </div>

                
                <button
                    type="submit"
                    className="rounded-full px-6 py-4 text-white font-bold text-sm md:text-base uppercase flex items-center justify-center gap-2 bg-gradient-to-r from-red-900 to-gray-700 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm"
                >
                    Send message
                </button>
            </form>
        </div>
    );
}

export default ContactUs;
