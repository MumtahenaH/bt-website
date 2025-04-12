import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

function ContactUs(){
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
        minHeight: "150vh",
        backgroundImage: "url('/assets/footer.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",            // Use flexbox to center
        flexDirection: "column",    // Align items vertically
        justifyContent: "center",   // Center vertically
        alignItems: "center",       // Center horizontally
        textAlign: "center",        // Ensure text is centered
      }}>
        <div className="text-white py-16 px-8 w-full">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Section - Call to Action */}
                        <div>
                            <h2 className="text-3xl font-light">
                                Ready to <span className="font-bold">revolutionise</span> your business needs <span className="font-bold">with our unrivalled expertise?</span>
                            </h2>
                           

                            {/* Contact Form */}
                            <form onSubmit={handleSubmit} className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md w-full">
                                <div className="mb-4">
                                    <label className="block text-gray-300 text-sm mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-300 text-sm mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-300 text-sm mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    ></textarea>
                                </div>
                                
                                <button type="submit" className="mt-6 bg-gradient-to-r from-teal-400 to-blue-500 text-black px-6 py-3 rounded-full font-semibold">
                                Send Message
                            </button>
                            </form>
                        </div>

                {/* Right Section - Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div>
                        <h4 className="text-gray-400 uppercase text-sm font-semibold ">ADDRESS</h4>
                       
                        <p className="text-gray-300 py-60">7/3 (Ground Floor), <br/><br/>Block – C, Lalmatia,<br/> <br/>Dhaka-1207, , Bangladesh</p>
                        
                       
                    </div>
                    <div>
    <h4 className="text-gray-400 uppercase text-sm font-semibold">SOCIAL MEDIA</h4>
    <div className="flex flex-col items-center text-gray-300 py-60 gap-10">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-xl mb-2 cursor-pointer hover:text-blue-500" />
        </a>
    
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-xl mb-2 cursor-pointer hover:text-blue-500" />
        </a>
        
    </div>
</div>
                    <div>
                        <h4 className="text-gray-400 uppercase text-sm font-semibold">PHONE</h4>
                        <p className="text-gray-300">+44 020 3319 3701</p>
                    </div>
                    <div>
                        <h4 className="text-gray-400 uppercase text-sm font-semibold">EMAIL</h4>
                        <p className="text-gray-300">infor@info.com</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-gray-400 text-sm text-center py-30 ">
                <p>Business Technologies, Limited registered in Bangladesh</p>
                
                <p>Copyright © Business Technologies All Rights Reserved</p>
            </div>
        </div>
      </section>
        </div>
    )
}
export default ContactUs;