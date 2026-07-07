import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

type ProjectType = "Course" | "Personal" | "Client";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  rotate: number;
  variant?: "sticky" | "index" | "clipping" | "plain";
  badge?: string;
  type: ProjectType;
  live?: string;
  github?: string;
};

const variants: Array<Project["variant"]> = ["plain", "sticky", "index", "clipping"];
const rotates = [-2, 1.5, -1.5, 2, -1, 1];

const raw: Array<Omit<Project, "variant" | "rotate">> = [
  {
    title: "PlateGuardian",
    desc: "Secure number plate recognition system with OCR, zero-trust principles, role-based access, and per-user OCR history.",
    tags: ["Python", "Flask", "React", "OpenCV", "RSA"],
    github: "https://github.com/alsabur20/plateguardian",
    badge: "Zero Trust",
    type: "Course",
  },
  {
    title: "TrafficSignNet",
    desc: "Traffic sign classification using a CNN on the GTSRB dataset with image upload and confidence scores.",
    tags: ["Python", "Streamlit", "TensorFlow", "OpenCV"],
    github: "https://github.com/alsabur20/trafficsignnet",
    live: "https://trafficsignnet.streamlit.app/",
    type: "Course",
  },
  {
    title: "Creds",
    desc: "Debit/credit management app with authentication, dashboard, and expense splitting.",
    tags: ["Next.js", "NextAuth.js", "Prisma", "tRPC"],
    github: "https://github.com/alsabur20/Creds",
    live: "https://creds-main.vercel.app/",
    type: "Personal",
  },
  {
    title: "Triport Logistic",
    desc: "SEO-optimized portfolio and business website for a cargo and logistics service.",
    tags: ["Next.js", "SEO"],
    github: "https://github.com/alsabur20/triportlogistic",
    live: "https://www.triportlogistic.com/",
    type: "Client",
  },
  {
    title: "URL Shortener",
    desc: "Generates short URLs with click analytics and collision handling via unique database values.",
    tags: ["Next.js", "Prisma", "Neon"],
    github: "https://github.com/alsabur20/url-shortner",
    live: "https://url-shortner-alsabur20.vercel.app/",
    type: "Personal",
  },
  {
    title: "QR Generator",
    desc: "QR code generator with user authentication and user-specific data handling.",
    tags: ["Next.js", "Prisma", "Neon"],
    github: "https://github.com/alsabur20/qrgenerator",
    live: "https://qrgenerator-alsabur20.vercel.app/",
    type: "Personal",
  },
  {
    title: "Weather App",
    desc: "Fetches real-time weather data using OpenWeatherMap, ipify, and ipapi APIs.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/alsabur20/weather-app",
    live: "https://weatherapp-alsabur20.netlify.app/",
    type: "Personal",
  },
  {
    title: "Todo App",
    desc: "Responsive to-do list with filtering, adding, completing, and deleting tasks — persisted in local storage.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/alsabur20/todo-app",
    live: "https://todo-alsabur20.netlify.app/",
    type: "Personal",
  },
  {
    title: "Tic Tac Toe",
    desc: "Tic Tac Toe game with an unbeatable AI opponent using the Minimax algorithm.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/alsabur20/tic-tac-toe",
    live: "https://tic-tac-toe-alsabur20.netlify.app/",
    type: "Personal",
  },
];

const projects: Project[] = raw.map((p, i) => ({
  ...p,
  variant: variants[i % variants.length],
  rotate: rotates[i % rotates.length],
}));

export function Projects() {
  const [expanded, setExpanded] = useState(false);
  const INITIAL = 6;
  const visible = expanded ? projects : projects.slice(0, INITIAL);
  const hiddenCount = projects.length - INITIAL;

  return (
    <section id="projects" className="relative border-t border-ink/15 bg-paper-deep/40">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeader index="03" kicker="Scrapbook" title="Selected work, taped in." />

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false}>
            {visible.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 60, rotate: p.rotate * 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
                animate={{ opacity: 1, y: 0, rotate: p.rotate }}
                exit={{ opacity: 0, y: 30, rotate: p.rotate * 2, scale: 0.95 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i >= INITIAL ? (i - INITIAL) * 0.06 : (i % 3) * 0.08 }}
                whileHover={{ rotate: 0, y: -6, scale: 1.02 }}
                className={`group relative flex flex-col border border-ink/25 p-5 ${
                  p.variant === "sticky"
                    ? "bg-accent-note/70"
                    : p.variant === "index"
                      ? "bg-paper paper-lines"
                      : "bg-paper"
                }`}
              >
                {p.variant === "clipping" && (
                  <>
                    <span className="absolute -left-2 top-6 h-3 w-3 rounded-full border border-ink/30 bg-paper-deep" />
                    <span className="absolute -left-2 bottom-6 h-3 w-3 rounded-full border border-ink/30 bg-paper-deep" />
                  </>
                )}

                <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                  <span>Nº {String(i + 1).padStart(2, "0")}</span>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`-rotate-1 border px-2 py-0.5 ${
                        p.type === "Course"
                          ? "border-ink bg-accent-note text-ink"
                          : p.type === "Client"
                            ? "border-ink bg-ink text-paper"
                            : "border-ink/60 bg-paper text-ink"
                      }`}
                    >
                      {p.type}
                    </span>
                    {p.badge && (
                      <span className="rotate-2 border border-ink bg-paper px-2 py-0.5 text-ink">
                        {p.badge}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold leading-tight text-ink">
                  {p.title}
                </h3>

                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-soft">
                  {p.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <motion.span
                      key={t}
                      whileHover={{ y: -2, rotate: -2 }}
                      className="border border-ink/40 bg-paper/70 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink"
                    >
                      [ {t} ]
                    </motion.span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-ink/20 pt-4">
                  {p.live && <ProjectLink href={p.live} label="Live" primary />}
                  {p.github && <ProjectLink href={p.github} label="GitHub" />}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {hiddenCount > 0 && (
          <div className="mt-14 flex justify-center">
            <motion.button
              onClick={() => setExpanded((v) => !v)}
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-ink bg-paper px-6 py-3 font-mono text-[11px] uppercase tracking-[0.24em] text-ink"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 group-hover:scale-x-100" />
              <span className="relative z-10 transition-colors duration-500 group-hover:text-paper">
                {expanded ? "Fold pages back" : `Turn the page — ${hiddenCount} more`}
              </span>
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 transition-colors duration-500 group-hover:text-paper"
              >
                ↓
              </motion.span>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectLink({
  href,
  label,
  primary,
}: {
  href: string;
  label: string;
  primary?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className={`group/btn relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-ink px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
        primary ? "bg-ink text-paper" : "bg-paper text-ink"
      }`}
    >
      <span
        className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-500 group-hover/btn:scale-x-100 ${
          primary ? "bg-paper" : "bg-ink"
        }`}
      />
      <span
        className={`relative z-10 transition-colors duration-500 ${
          primary ? "group-hover/btn:text-ink" : "group-hover/btn:text-paper"
        }`}
      >
        {label === "GitHub" ? "↗ GitHub" : "● Live"}
      </span>
    </motion.a>
  );
}
