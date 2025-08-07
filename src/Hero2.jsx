import React from "react";
import Nav from "./Nav";

const Hero2 = () => {
  return (
    <section className="min-h-screen bg-black text-white px-4 sm:px-8 md:px-16 py-10">
      {/* <nav className="flex justify-between items-center mb-12">
        <div className="text-2xl font-bold">Web</div>
        <ul className="hidden md:flex gap-6 text-sm">
          <li className="cursor-pointer hover:text-purple-400">Home</li>
          <li className="cursor-pointer hover:text-purple-400">Portfolio</li>
          <li className="cursor-pointer hover:text-purple-400">Skills</li>
          <li className="cursor-pointer hover:text-purple-400">About Me</li>
        </ul>
        <button className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
          Contact Me
        </button>
      </nav> */}

      <Nav />

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <div className="text-left">
            {/* Main heading - PRODUCT DESIGNER */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight mb-2">
              <span className="block text-white">PRODUCT</span>
              <span className="block text-white">DESIGNER</span>
            </h1>

            {/* Name with gradient - CRISTIAN MUNOZ */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-wide bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent mt-6 mb-4">
              CRISTIAN MUNOZ
            </h2>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center md:justify-start mt-10 gap-4">
            {[
              "instagram",
              "figma",
              "linkedin",
              "twitter",
              "telegram",
              "medium",
            ].map((icon, i) => (
              <div
                key={i}
                className="bg-white text-black w-10 h-10 rounded flex items-center justify-center hover:bg-gray-300 cursor-pointer"
              >
                <i className={`fab fa-${icon}`}></i>
              </div>
            ))}
          </div>

          {/* CV Button */}
          <div className="mt-6">
            <button className="bg-gray-800 text-white py-2 px-6 rounded shadow-md hover:bg-gray-700">
              Download Curriculum Vitae ⭳
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="./hero-image.jpg"
            className="w-[561px] h-[655px]   border-2 border-pink-500 rounded-[10px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
