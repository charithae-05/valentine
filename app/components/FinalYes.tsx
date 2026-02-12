"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function FinalYes() {
  const [yesClicked, setYesClicked] = useState(false);
  const [yesScale, setYesScale] = useState(1);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [tries, setTries] = useState(0);
  const [yesWiggle, setYesWiggle] = useState(false);

  const moveNo = () => {
    const x = Math.random() * 120 - 60;
    const y = Math.random() * 80 - 40;

    setNoPos({ x, y });
    setYesScale((s) => Math.min(s + 0.15, 2));
    setTries((t) => t + 1);

    // Trigger YES button wiggle
    setYesWiggle(true);
    setTimeout(() => setYesWiggle(false), 500);
  };

  const celebrate = () => {
    setYesClicked(true);

    // Multiple confetti bursts for dramatic effect
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      colors: ["#FFB5C2", "#E8B4B8", "#D4A5D9", "#FF9AA2", "#C6B7D9"]
    };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: NodeJS.Timeout = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Burst from left
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });

      // Burst from right
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    // Heart emoji confetti
    setTimeout(() => {
      confetti({
        particleCount: 30,
        spread: 100,
        origin: { y: 0.6 },
        shapes: ['circle'],
        colors: ["#FFB5C2", "#FF9AA2"],
        scalar: 2,
      });
    }, 200);
  };

  if (yesClicked) {
    return (
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I already knew your answer… <br />I just wanted to ask you my way 💕
        </motion.p>

        <motion.p
          className="mt-4 text-sm opacity-70"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Thank you for being my calm, my laughter,
          <br />
          and my favourite place to be.
        </motion.p>

        <motion.div
          className="mt-6 text-4xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          💕
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="relative mt-8 h-auto w-full flex flex-col items-center justify-center">
      <p className="text-sm opacity-70 mb-10">Be honest 😌</p>

      <div className="relative flex items-center justify-center gap-6 w-full">
        {/* YES BUTTON */}
        <motion.button
          onClick={celebrate}
          style={{
            background: "linear-gradient(135deg, #FFB5C2, #D4A5D9)",
          }}
          className="px-10 py-4 rounded-full text-white font-bold text-lg shadow-xl"
          animate={{
            scale: yesScale,
            boxShadow: tries >= 2
              ? [
                  "0 4px 20px rgba(255, 181, 194, 0.6)",
                  "0 8px 40px rgba(212, 165, 217, 0.8)",
                  "0 4px 20px rgba(255, 181, 194, 0.6)",
                ]
              : "0 4px 20px rgba(255, 181, 194, 0.4)",
            rotate: yesWiggle ? [0, -8, 8, -8, 8, 0] : 0,
          }}
          transition={{
            scale: { type: "spring", stiffness: 300, damping: 20 },
            boxShadow: {
              duration: 1,
              repeat: tries >= 2 ? Infinity : 0,
            },
            rotate: {
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: yesScale * 1.05 }}
          whileTap={{ scale: yesScale * 0.95 }}
        >
          YES 💖
        </motion.button>


        {/* NO BUTTON */}
        <motion.button
          onMouseEnter={moveNo}
          onTouchStart={moveNo}
          onClick={moveNo}
          animate={{
            x: noPos.x,
            y: noPos.y,
            scale: tries >= 3 ? 0.75 : 1,
            opacity: tries >= 3 ? 0.5 : 1,
          }}
          transition={{
            x: { type: "spring", stiffness: 500, damping: 30 },
            y: { type: "spring", stiffness: 500, damping: 30 },
            scale: { type: "spring", stiffness: 500, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          className="px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md cursor-pointer"
        >
          no 🙃
        </motion.button>
      </div>

      {tries > 0 && (
        <p className="absolute left-1.5 -bottom-14.5 text-xs opacity-60">
          hehe… not that one 😌
        </p>
      )}

      {tries >= 3 && (
        <p className="absolute -bottom-12.5 right-1.5 text-xs opacity-50">
          okay okay, I get it 😄
        </p>
      )}
    </div>
  );
}
