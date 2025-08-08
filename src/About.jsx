function About() {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-r from-[#FF512F] via-[#DD2476] to-[#FFB88C] py-12 sm:py-20 px-4"
    >
      <div className="max-w-[1094px] mx-auto flex flex-col items-center gap-8 text-center">
        <h4 className="text-white font-semibold text-2xl sm:text-3xl md:text-5xl leading-tight">
          Kaleb Lechtenberg
        </h4>

        <p className="text-white font-medium text-base sm:text-lg md:text-[38px] leading-relaxed">
          "Working with this freelancer has been great. His attention to detail
          is unparalleled and finished all work ahead of schedule. Will gladly
          send more work and I do not hesitate to recommend him to you on your
          project also."
        </p>

        <img
          src="./Shield.svg"
          alt="shield icon"
          className="w-12 h-14 sm:w-[72px] sm:h-[86px]"
        />
      </div>
    </section>
  );
}

export default About;
