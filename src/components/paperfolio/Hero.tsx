import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import character from "@/assets/dev-character.png";

const sentence =
  "A fresh Computer Science graduate who enjoys turning ideas into clean, functional web apps — curious, detail-driven, and always shipping something new across the stack.";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const tiltX = useTransform(sy, [-1, 1], [4, -4]);
  const tiltY = useTransform(sx, [-1, 1], [-6, 6]);
  const floatX = useTransform(sx, [-1, 1], [-14, 14]);
  const floatY = useTransform(sy, [-1, 1], [-10, 10]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const words = sentence.split(" ");

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 pt-14 pb-24 md:grid-cols-12 md:px-8 md:pt-24 md:pb-32">
        {/* left */}
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-soft"
          >
            <span className="h-px w-8 bg-ink" />
            Issue Nº 01 — Portfolio 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[15vw] leading-[0.88] font-black tracking-tight text-ink md:text-[112px]"
          >
            Abdul
            <br />
            <span className="relative inline-block">
              Sabur.
              <motion.svg
                viewBox="0 0 300 20"
                className="pointer-events-none absolute -bottom-3 left-0 h-4 w-full"
                initial="hidden"
                animate="visible"
              >
                <motion.path
                  d="M2 12 C 60 2, 140 20, 296 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-ink"
                  variants={{
                    hidden: { pathLength: 0 },
                    visible: {
                      pathLength: 1,
                      transition: { duration: 1.4, delay: 0.6 },
                    },
                  }}
                />
              </motion.svg>
            </span>
          </motion.h1>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
            <span>Software Engineer</span>
            <span className="h-1 w-1 rounded-full bg-ink-soft" />
            <span>Fresh Graduate</span>
            <span className="h-1 w-1 rounded-full bg-ink-soft" />
            <span>Lahore, PK</span>
          </div>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.03, duration: 0.4 }}
                className="inline-block"
              >
                {w}&nbsp;
              </motion.span>
            ))}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <PaperButton primary href="/AbdulSaburResume.pdf" download>
              Read CV
            </PaperButton>
            <PaperButton href="#projects">View Projects</PaperButton>
          </div>
        </div>

        {/* right — character */}
        <div className="relative md:col-span-5">
          <motion.div
            style={{ rotateX: tiltX, rotateY: tiltY, x: floatX, y: floatY }}
            className="relative mx-auto max-w-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="tape relative rounded-sm border border-ink/20 bg-paper p-5"
            >
              <motion.img
                src={character}
                alt="Cartoon developer sitting on stacked books with laptop"
                width={900}
                height={900}
                className="mx-auto w-full max-w-[320px] dark:invert dark:hue-rotate-180"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                <span>Fig. 01</span>
                <span>— The Developer</span>
              </div>
            </motion.div>

            {/* sticky notes around */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 8 }}
              animate={{ opacity: 1, y: 0, rotate: 6 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ rotate: 2, scale: 1.05 }}
              className="absolute -right-2 top-4 hidden w-32 border border-ink/15 bg-accent-note px-3 py-2 font-mono text-[10px] leading-snug text-ink md:block"
            >
              currently ↴<br />
              open to opportunities
            </motion.div>
            <motion.div
              animate={{ rotate: [-4, -2, -4], y: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 bottom-16 hidden rounded-sm border border-ink/15 bg-paper-deep px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-ink md:block"
            >
              ☕ + code
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* editorial sliding marquee */}
      <div className="relative overflow-hidden border-y border-ink/20 bg-paper-deep/60 py-3">
        <motion.div
          className="flex shrink-0 gap-10 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.3em] text-ink-soft"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 2 }).map((_, group) => (
            <div key={group} className="flex shrink-0 items-center gap-10">
              {[
                "Chapter 01",
                "★",
                "A folio of small experiments",
                "✦",
                "Est. 2024",
                "✎",
                "Software Engineer",
                "★",
                "Fresh Graduate",
                "✦",
                "Lahore, PK",
                "✎",
                "Currently shipping",
                "★",
              ].map((t, i) => (
                <span key={`${group}-${i}`} className="shrink-0">
                  {t}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PaperButton({
  children,
  primary,
  href = "#",
  download,
  newTab,
}: {
  children: React.ReactNode;
  primary?: boolean;
  href?: string;
  download?: boolean;
  newTab?: boolean;
}) {
  return (
    <motion.a
      href={href}
      download={download}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      whileHover={{ y: -3 }}
      whileTap={{ y: 0 }}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
        primary ? "bg-ink text-paper" : "bg-paper text-ink"
      }`}
    >
      <span
        className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${
          primary ? "bg-paper" : "bg-ink"
        }`}
      />
      <span
        className={`relative z-10 transition-colors duration-500 ${
          primary ? "group-hover:text-ink" : "group-hover:text-paper"
        }`}
      >
        {children}
      </span>
      <span
        className={`relative z-10 transition-colors duration-500 ${
          primary ? "group-hover:text-ink" : "group-hover:text-paper"
        }`}
      >
        →
      </span>
    </motion.a>
  );
}
