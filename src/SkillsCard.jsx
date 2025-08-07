function SkillsCard() {
  return (
    <div className="w-[755.5px] h-[320px] flex  gap-[20px] rounded-[10px] border-[1px] border-[#737373] pt-[40px] pr-[50px] pb-[60px] pl-[40px]">
      <img src="./Graph.png" className="w-[220px] h-[220px]" />

      <div className="flex flex-col gap-[20px] items-center justify-center">
        <h6 className="w-[187px] h-[36px] font-bold text-[36px] leading-[100%] tracking-normal text-white">
          UX Design
        </h6>
        <p className="w-[425.5px] h-[88px] font-normal text-[18px] leading-[120%] tracking-normal text-white">
          UI design is the process of designing the visual and interactive
          elements of a user interface, such as buttons, icons, and layout, to
          create an intuitive and pleasing experience for users.
        </p>
      </div>
    </div>
  );
}

export default SkillsCard;
