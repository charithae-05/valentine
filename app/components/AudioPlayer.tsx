"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AudioPlayer({
  play,
}: {
  play: boolean;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (play) {
      audioRef.current
        .play()
        .catch(() => {
          // Safari may block first attempt, ignore
        });
    }
  }, [play]);

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {/* Audio indicator - shows when music is playing */}
      {play && (
        <motion.div
          className="fixed top-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg"
          style={{ zIndex: 100 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="flex gap-1 items-end"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Animated music bars */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-t from-pink-400 to-purple-400 rounded-full"
                animate={{
                  height: ["8px", "16px", "8px"],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
          <span className="text-xs font-medium text-gray-700">Music playing</span>
        </motion.div>
      )}
    </>
  );
}
