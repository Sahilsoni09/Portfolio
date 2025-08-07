import React from "react";

export default function Testimonial() {
  return (
    <section className="bg-gradient-to-r from-[#FA709A] to-[#FEE140] text-white py-20 px-4 sm:px-8 md:px-16 lg:px-32 text-center rounded-lg shadow-lg">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Kaleb Lechtenberg
        </h2>
        <p className="text-lg md:text-xl font-medium leading-relaxed">
          "Working with this freelancer has been great. His attention to detail
          is unparalleled and finished all work ahead of schedule. Will gladly
          send more work and I do not hesitate to recommend him to you on your
          project also."
        </p>

        {/* Icon or Shield SVG */}
        <div className="mt-10 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L4 5v6c0 5.25 3.6 10.74 8 12 4.4-1.26 8-6.75 8-12V5l-8-3z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
