function PortfolioCard() {
  return (
    <div className="w-[360px] h-[419px] relative rounded-[10px] border-[1px] border-[#646464]">
      <img
        className="w-[300px] h-[200px] absolute top-[30px] left-[30px] rounded-[10px]"
        src="./PortfolioCardImage.png"
      />

      <div className="absolute top-[253px] left-[30px]">
        <h4 className="font-bold text-[24px] leading-[100%] tracking-normal text-white w-[232px] h-[24px]">
          Chaintech Product
        </h4>
        <div className="flex items-center gap-[5px] text-black test-[14px] leading-[100%] tracking-normal font-normal w-[86px] h-[24px] absolute top-[49px]">
          <span className="bg-[#E9DFFC] rounded-[12px] border-[1px] border-[#BE9FF6] pt-[4px] pr-[8px] pb-[4px] pl-[8px] whitespace-nowrap">
            UX Design
          </span>
          <span className="bg-[#E9DFFC] rounded-[12px] border-[1px] border-[#BE9FF6] pt-[4px] pr-[8px] pb-[4px] pl-[8px]">
            Angular
          </span>
          <span className="bg-[#E9DFFC] rounded-[12px] border-[1px] border-[#BE9FF6] pt-[4px] pr-[8px] pb-[4px] pl-[8px]">
            JavaScript
          </span>
        </div>
      </div>

      <button className="absolute w-[300px] h-[40px] top-[349px] left-[30px] px-[12px] py-[24px] bg-[#292929] text-white flex items-center justify-center">
        View Product detail
      </button>
    </div>
  );
}

export default PortfolioCard;
