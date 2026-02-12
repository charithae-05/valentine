"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Question({
  onNext,
}: {
  onNext?: () => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    "Endless talking 💬",
    "Food dates 🍜",
    "Long rides 🚗",
    "Working out 🏋️",
    "Movies 🎬",
    "All of the above ❤️",
  ];

  const handleSelect = (option: string) => {
    setSelected(option);

    // Wait for reaction to show, then proceed
    setTimeout(() => {
      onNext?.();
    }, 4600);
  };

  const isAllOfAbove = selected === "All of the above ❤️";
  const reactionText = isAllOfAbove
    ? "I knew it! 😌💕"
    : "That's sweet… but I know you love all of them 😏";

  return (
    <div className="flex flex-col gap-3 mt-8 w-full max-w-xs">
      <AnimatePresence mode="wait">
        {!selected ? (
          <motion.div
            key="options"
            className="flex flex-col gap-3"
            exit={{ opacity: 0, scale: 0.95 }}
          >
            {options.map((opt, index) => (
              <motion.button
                key={opt}
                onClick={() => handleSelect(opt)}
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
          </motion.div>
        ) : (
          <motion.div
            key="reaction"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <motion.p
              className="text-lg font-medium"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 0.5,
                repeat: 2,
              }}
            >
              {reactionText}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
