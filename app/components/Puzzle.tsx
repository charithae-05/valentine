"use client";

export default function Puzzle({
  onDone,
}: {
  onDone?: () => void;
}) {
  const handleClick = () => {
    onDone?.();
  };

  return (
    <div className="flex gap-8 text-4xl mt-6">
      {["🏋️", "🍽️", "🌧️"].map((icon) => (
        <button
          key={icon}
          onClick={handleClick}
          className="transition-transform active:scale-90"
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
