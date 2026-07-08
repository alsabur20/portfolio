import { motion } from "framer-motion";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-ink/15 bg-paper-deep/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-40">
        <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-soft">
          <span>05</span>
          <span className="h-px w-8 bg-ink-soft" />
          <span>Colophon</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl font-black leading-[0.9] tracking-tight text-ink md:text-[140px]"
        >
          Let's connect.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              label: "Email",
              value: "alsabur20@gmail.com",
              href: "mailto:alsabur20@gmail.com",
            },
            { label: "Location", value: "Lahore, Pakistan" },
            {
              label: "GitHub",
              value: "@alsabur20",
              href: "https://github.com/alsabur20",
            },
            {
              label: "LinkedIn",
              value: "in/alsabur20",
              href: "https://linkedin.com/in/alsabur20",
            },
          ].map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href ?? "#"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ x: 6 }}
              className="group flex items-baseline justify-between border-b border-ink/25 py-5"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-soft">
                {c.label}
              </span>
              <span className="font-display text-2xl font-bold text-ink md:text-3xl">
                <span className="ink-underline pb-0.5">{c.value}</span>
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-2">
                  →
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink/25 bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-8 text-center font-mono text-[10px] uppercase tracking-[0.24em] text-ink-soft md:px-8">
        © {new Date().getFullYear()} Abdul Sabur — All rights, and wrongs,
        reserved.
      </div>
    </footer>
  );
}
