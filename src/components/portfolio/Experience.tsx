import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Teaching Assistant",
    company: "University of Engineering and Technology",
    period: "Sep 2023 – May 2024",
    location: "Lahore, Pakistan",
    points: [
      "Assisted in teaching Programming Fundamentals and OOP for 50+ students each.",
      "Conducted weekly lab sessions and provided one-on-one support to 15+ students per semester.",
      "Facilitated bi-weekly group discussions and projects for collaborative learning.",
    ],
  },
  {
    role: "Odoo Developer (Part-Time)",
    company: "Freelance",
    period: "Jun 2024 – Apr 2025",
    location: "Remote, Pakistan",
    points: [
      "Developed and customized Odoo ERP modules to streamline business processes.",
      "Collaborated with stakeholders to analyze requirements and deliver tailored solutions.",
      "Optimized workflows and ensured seamless integration with existing systems.",
    ],
  },
];

const Experience = () => {
  const ref = useScrollAnimation();

  return (
    <section id="experience" className="section-padding section-alt">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
          Experience
        </h2>
        <div className="w-12 h-1 bg-primary mb-10 rounded-full" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative pl-8 border-l-2 border-border"
            >
              <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <Briefcase size={12} className="text-primary-foreground" />
              </div>
              <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-lg font-display font-semibold text-foreground">
                  {exp.role}
                </h3>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {exp.company} · {exp.location}
              </p>
              <ul className="space-y-2">
                {exp.points.map((pt, j) => (
                  <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
