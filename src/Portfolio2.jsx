import React from "react";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <section className="bg-black py-12 px-6">
      <h2 className="text-white text-3xl font-bold mb-8">PORTFOLIO</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <PortfolioCard key={i} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
