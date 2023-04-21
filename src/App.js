import { useState, useEffect } from "react";
import SoundBtn from "./components/SoundBtn";
import Footer from "./components/Footer";
import { SoundData } from "./utils/SoundData";

function App() {
  const [audioState, setAudioState] = useState({ audio: null, playing: false });

  useEffect(() => {
    const audio = new Audio("/sounds/gameovernodrums.wav");
    audio.loop = true;
    setAudioState({ audio: audio, playing: false });

    return () => {
      audio.pause();
    };
  }, []);

  const toggleAudio = () => {
    const { audio, playing } = audioState;
    if (playing) {
      audio.pause();
      setAudioState({ audio: audio, playing: false });
    } else {
      audio.play();
      setAudioState({ audio: audio, playing: true });
    }
  };

  return (
    <main className="flex flex-col items-center pt-20 lg:pt-40 h-screen bg-stone-950">
      <h1 className="text-slate-100 pb-12 lg:pb-4 text-4xl lg:text-7xl font-mono">
        make a beat 🥁
      </h1>
      <h2 className="hidden lg:block text-gray-100 font-mono pb-8 text-2xl">
        Press the keys on your keyboard
      </h2>

      <div className="flex flex-wrap items-center justify-center lg:flex gap-4 lg:gap-3">
        {SoundData.map((sound) => (
          <SoundBtn
            keyChar={sound.keyChar}
            soundFile={sound.soundFile}
            sound={sound.soundDesc}
            shadowId={sound.shadowId}
            key={sound.id}
          />
        ))}
      </div>
      <button
        className={`text-white font-mono mt-8 p-3 text-lg rounded-lg focus:outline-none bg-gradient-to-r from-blue-400 to-blue-500`}
        onClick={toggleAudio}
      >
        {audioState.playing ? "Pause" : "Play a melody?"}
      </button>
      <Footer />
    </main>
  );
}

export default App;
