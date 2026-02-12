"use client";

import { motion } from "framer-motion";

export default function ProgressDots({
  current,
  total = 7,
}: {
  current: number;
  total?: number;
}) {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
      {Array.from({ length: total }, (_, i) => (
        <motion.div
          key={i}
          className="rounded-full transition-all duration-300"
          style={{
            width: current === i ? "24px" : "8px",
            height: "8px",
            background:
              current === i
                ? "linear-gradient(135deg, #FFB5C2, #D4A5D9)"
                : "rgba(255, 255, 255, 0.4)",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.1 }}
        />
      ))}
    </div>
  );
}

