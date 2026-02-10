"use client";

import { useState } from "react";
import confetti from "canvas-confetti";

export default function FinalYes() {
  const [yesClicked, setYesClicked] = useState(false);
  const [yesScale, setYesScale] = useState(1);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [tries, setTries] = useState(0);

  const moveNo = () => {
    const x = Math.random() * 120 - 60;
    const y = Math.random() * 80 - 40;

    setNoPos({ x, y });
    setYesScale((s) => Math.min(s + 0.12, 1.7));
    setTries((t) => t + 1);
  };

  const celebrate = () => {
    setYesClicked(true);
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#E6DFF1", "#C6B7D9", "#DCE8E1"],
    });
  };

  if (yesClicked) {
    return (
      <div className="mt-6 text-center">
        <p className="text-lg leading-relaxed">
          I already knew your answer… <br />
          I just wanted to ask you my way 💕
        </p>

        <p className="mt-4 text-sm opacity-70">
          Thank you for being my calm, my laughter,
          <br />
          and my favourite place to be.
        </p>
      </div>
    );
  }

  return (
    <div className="relative mt-8 h-auto w-full flex flex-col items-center justify-center">
      <p className="text-sm opacity-70 mb-6">
        Be honest 😌
      </p>

      <div className="relative flex items-center justify-center gap-6 w-full">
        {/* YES BUTTON */}
        <button
          onClick={celebrate}
         style={{
  transform: `scale(${yesScale})`,
  animation: tries >= 2 ? "pulse 1.2s infinite" : "none",
}}

          className="px-7 py-8 rounded-full bg-[var(--sage)]  transition-transform duration-300"

        >
          YES 💖
        </button>

        {/* NO BUTTON */}
        <button
          onPointerEnter={moveNo}
          onTouchStart={moveNo}
          style={{
            transform: `translate(${noPos.x}px, ${noPos.y}px) scale(${
              tries >= 3 ? 0.75 : 1
            })`,
            opacity: tries >= 3 ? 0.5 : 1,
          }}
         className="px-5 py-3 rounded-full bg-white/70 transition-all duration-300"

        >
          no 🙃
        </button>
      </div>

      {tries > 0 && (
        <p className="absolute bottom-[-120px] text-xs opacity-60">
          hehe… not that one 😌
        </p>
      )}

      {tries >= 3 && (
        <p className="absolute bottom-[-50px] right-[6px] text-xs opacity-50">
          okay okay, I get it 😄
        </p>
      )}
    </div>
  );
}
