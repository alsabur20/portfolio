import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";


const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const update = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);


  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-ink/15 bg-paper/85 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <motion.span
            whileHover={{ rotate: -8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="relative flex h-8 w-8 items-center justify-center"
            aria-hidden
          >
            <svg viewBox="0 0 40 40" className="h-8 w-8 -rotate-6">
              <rect
                x="3"
                y="3"
                width="34"
                height="34"
                rx="3"
                className="fill-ink"
              />
              <text
                x="50%"
                y="54%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-paper"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 18,
                  letterSpacing: "-0.04em",
                }}
              >
                as
              </text>
              <circle cx="32" cy="32" r="2" className="fill-accent-note" />
            </svg>
          </motion.span>
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            Abdul Sabur<span className="text-ink-soft">.</span>
          </span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  className="group relative font-mono text-[11px] uppercase tracking-[0.18em] text-ink"
                >
                  {l.label}
                  <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-ink transition-transform duration-300 group-hover:scale-x-100" />
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full bg-ink"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full border border-ink px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-paper md:inline-block"
          >
            Say hi
          </a>
        </div>
      </div>

    </motion.nav>
  );
}
