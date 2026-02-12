"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Array<{
    id: number;
    left: string;
    size: number;
    delay: number;
    duration: number;
    opacity: number;
    emoji: string;
  }>>([]);

  // Generate hearts only on client side to avoid hydration mismatch
  useEffect(() => {
    setHearts(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 25 + 20, // 20-45px (bigger)
        delay: Math.random() * 3, // 0-3s (faster start)
        duration: Math.random() * 8 + 12, // 12-20s (faster animation)
        opacity: Math.random() * 0.4 + 0.3, // 0.3-0.7 (more visible)
        emoji: [ "🌸"][Math.floor(Math.random() * 1)],
      }))
    );
  }, []);

  // Don't render anything until hearts are generated on client
  if (hearts.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: heart.left,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            top: 0, // Start from top for immediate visibility
          }}
          animate={{
            y: ["0vh", "100vh"], // Float downward instead
            rotate: 360,
            x: [0, 30, -30, 0], // Gentle sway
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
            x: {
              duration: heart.duration / 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {heart.emoji}
        </motion.div>
      ))}
    </div>
  );
}

