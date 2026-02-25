import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SkillGroup {
  title: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["C++", "C#", "Python", "TypeScript/JavaScript", "HTML/CSS"],
  },
  {
    title: "Frameworks & Platforms",
    skills: ["ASP.NET Core", "FastAPI", "Flask", "React/React Native", "Next.js", "Expo", "Bootstrap"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MS SQL", "PostgreSQL", "Entity Framework Core"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Visual Studio", "VS Code", "Postman", "Pytesseract"],
  },
  {
    title: "Practices",
    skills: ["Agile/Scrum", "RESTful APIs", "Unit Testing", "Debugging"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem-Solving", "Team Collaboration", "Communication", "Time Management"],
  },
];

const Skills = () => {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
          Skills
        </h2>
        <div className="w-12 h-1 bg-primary mb-10 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-md border border-border bg-card text-card-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
