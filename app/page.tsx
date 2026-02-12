"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Screen from "./components/Screen";
import MusicGate from "./components/MusicGate";
import Puzzle from "./components/Puzzle";
import Question from "./components/Question";
import TypingDots from "./components/TypingDots";
import FinalYes from "./components/FinalYes";
import AudioPlayer from "./components/AudioPlayer";
import FloatingHearts from "./components/FloatingHearts";
import ProgressDots from "./components/ProgressDots";
import Particles from "@/components/Particles";

export default function Home() {
  const [step, setStep] = useState(0);
  const [playMusic, setPlayMusic] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Particles background - deepest layer */}
      <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <Particles
          particleCount={3000}
          particleSpread={10}
          speed={0.1}
          particleColors={["#ffffff"]}
          moveParticlesOnHover
          particleHoverFactor={1}
          alphaParticles={false}
          particleBaseSize={160}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
          className=""
        />
      </div>

      {/* Floating hearts - middle layer */}
      <FloatingHearts />

      <AudioPlayer play={playMusic} />
      <ProgressDots current={step} total={7} />

      <AnimatePresence mode="wait">
        {/* SCREEN 0 — Entry */}
        {step === 0 && (
          <Screen key="screen-0">
            <p className="text-hero mt-[-3vh] py-4" style={{ color: '#1a1a1a' }}>
              Hey you… <br />
              I made something small for you 💭
            </p>
            <MusicGate
              onStart={() => {
                setPlayMusic(true);
                setStep(1);
              }}
            />
          </Screen>
        )}

        {/* SCREEN 1 — Beginning */}
        {step === 1 && (
          <Screen key="screen-1">
            <p className="text-hero soft-glow">
              It started in a place full of weights… <br />
              but somehow, you made everything feel lighter.
            </p>

            <p className="mt-6 text-subtle italic">
              ನಿನ್ನ ಬಗ್ಗೆ ಯೋಚಿಸಿದಾಗ ನಗು ತಾನೇ ಬರುತ್ತದೆ.
            </p>

            <button
              onClick={() => setStep(2)}
              className="mt-8 px-6 py-3 rounded-full bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-all duration-300 button-glow"
            >
              Tap to continue ❤️
            </button>
          </Screen>
        )}

        {/* SCREEN 2 — Puzzle */}
        {step === 2 && (
          <Screen key="screen-2">
            <p className="text-body mt-[-2vh]">
              Tap the one that turned into everything else.
            </p>
            <Puzzle onDone={() => setStep(3)} />
          </Screen>
        )}

        {/* SCREEN 3 — Emotional Core */}
        {step === 3 && (
          <Screen key="screen-3">
            <p className="text-body mt-[-2vh]">
              Different dishes. <br />
              Long rides with no destination. <br />
              Endless conversations that never felt enough.
            </p>

            <p className="mt-6 text-body">
              Rain that slowed time down. <br />
              And moments with your family… <br />
              where I quietly felt like I belonged.
            </p>

            <p className="mt-8 text-subtle italic">
              ನಿನ್ನ ಜೊತೆ ಇದ್ದಾಗ ಮನಸ್ಸಿಗೆ ಶಾಂತಿ ಸಿಗುತ್ತದೆ.
            </p>

            <button
              onClick={() => setStep(4)}
              className="mt-8 px-6 py-3 rounded-full bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-all duration-300"
            >
              Continue 😌
            </button>
          </Screen>
        )}

        {/* SCREEN 4 — Fun Question */}
        {step === 4 && (
          <Screen key="screen-4">
            <p className="text-body mt-[-2vh]">
              Quick question 😌 <br />
              What do you enjoy the most with me?
            </p>
            <Question onNext={() => setStep(5)} />
          </Screen>
        )}

        {/* SCREEN 5 — Pause */}
        {step === 5 && (
          <Screen key="screen-5">
            <p className="text-body mt-[-2vh]">
              There’s something I’ve been meaning to ask you…
            </p>
            <TypingDots />

            <button
              onClick={() => setStep(6)}
              className="mt-8 px-6 py-3 rounded-full bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-all duration-300"
            >
              Tap to continue 💭
            </button>
          </Screen>
        )}

        {/* SCREEN 6 — Final */}
        {step === 6 && (
          <Screen key="screen-6">
            <h2 className="text-hero font-semibold mt-[-4vh]" style={{ color: '#1a1a1a' }}>
              Will you be my Valentine? ❤️
            </h2>

            <p className="mt-4 text-subtle italic" style={{ color: '#2a2a2a', opacity: 1 }}>
              ಈ ವಾಲೆಂಟೈನ್ ನಿನ್ನ ಜೊತೆಗೆ ಕಳೆಯಬಹುದಾ?
            </p>

            <FinalYes />
          </Screen>
        )}
      </AnimatePresence>
    </div>
  );
}
