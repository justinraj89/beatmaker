import { useState, useEffect } from "react";

function SoundBtn({ keyChar, soundFile, sound, shadowId }) {
  const [audio] = useState(new Audio(soundFile));
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = () => {
    setIsPlaying(true);
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => setIsPlaying(false), 110);
  };

  //Logic for assigning keys to the keyChar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === keyChar) {
        setIsPlaying(true);
        audio.currentTime = 0;
        audio.play();
        setTimeout(() => setIsPlaying(false), 120);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [audio, keyChar]);

  return (
    <button
      onClick={handleButtonClick}
      className={` bg-slate-100  h-24 w-24 lg:h-32 lg:w-32 flex justify-center items-center rounded-lg transform transition-transform duration-150 focus:outline-none ${
        isPlaying ? `scale-95 shadow-lg ${shadowId} ` : ""
      }`}
    >
      <div className="flex flex-col text-slate-900">
        <div className="hidden lg:block text-4xl font-mono font-extrabold">
          {keyChar}
        </div>
        <div className="font-mono pt-4">{sound}</div>
      </div>
    </button>
  );
}

export default SoundBtn;
