function Hero() {
  return (
    <div>
      <div className="absolute top-[170px] left-[98px] w-[957px] h-[668px]">
        <div className="gap-[18px] flex flex-col">
          <div className="w-[956px] h-[338px] font-extrabold text-[188px] leading-[90%] text-white tracking-normal align-middle ">
            PRODUCT
            <br />
            DESIGNER
          </div>

          <div className="w-[931px] h-[98px] font-bold text-[109px] leading-[90%] tracking-normal align-middle bg-gradient-to-r from-[#FA709A] via-[] to-[#FEE140] bg-clip-text text-transparent">
            CRISTIAN MUN0Z
          </div>
        </div>

        <div className=" relative w-[875px] h-[144px] mt-[44px]">
          <img
            src="./social-network.png"
            className="w-[525px] h-[52px] absolute left-[244px]"
          />
          <button className="w-[875px] h-[52px] bg-[#292929] absolute top-[92px] pt-[16px] pr-[24px] pb-[16px] pl-[32px] flex items-center justify-center gap-[8px]">
            <span className="text-[20px] leading-[100%] tracking-normal align-middle text-white font-normal">
              Download Curriculum Vitae
            </span>
            <img className="w-[20px] h-[20px]" src="./arrow-down.svg" />
          </button>
        </div>
      </div>

      <img
        src="./hero-image.jpg"
        className=" h-[455px] w-[361px] absolute left-[1068px] top-[183px] rounded-[10px]"
      />
    </div>
  );
}

export default Hero;
