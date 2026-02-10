"use client";

import { motion } from "framer-motion";

export default function TypingDots() {
  return (
    <motion.div
      className="text-xl mt-4 opacity-70"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ repeat: Infinity, duration: 1.2 }}
    >
      ...
    </motion.div>
  );
}
