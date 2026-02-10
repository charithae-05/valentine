"use client";

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
    <div className="flex flex-col gap-3 mt-6 w-full max-w-xs">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onNext?.()}
         className="px-5 py-3 rounded-xl bg-white/60 active:scale-95 transition text-body"

        >
          {opt}
        </button>
      ))}
    </div>
  );
}
