import SkillsCard from "./SkillsCard";

function Skills() {
  return (
    <section id="skills" className="max-w-[1728px] mx-auto px-4 md:px-12 py-16">
      <h4 className="text-white font-bold text-4xl md:text-[52px] mb-8">
        SKILLS
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Array.from({ length: 4 }).map((_, ind) => (
          <SkillsCard key={ind} />
        ))}
      </div>
    </section>
  );
}
export default Skills;
