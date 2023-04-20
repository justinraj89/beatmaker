import { useState, useEffect } from "react";

function SoundBtn({ keyChar, soundFile, sound }) {
  const [audio] = useState(new Audio(soundFile));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === keyChar) {
        audio.currentTime = 0;
        audio.play();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [audio, keyChar]);

  return (
    <button className="border-2 border-black h-24 w-24 lg:h-32 lg:w-32  justify-center items-center rounded-lg">
      <div>

      </div>
    </button>
  );
}

export default SoundBtn;
