import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

type SkillGroup = { title: string; skills: string[] };

const skillGroups: SkillGroup[] = [
  { title: "Languages", skills: ["C++", "C#", "Python", "TypeScript / JavaScript", "HTML / CSS"] },
  { title: "Frameworks & Platforms", skills: ["ASP.NET Core", "FastAPI", "Flask", "React / React Native", "Next.js", "Expo", "Bootstrap"] },
  { title: "Databases", skills: ["MongoDB", "MS SQL", "PostgreSQL", "Entity Framework Core"] },
  { title: "Tools & Tech", skills: ["Git", "Visual Studio", "VS Code", "Postman", "Pytesseract"] },
  { title: "Practices", skills: ["Agile / Scrum", "RESTful APIs", "Unit Testing", "Debugging"] },
  { title: "Soft Skills", skills: ["Problem-Solving", "Team Collaboration", "Communication", "Time Management"] },
];


export function Skills() {
  return (
    <section id="skills" className="relative border-t border-ink/15 bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeader index="04" kicker="Glossary" title="Education & tools." />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Education */}
          <div className="md:col-span-5">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-soft">
              — Education
            </div>
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -2 }}
              whileInView={{ opacity: 1, x: 0, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ rotate: 0 }}
              className="border border-ink/25 bg-paper p-6"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-soft">
                2022 — 2026
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink">
                Bachelor's in Computer Science
              </h3>
              <div className="mt-1 text-accent-brown">UET Lahore</div>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Core CS, ML, systems, and a lot of late nights building side projects that
                shaped this folio.
              </p>

              <div className="mt-5 border-t border-ink/15 pt-4">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-soft">
                  — Relevant Coursework
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Data Structures",
                    "Algorithms",
                    "Operating Systems",
                    "Databases",
                    "Computer Networks",
                    "Machine Learning",
                    "Artificial Intelligence",
                    "Software Engineering",
                    "OOP",
                    "Web Development",
                    "Information Security",
                    "Theory of Automata",
                  ].map((c) => (
                    <span
                      key={c}
                      className="border border-ink/30 bg-paper px-2 py-0.5 font-mono text-[10px] text-ink"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 border-l-2 border-ink pl-4 font-display text-lg italic text-ink"
            >
              "Ship the sketch. Polish later."
              <div className="mt-2 font-mono text-[10px] not-italic uppercase tracking-widest text-ink-soft">
                — margin note
              </div>
            </motion.blockquote>
          </div>

          {/* Skills */}
          <div className="md:col-span-7">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-soft">
              — Toolbox
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              {skillGroups.map((g, gi) => (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: gi * 0.05 }}
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-soft">
                      {String(gi + 1).padStart(2, "0")}
                    </span>
                    <h4 className="font-display text-sm font-bold text-ink">{g.title}</h4>
                    <span className="h-px flex-1 bg-ink/15" />
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {g.skills.map((s, i) => (
                      <motion.span
                        key={s}
                        initial={{ opacity: 0, y: 10, rotate: i % 2 === 0 ? -2 : 2 }}
                        whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.025, duration: 0.35 }}
                        whileHover={{ y: -3, rotate: 0, scale: 1.05 }}
                        className="border border-ink/40 bg-paper px-2.5 py-1 font-mono text-[10.5px] text-ink"
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>


            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 inline-block border border-ink/25 bg-accent-note/70 px-5 py-4 font-mono text-xs text-ink"
            >
              <div className="text-[10px] uppercase tracking-widest text-ink-soft">
                ✎ post-it
              </div>
              <div className="mt-1 text-ink">
                also fluent in: coffee ☕, docs 📚, and staring at logs.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
