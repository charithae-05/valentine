"use client";

export default function MusicGate({
  onStart,
}: {
  onStart: () => void;
}) {
  return (
    <button
      onClick={onStart}
      className="mt-6 px-6 py-3 rounded-full bg-[var(--violet)] text-white active:scale-95 transition"
    >
      Tap to begin 🎧
    </button>
  );
}
