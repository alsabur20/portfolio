import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    role: "AI Analyst / LLM Trainer",
    company: "Turing",
    location: "Remote",
    period: "Feb 2026 — Apr 2026",
    body: "Performed large-scale LLM evaluation and annotation to improve model reasoning and accuracy for clients including Meta and Google.",
    tags: ["LLM", "Evaluation", "Prompting"],
  },
  {
    role: "Odoo Developer",
    company: "SincSol",
    location: "Lahore, Pakistan",
    period: "Jun 2024 — Apr 2025",
    body: "Developed and customized Odoo ERP modules in Python and XML, focusing on workflow optimization and maintainable architecture.",
    tags: ["Odoo", "Python", "PostgreSQL"],
  },
  {
    role: "Teaching Assistant",
    company: "University of Engineering and Technology",
    location: "Lahore, Pakistan",
    period: "Sep 2023 — May 2024",
    body: "Assisted in teaching Programming Fundamentals and OOP to 50+ students, running weekly labs and one-on-one support sessions.",
    tags: ["Teaching", "C++", "OOP"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-ink/15 bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeader
          index="02"
          kicker="Field Notes"
          title="Where I've worked."
        />

        <div className="relative">
          {/* center line */}
          <div
            className="absolute left-4 top-0 h-full w-px bg-ink/20 md:left-1/2"
            aria-hidden
          />

          <div className="flex flex-col gap-14">
            {items.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={item.company}
                  initial={{
                    opacity: 0,
                    x: left ? -60 : 60,
                    rotate: left ? -1.5 : 1.5,
                  }}
                  whileInView={{ opacity: 1, x: 0, rotate: left ? -1 : 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex ${left ? "md:justify-start" : "md:justify-end"}`}
                >
                  <div className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-ink bg-paper md:left-1/2" />
                  <div className="ml-10 w-full md:ml-0 md:w-[46%]">
                    <motion.article
                      whileHover={{ rotate: 0, y: -4 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 18,
                      }}
                      className="border border-ink/25 bg-paper p-6"
                    >
                      <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-soft">
                        {item.period}
                      </div>
                      <h3 className="font-display text-2xl font-bold text-ink">
                        {item.role}
                      </h3>
                      <div className="mt-1 text-sm text-accent-brown">
                        @ {item.company} ·{" "}
                        <span className="text-ink-soft">{item.location}</span>
                      </div>
                      <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                        {item.body}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="border border-ink/25 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-ink"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.article>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
