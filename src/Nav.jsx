import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white py-4">
      <div className="max-w-[1728px] mx-auto px-4 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="./logo.png"
            alt="logo"
            className="w-8 h-8 sm:w-[26px] sm:h-[26px]"
          />
          <span className="text-lg sm:text-xl font-bold">Web</span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-base font-medium">
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

        <button className="hidden md:flex bg-[#925FF0] text-white rounded px-4 py-2 md:px-6 md:py-3 text-sm md:text-base gap-1">
          <span>Contact</span>
          <span>Me</span>
        </button>

        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-4 md:px-12">
          <ul className="flex flex-col items-start gap-4 text-base font-medium">
            <li>
              <a
                href="#hero"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                About Me
              </a>
            </li>
          </ul>

          <button
            className="bg-[#925FF0] text-white rounded px-4 py-2 text-sm"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
}

export default Nav;
