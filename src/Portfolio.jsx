import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  return (
    <div>
      <h3 className="w-[289px] h-[52px] absolute top-[1424px] left-[99px] font-bold text-[52px] leading-[100%] tracking-normal text-white">
        PORTFOLIO
      </h3>
      <div className="absolute top-[1503px] left-[99px] grid grid-cols-4 w-[1530px] h-[840px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <PortfolioCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
