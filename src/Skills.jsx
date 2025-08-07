import SkillsCard from "./SkillsCard";

function Skills() {
  return (
    <section id="skills">
      <h4 className="h-[166px] w-[52px] absolute top-[2479px] left-[99px] font-bold text-[52px] leading-[100%] tracking-normal text-white">
        SKILLS
      </h4>
      <div className="grid grid-cols-2 absolute w-[1531px] h-[660px] top-[2568px] left-[99px] gap-[20px]">
        {Array.from({ length: 4 }).map((_, ind) => (
          <SkillsCard key={ind} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
