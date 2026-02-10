"use client";

import { useState } from "react";
import Screen from "./components/Screen";
import MusicGate from "./components/MusicGate";
import Puzzle from "./components/Puzzle";
import Question from "./components/Question";
import TypingDots from "./components/TypingDots";
import FinalYes from "./components/FinalYes";
import AudioPlayer from "./components/AudioPlayer";


export default function Home() {
 const [step, setStep] = useState(0);
const [playMusic, setPlayMusic] = useState(false);


  return (
    <>
      <AudioPlayer play={playMusic} />
      {/* SCREEN 0 — Entry */}
      {step === 0 && (
        <Screen>
         <p className="text-hero mt-[-10vh]">
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
        <Screen>
        <p className="text-hero">
            It started in a place full of weights… <br />
            but somehow, you made everything feel lighter.
          </p>

        <p className="mt-4 text-subtle italic">

            ನಿನ್ನ ಬಗ್ಗೆ ಯೋಚಿಸಿದಾಗ ನಗು ತಾನೇ ಬರುತ್ತದೆ.
          </p>

          <button
            onClick={() => setStep(2)}
            className="mt-8 text-subtle"
          >
            Tap to continue ❤️
          </button>
        </Screen>
      )}

      {/* SCREEN 2 — Puzzle */}
      {step === 2 && (
        <Screen>
          <p className="text-body mt-[-6vh]">

            Tap the one that turned into everything else.
          </p>
          <Puzzle onDone={() => setStep(3)} />
        </Screen>
      )}

      {/* SCREEN 3 — Emotional Core */}
      {step === 3 && (
        <Screen>
         <p className="text-body mt-[-8vh]">

            Different dishes. <br />
            Long rides with no destination. <br />
            Endless conversations that never felt enough.
          </p>

        <p className="mt-4 text-body">

            Rain that slowed time down. <br />
            And moments with your family… <br />
            where I quietly felt like I belonged.
          </p>

         <p className="mt-8 text-subtle italic">

            ನಿನ್ನ ಜೊತೆ ಇದ್ದಾಗ ಮನಸ್ಸಿಗೆ ಶಾಂತಿ ಸಿಗುತ್ತದೆ.
          </p>

          <button
            onClick={() => setStep(4)}
            className="mt-6 text-sm opacity-60"
          >
            Continue 😌
          </button>
        </Screen>
      )}

      {/* SCREEN 4 — Fun Question */}
      {step === 4 && (
        <Screen>
        <p className="text-body mt-[-6vh]">

            Quick question 😌 <br />
            What do you enjoy the most with me?
          </p>
          <Question onNext={() => setStep(5)} />
        </Screen>
      )}

      {/* SCREEN 5 — Pause */}
      {step === 5 && (
        <Screen>
        <p className="text-body mt-[-6vh]">

            There’s something I’ve been meaning to ask you…
          </p>
          <TypingDots />

          <button
            onClick={() => setStep(6)}
            className="mt-6 text-sm opacity-60"
          >
            Tap to continue 💭
          </button>
        </Screen>
      )}

      {/* SCREEN 6 — Final */}
      {step === 6 && (
        <Screen>
        <h2 className="text-hero font-semibold mt-[-6vh]">

            Will you be my Valentine? ❤️
          </h2>

        <p className="mt-3 text-subtle italic">

            ಈ ವಾಲೆಂಟೈನ್ ನಿನ್ನ ಜೊತೆಗೆ ಕಳೆಯಬಹುದಾ?
          </p>

          <FinalYes />
        </Screen>
      )}
    </>
  );
}
