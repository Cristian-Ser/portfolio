function Skills() {
  // Skills shown in the section
  const skills = [
    {
      category: "Frontend",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind",
      ],
    },
    {
      category: "Backend",
      technologies: [
        "Next.js Server Actions",
        "Next.js API Routes",
        "Authentication (Auth.js)",
      ],
    },
    {
      category: "Database",
      technologies: ["Supabase", "Drizzle ORM", "SQL"],
    },
    {
      category: "Tools and Deploy",
      technologies: ["Git", "GitHub", "Vercel"],
    },
  ];

  return (
    <section id="skills" className="relative border-b overflow-hidden scroll-mt-14">
      <div className="flex flex-col justify-center gap-5 max-w-3xl mx-auto px-4 py-10 min-h-100">
        {/* Text */}
        <div>
          <span className="text-base font-bold text-gray-500">SKILLS</span>
          <h2 className="text-2xl font-black">Technologies I work with</h2>
        </div>
        {/* Skill blocks */}
        <div>
          {/* Categories */}
          <ul className="flex flex-col sm:grid sm:grid-cols-2 gap-3">
            {skills.map((skill) => (
              <li
                key={skill.category}
                className="flex flex-col gap-2 p-4 border rounded-lg"
              >
                <span className="font-bold text-sm text-gray-500">
                  {skill.category}
                </span>
                {/* Technologies */}
                <ul className="flex gap-2 flex-wrap">
                  {skill.technologies.map((tec) => (
                    <li
                      key={tec}
                      className="text-sm border p-2 rounded-lg bg-accent/10 hover:-translate-y-0.5 duration-300 cursor-default"
                    >
                      {tec}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
