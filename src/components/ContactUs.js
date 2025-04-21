import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // Handle form submission (send data to backend or email)
    };

    return (
        <div>
            <section id="contact" style={{
                minHeight: "100vh",
                backgroundImage: "url('/assets/footer.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "2rem 0",
            }}>
                <div className="text-white w-full max-w-6xl mx-auto px-4">
                    {/* Centered Contact Form */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-md">
                            <h2 className="text-3xl font-light mb-8">
                                Ready to <span className="font-bold">revolutionise</span> your business needs <span className="font-bold">with our unrivalled expertise?</span>
                            </h2>
                            
                            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md mt-5">
                                <div className="mb-4 mt-5">
                                   
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4 mt-5">
                                    
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4 mt-5">
                                  
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    ></textarea>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    className="mt-10 bg-gradient-to-r from-teal-400 to-blue-500 text-black px-6 py-3 rounded-full font-semibold hover:from-teal-500 hover:to-blue-600 transition-all duration-300 w-full"
                                >
                                    Send Message
                                </button>
                                <div className="mt-5">

                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Contact Information Below Form */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Address */}
                        <div className="text-center">
                            <h4 className="text-gray-400 uppercase text-sm font-semibold mb-4">ADDRESS</h4>
                            <p className="text-gray-300">
                                7/3 (Ground Floor), <br/>
                                Block – C, Lalmatia,<br/>
                                Dhaka-1207, Bangladesh
                            </p>
                        </div>

                        {/* Social Media */}
                        <div className="text-center">
                            <h4 className="text-gray-400 uppercase text-sm font-semibold mb-4">SOCIAL MEDIA</h4>
                            <div className="flex justify-center gap-6">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-colors">
                                    <FaFacebookF className="text-xl" />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-colors">
                                    <FaLinkedinIn className="text-xl" />
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="text-center">
                            <h4 className="text-gray-400 uppercase text-sm font-semibold mb-4">PHONE</h4>
                            <p className="text-gray-300">+44 020 3319 3701</p>
                        </div>

                        {/* Email */}
                        <div className="text-center">
                            <h4 className="text-gray-400 uppercase text-sm font-semibold mb-4">EMAIL</h4>
                            <p className="text-gray-300">info@info.com</p>
                        </div>
                    </div>

                    {/* Footer Copyright */}
                    <div className="border-t border-gray-700 mt-12 pt-6 text-gray-400 text-sm">
                        <p className="mb-2">Business Technologies, Limited registered in Bangladesh</p>
                        <p>Copyright © Business Technologies All Rights Reserved</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactUs;