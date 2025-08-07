import React from "react";

const PortfolioCard = () => {
  return (
    <div className="bg-[#111] text-white rounded-lg p-4 w-full max-w-sm shadow-md">
      <img src="./product.jpg" alt="Project" className="rounded-md mb-4" />

      <h3 className="text-lg font-semibold mb-2">Chaintech Product</h3>

      <div className="flex flex-wrap gap-2 text-sm mb-4">
        <span className="bg-[#222] px-2 py-1 rounded-full">UX Design</span>
        <span className="bg-[#222] px-2 py-1 rounded-full">Angular</span>
        <span className="bg-[#222] px-2 py-1 rounded-full">JavaScript</span>
      </div>

      <button className="bg-[#222] w-full py-2 rounded-md hover:bg-[#333]">
        View Product&nbsp; <span className="text-sm text-gray-400">Detail</span>
      </button>
    </div>
  );
};

export default PortfolioCard;
