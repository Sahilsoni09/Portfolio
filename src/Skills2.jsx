import React from "react";

const skills = [
  {
    title: "UX Design",
    percentage: 97,
    description:
      "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",
  },
  {
    title: "UI Design",
    percentage: 97,
    description:
      "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",
  },
  {
    title: "UX Design",
    percentage: 97,
    description:
      "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",
  },
  {
    title: "UX Design",
    percentage: 97,
    description:
      "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",
  },
];

const CircleProgress = ({ percentage }) => {
  const radius = 50;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      className="block"
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
    >
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FA709A" />
          <stop offset="100%" stopColor="#FEE140" />
        </linearGradient>
      </defs>

      {/* Background circle */}
      <circle
        stroke="#1f1f1f"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />

      {/* Progress circle */}
      <g transform={`rotate(-90 ${radius} ${radius})`}>
        <circle
          stroke="url(#grad)"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </g>

      {/* Centered percentage text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="18"
        fontWeight="bold"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default function Skills() {
  return (
    <section className="bg-black text-white px-4 py-12 sm:px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">SKILLS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex gap-6 p-6 sm:p-8 border border-gray-700 rounded-lg bg-[#010101] items-center"
          >
            {/* Circle Progress */}
            <div className="min-w-[120px] min-h-[120px] flex items-center justify-center">
              <CircleProgress percentage={skill.percentage} />
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-xl font-bold mb-1">{skill.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
