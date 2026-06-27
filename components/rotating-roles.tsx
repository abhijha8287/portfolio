"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function RotatingRoles({ roles, interval = 2600 }: { roles: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, interval);
    return () => clearInterval(id);
  }, [roles.length, interval]);

  return (
    <div className="relative flex h-9 items-center justify-center overflow-hidden sm:h-11">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 24, opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -24, opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="absolute inline-flex items-center gap-2 text-xl font-medium text-gradient sm:text-2xl md:text-3xl"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan shadow-[0_0_10px_var(--neon-cyan)]" />
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
