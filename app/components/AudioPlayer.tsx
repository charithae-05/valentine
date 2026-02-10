"use client";

import { useEffect, useRef } from "react";

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
    <audio ref={audioRef} loop preload="auto">
      <source src="/music.mp3" type="audio/mpeg" />
    </audio>
  );
}
