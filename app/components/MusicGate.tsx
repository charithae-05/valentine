"use client";

import { motion } from "framer-motion";

export default function MusicGate({
  onStart,
}: {
  onStart: () => void;
}) {
  return (
    <motion.button
      onClick={onStart}
      className="mt-8 px-8 py-4 rounded-full text-white/90 font-semibold text-lg shadow-xl"
      style={{
        background: "linear-gradient(135deg, #FFB5C2, #D4A5D9)",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0 4px 20px rgba(255, 181, 194, 0.4)",
          "0 8px 30px rgba(212, 165, 217, 0.6)",
          "0 4px 20px rgba(255, 181, 194, 0.4)",
        ],
      }}
      transition={{
        boxShadow: {
          duration: 2,
          repeat: Infinity,
        },
      }}
    >
      Tap to begin 🎵
    </motion.button>
  );
}
