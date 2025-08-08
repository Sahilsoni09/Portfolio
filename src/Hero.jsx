function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col lg:flex-row items-center gap-12 px-4 md:px-12 py-16 max-w-[1728px] mx-auto"
    >
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-4xl sm:text-6xl lg:text-[188px] font-extrabold leading-[90%] text-white">
          PRODUCT <br /> DESIGNER
        </h1>

        <h2
          className="whitespace-nowrap text-3xl sm:text-5xl lg:text-[109px] font-bold leading-[90%] 
             bg-gradient-to-r from-[#FA709A] to-[#FEE140] bg-clip-text text-transparent"
        >
          CRISTIAN MUN0Z
        </h2>

        <div className="flex flex-col  gap-4 mt-6">
          <div className="flex justify-center">
            <img
              src="./social-network.png"
              alt="social"
              className="w-full max-w-[525px] h-auto "
            />
          </div>
          <button className="bg-[#292929] text-white flex items-center justify-center gap-2 px-6 py-4 rounded">
            <span className="text-lg">Download Curriculum Vitae</span>
            <img src="./arrow-down.svg" alt="download" className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 hidden lg:block">
        <img
          src="./hero-image.jpg"
          alt="hero"
          className="w-full max-w-[35rem] h-auto rounded-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
