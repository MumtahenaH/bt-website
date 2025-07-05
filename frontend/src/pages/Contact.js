import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "dfab5107-baef-476c-a6f0-3a78a0e45782");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
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
    <div style={{ backgroundColor: "#fff" }}>
      <ToastContainer />

      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          minHeight: isMobile ? "40vh" : "50vh",
          backgroundImage: "url(/assets/1801886b-974d-41bb-bd87-7c743c706d4f.jpg)",
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
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            zIndex: 1
          }}
        ></div>
        <h1
          style={{
            fontSize: isMobile ? "2rem" : "3rem",
            fontFamily: "'Space Grotesk', sans-serif",
            position: "relative",
            zIndex: 2,
            padding: isMobile ? "20px" : "0",
            textShadow: "0 2px 6px rgba(0,0,0,0.3)",
            color: "#931f1d"
          }}
        >
          Contact Us
        </h1>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light font-['Space_Grotesk'] text-black">Get in Touch</h2>
              <p className="text-gray-600">
                We'd love to hear from you. Reach out to us through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
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

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaPhone className="h-5 w-5 text-black" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium font-['Space_Grotesk'] text-black">Phone Numbers</h3>
                  <p className="mt-1 text-gray-600">
                    +880-2-9128608<br />
                    +880-2-9130322
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaEnvelope className="h-5 w-5 text-black" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium font-['Space_Grotesk'] text-black">Email</h3>
                  <p className="mt-1 text-gray-600">bt@citechco.net</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="h-full">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d228.2371923277288!2d90.3691543858429!3d23.75468592009448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1750393943065!5m2!1sen!2sbd"
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
          <form onSubmit={onSubmit} className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md w-full">
            <div className="mb-7">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-4 py-2 bg-gray-200 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-7">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-gray-200 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-2 bg-gray-200 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
