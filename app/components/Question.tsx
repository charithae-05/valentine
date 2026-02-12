"use client";

import { motion } from "framer-motion";

export default function Question({
  onNext,
}: {
  onNext?: () => void;
}) {
  const options = [
    "Food dates 🍜",
    "Long rides 🚗",
    "Endless talking 💬",
    "All of the above ❤️",
  ];

  return (
    <div className="flex flex-col gap-3 mt-8 w-full max-w-xs">
      {options.map((opt, index) => (
        <motion.button
          key={opt}
          onClick={() => onNext?.()}
          className="px-6 py-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60 text-body font-medium shadow-md hover:shadow-lg transition-all duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{
            scale: 1.03,
            backgroundColor: "rgba(255, 181, 194, 0.3)",
            borderColor: "rgba(255, 181, 194, 0.8)",
          }}
          whileTap={{ scale: 0.97 }}
        >
          {opt}
        </motion.button>
      ))}
    </div>
  );
}
