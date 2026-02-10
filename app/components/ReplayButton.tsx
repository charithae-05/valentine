"use client";

export default function ReplayButton() {
  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      className="mt-8 text-sm opacity-60 active:scale-95 transition"
    >
      Replay from beginning ↺
    </button>
  );
}
