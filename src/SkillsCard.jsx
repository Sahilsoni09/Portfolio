function SkillsCard() {
  return (
    <div className="flex flex-col sm:flex-row gap-6 rounded-lg border border-[#737373] p-6 bg-black">
      <img
        src="./Graph.png"
        alt="graph"
        className="w-40 h-40 sm:w-[220px] sm:h-[220px]"
      />

      <div className="flex flex-col gap-4">
        <h6 className="text-white font-bold text-2xl sm:text-3xl">UX Design</h6>
        <p className="text-white text-sm sm:text-base leading-relaxed">
          UI design is the process of designing the visual and interactive
          elements of a user interface, such as buttons, icons, and layout, to
          create an intuitive and pleasing experience for users.
        </p>
      </div>
    </div>
  );
}
export default SkillsCard;
