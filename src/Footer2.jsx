import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Gradient border at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-orange-400 to-purple-400"></div>

      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Main footer content - Purple card with image and text */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl p-6 lg:p-8 mb-12 relative overflow-hidden">
          {/* Decorative curves background */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10">
            <svg viewBox="0 0 400 200" className="w-full h-full text-white">
              <path
                d="M0,100 Q100,50 200,100 T400,100 L400,200 L0,200 Z"
                fill="currentColor"
              />
              <path
                d="M0,120 Q150,70 300,120 T600,120 L600,200 L0,200 Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            {/* Left side - Actual workspace image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src="/hero-image.jpg" // Yahan apni actual image ka path daalo
                  alt="Workspace with laptop and design elements"
                  className="w-72 lg:w-80 h-48 lg:h-56 object-cover rounded-2xl shadow-lg"
                />
                {/* Decorative elements overlay */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full shadow-lg"></div>
                <div className="absolute top-1/2 -left-3 w-6 h-6 bg-blue-400 rounded-full shadow-lg"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-green-400 rounded-full shadow-lg"></div>
              </div>
            </div>

            {/* Right side - Text content */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-white leading-tight">
                Thanks for visit my website
              </h2>
              <p className="text-purple-100 text-base lg:text-lg leading-relaxed opacity-90">
                If you have any questions you can write me to any of my social
                networks, I am sure I will answer you.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom navigation - same as before */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                </div>
              </div>
              <span className="text-xl font-bold">Web</span>
            </div>

            <nav className="flex flex-wrap justify-center sm:justify-end gap-6 sm:gap-8">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Portfolio
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Skills
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                About Me
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
