"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Puzzle({
  onDone,
}: {
  onDone?: () => void;
}) {
  const [shaking, setShaking] = useState<string | null>(null);

  const handleClick = (icon: string) => {
    // Only gym emoji is correct
    if (icon === "🏋️") {
      onDone?.();
    } else {
      // Shake the wrong answer
      setShaking(icon);
      setTimeout(() => setShaking(null), 500);
    }
  };

  const emojis = [
    { icon: "🍽️", label: "food" },
    { icon: "🌈", label: "rainbow" },
    { icon: "🏋️", label: "gym" },
     { icon: "🛵", label: "bike rides" },
    { icon: "📱", label: "messaging/calls" },
    { icon: "🎬", label: "movies" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 text-5xl mt-8 max-w-xs mx-auto">
      {emojis.map(({ icon, label }) => (
        <motion.button
          key={icon}
          onClick={() => handleClick(icon)}
          className="relative transition-all duration-200 hover:scale-110 active:scale-95"
          animate={{
            x: shaking === icon ? [0, -10, 10, -10, 10, 0] : 0,
            rotate: shaking === icon ? [0, -5, 5, -5, 5, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: label === "gym" ? 0 : label === "food" ? 0.3 : 0.6,
            }}
          >
            {icon}
          </motion.div>

          {/* Hint glow for correct answer */}
          {icon === "🏋️" && (
            <motion.div
              className="absolute inset-0 rounded-full blur-xl opacity-30"
              style={{ background: "linear-gradient(135deg, #FFB5C2, #D4A5D9)" }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}
