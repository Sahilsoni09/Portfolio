function About() {
  return (
    <section
      id="about"
      className="w-[1728px] h-[636px] absolute top-[3339px] bg-[url('./About.svg')] bg-cover"
    >
      <div className="w-[1094px] h-[446px] flex flex-col items-center gap-[40px] absolute top-[95px] left-[317px]">
        <h4 className="w-[458px] h-[50px] font-semibold text-[48px] leading-[105%] tracking-normal text-white">
          Kaleb Lechtenberg
        </h4>
        <p className="w-[1094px] h-[230px] font-medium text-[38px] leading-[120%] tracking-normal text-white flex items-center justify-center text-center">
          "Working with this freelancer has been great. His attention to detail
          is unparalleled and finished all work ahead of schedule. Will gladly
          send more work and I do not hesitate to recommend him to you on your
          project also."
        </p>
        <img src="./Shield.svg" className="w-[72px] h-[86px]" />
      </div>
    </section>
  );
}

export default About;
