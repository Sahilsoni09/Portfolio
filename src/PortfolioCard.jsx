function PortfolioCard() {
  return (
    <div className="rounded-lg border border-[#646464] p-4 flex flex-col gap-4 bg-black">
      <img
        src="./PortfolioCardImage.png"
        alt="portfolio"
        className="w-full h-auto rounded-lg"
      />

      <div>
        <h4 className="font-bold text-xl text-white">Chaintech Product</h4>
        <div className="flex flex-wrap gap-2 mt-3">
          {["UX Design", "Angular", "JavaScript"].map((tag, idx) => (
            <span
              key={idx}
              className="bg-[#E9DFFC] text-black rounded-full border border-[#BE9FF6] px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button className="bg-[#292929] text-white py-3 rounded text-center mt-auto">
        View Product Detail
      </button>
    </div>
  );
}
export default PortfolioCard;
