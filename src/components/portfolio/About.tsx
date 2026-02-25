import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const coursework = [
  "Artificial Intelligence", "Machine Learning", "Operating Systems",
  "Compiler Design", "Database Systems", "Software Engineering",
  "Linear Algebra", "Data Structures",
];

const About = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section-padding section-alt">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
          About Me
        </h2>
        <div className="w-12 h-1 bg-primary mb-8 rounded-full" />

        <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
          I am a Computer Science student at UET Lahore with strong hands-on experience
          in software development, ERP customization, and teaching assistance. I have built
          projects in Python, C#, ASP.NET Core, and modern JS frameworks. I enjoy solving
          real-world problems and collaborating in agile teams.
        </p>

        <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          Relevant Coursework
        </h3>
        <div className="flex flex-wrap gap-2">
          {coursework.map((c) => (
            <span
              key={c}
              className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground font-medium"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
