import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  return (
    <section id="portfolio" className="w-full bg-black py-16">
      <div className="max-w-[1728px] mx-auto px-4 md:px-12">
        <h3 className="text-white font-bold text-4xl md:text-[52px] mb-8">
          PORTFOLIO
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <PortfolioCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
