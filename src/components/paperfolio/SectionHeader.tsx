import { motion } from "framer-motion";

export function SectionHeader({
  index,
  kicker,
  title,
}: {
  index: string;
  kicker: string;
  title: string;
}) {
  return (
    <div className="mb-12 flex flex-col gap-3 border-b border-ink/25 pb-6 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-soft">
          <span>{index}</span>
          <span className="h-px w-8 bg-ink-soft" />
          <span>{kicker}</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-black leading-[0.95] tracking-tight text-ink md:text-7xl"
        >
          {title}
        </motion.h2>
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-soft">
        pg. {index}
      </div>
    </div>
  );
}
