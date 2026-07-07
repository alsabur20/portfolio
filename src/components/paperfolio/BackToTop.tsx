import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 20, rotate: -8 }}
          animate={{ opacity: 1, y: 0, rotate: -4 }}
          exit={{ opacity: 0, y: 20, rotate: -8 }}
          whileHover={{ y: -4, rotate: 0 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-ink bg-paper px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink shadow-[4px_4px_0_0_var(--color-ink)] transition-colors hover:bg-ink hover:text-paper"
        >
          <ArrowUp
            size={14}
            className="transition-transform group-hover:-translate-y-0.5"
          />
          <span className="hidden sm:inline">Top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
