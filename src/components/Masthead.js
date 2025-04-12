import React from "react";

function Masthead() {
  return (
    <section
      id="logo"
      className="min-h-screen md:min-h-[200vh] bg-cover bg-center flex flex-col items-center justify-center text-center px-4 md:px-8"
      style={{ backgroundImage: "url('/assets/masthead.svg')" }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white font-grotesk mb-4">
        BUSINESS TECHNOLOGIES
      </h1>
      <h2 className="text-xl md:text-2xl font-bold text-white font-grotesk mb-8 px-4">
        SEAMLESS TECH, LIMITLESS GROWTH
      </h2>
      <button
        className="rounded-full px-6 py-4 bg-white text-black font-bold text-sm md:text-base uppercase flex items-center gap-2 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm"
      >
        Learn More <span className="text-lg transition-transform">→</span>
      </button>
      <p className="text-lg md:text-2xl text-white font-light px-4 mt-12 md:mt-20">
        Turning complex network technology <br /> into <span className="font-bold">business solutions that save you time and money</span>
      </p>
    </section>
  );
}

export default Masthead;