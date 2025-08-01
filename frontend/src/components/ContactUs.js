import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
        services: [],
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "dfab5107-baef-476c-a6f0-3a78a0e45782");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Form submitted successfully!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                });
                event.target.reset();
            } else {
                toast.error(`Error: ${data.message}`, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                });
            }
        } catch (error) {
            toast.error("Network error. Please try again.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
            });
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#fff] px-4 md:px-20 py-10 md:py-20 gap-10 font-['Space_Grotesk']">
            <ToastContainer />
            
            {/* Left section */}
            <div className="flex flex-col items-center text-center max-w-xl w-full px-4">
                <img
                    src="/assets/contactus.png"
                    alt="Contact Us"
                    className="w-full max-w-sm md:max-w-md"
                />
                <h1 className="text-2xl md:text-3xl text-[#1d1d1f] mt-6 mb-2 font-bold">Reach out to us</h1>
                <p className="text-base text-[#333]">
                    You can also email to us at <a href="mailto:bt@citechco.net" className="text-[#931f1d] underline"> bt@citechco.net</a>
                </p>
            </div>

            {/* Form section */}
            <form
                onSubmit={onSubmit}
                className="bg-[#fff] rounded-lg px-6 py-6 md:p-10 flex flex-col gap-4 w-full max-w-lg text-center"
            >
                {[{ name: "name", label: "Name", type: "text" }, { name: "email", label: "Email Address", type: "email" }].map((field) => (
                    <div key={field.name} className="flex flex-col">
                        <input
                            name={field.name}
                            type={field.type}
                            placeholder={`Type ${field.label.toLowerCase()}`}
                            required
                            className="p-3 md:p-4 bg-[#fff] border-b border-neutral-300 text-center focus:outline-none text-black placeholder:text-gray-500"
                        />
                    </div>
                ))}

                <div className="flex flex-col">
                    <textarea
                        name="message"
                        placeholder="Your message"
                        rows={4}
                        required
                        className="p-3 md:p-4 bg-[#fff] border-b border-neutral-300 text-center focus:outline-none text-black placeholder:text-gray-500 resize-none"
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
