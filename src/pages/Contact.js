import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function ContactUs() {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Add your form submission logic (API call, etc.)
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          minHeight: isMobile ? "40vh" : "50vh",
          backgroundImage: "url('/assets/aboutus.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
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
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>

        {/* Title */}
        <h1
          style={{
            fontSize: isMobile ? "2rem" : "3rem",
            fontFamily: "'Space Grotesk', sans-serif",
            color: "white",
            position: "relative",
            zIndex: 2,
            padding: isMobile ? "20px" : "0",
          }}
          className="font-light"
        >
          Contact Us
        </h1>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light font-['Space_Grotesk'] text-black">
                Get in Touch
              </h2>
              <p className="text-gray-600">
                We'd love to hear from you. Reach out to us through any of these channels.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Office Address */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaMapMarkerAlt className="h-5 w-5 text-black" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium font-['Space_Grotesk'] text-black">Office Address</h3>
                  <p className="mt-1 text-gray-600">
                  7/3 (Ground Floor),<br />
                  Block – C, Lalmatia,<br />
                  Dhaka-1207, Bangladesh
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaPhone className="h-5 w-5 text-black" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium font-['Space_Grotesk'] text-black">Phone Numbers</h3>
                  <p className="mt-1 text-gray-600">
                    Main: +880 m-a-i-n<br />
                    Mobile: +880 m-o-b
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaEnvelope className="h-5 w-5 text-black" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium font-['Space_Grotesk'] text-black">Email</h3>
                  <p className="mt-1 text-gray-600">
                    info@bitm.org.bd<br />
                    support@bitm.org.bd
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 flex items-center justify-center">
                    <svg className="h-4 w-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium font-['Space_Grotesk'] text-black">Social Media</h3>
                  <div className="mt-2 flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-black">
                      <FaFacebook className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-black">
                      <FaTwitter className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-black">
                      <FaLinkedin className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-black">
                      <FaInstagram className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Google Map */}
          <div className="h-full">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d703.9756004698811!2d90.3723290645919!3d23.755450968731193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5374445555%3A0xa20236c8b271a2ba!2sBusiness%20Technologies!5e0!3m2!1sen!2sbd!4v1744438731056!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="BITM Office Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-20 max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light font-['Space_Grotesk'] text-black text-center mb-8">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md w-full">
            <div className="mb-7">
             
              <input
                type="text"
                name="name"
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-200 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-7">
              <label className="block text-gray-500 text-sm mb-2"></label>
              <input
                type="email"
                name="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-200 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
             
              <textarea
                name="message"
                placeholder='Message'
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 bg-gray-200 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="mt-6 bg-gradient-to-r from-teal-400 to-blue-500 text-black px-6 py-3 rounded-full font-semibold hover:from-teal-500 hover:to-blue-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;