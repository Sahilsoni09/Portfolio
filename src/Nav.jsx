function Nav() {
  return (
    <nav className="flex justify-between items-center text-white pt-[50px] pr-[100px] pb-[30px] pl-[100px] h-[120px] w-full max-w-[1728px]">
      <div className="flex justify-center items-center gap-[5px] w-[73px] h-[27px]">
        <img src="./logo.png" className="w-[26.03px] h-[26.04px]" />
        <span className="text-[20px] text-white w-[47px] h-[20px] font-bold leading-[100%]">
          Web
        </span>
      </div>

      <ul className="flex gap-[30px] w-[347px] h-[18px] text-[18px] font-normal ">
        <li>Home</li>
        <li>Portfolio</li>
        <li>Skills</li>
        <li>About Me</li>
      </ul>
      <button className="w-[141px] h-[40px] bg-[#925FF0] gap-[5px] flex items-center justify-center text-white font-normal rounded-[4px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] text-[16px]">
        <span>Contact</span>
        <span>Me</span>
      </button>
    </nav>
  );
}

export default Nav;
