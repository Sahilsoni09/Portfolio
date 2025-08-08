function Footer() {
  return (
    <footer
      id="footer"
      className="bg-black text-white py-10 px-4 sm:px-12 mt-12"
    >
      <div className="w-full max-w-[1728px] mx-auto">
        <img
          src="./footer.png"
          alt="footer banner"
          className="w-full h-auto rounded-lg mb-8"
        />
      </div>

      <div className="max-w-[1728px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
        <div className="flex items-center gap-2">
          <img
            src="./logo.png"
            alt="logo"
            className="w-6 h-6 md:w-[26px] md:h-[26px]"
          />
          <span className="text-lg md:text-xl font-bold">Web</span>
        </div>

        <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 text-base md:text-lg font-normal">
          <li>
            <a href="#hero" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:underline">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About Me
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
