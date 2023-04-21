import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function SoundBtn({ keyChar, soundFile, sound }) {
  const [audio] = useState(new Audio(soundFile));
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = () => {
    audio.currentTime = 0;
    audio.play();
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 110);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === keyChar) {
        setIsPlaying(true);
        audio.currentTime = 0;
        audio.play();
        setTimeout(() => setIsPlaying(false), 110);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [audio, keyChar]);

  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  return (
    <motion.button
    variants={listItem} 
    initial='hidden'
    whileInView='show'
    onClick={handleButtonClick}
    className={`bg-gray-100 h-24 w-24 lg:h-32 lg:w-32 flex justify-center items-center rounded-lg transform transition-transform duration-150 focus:outline-none ${
        isPlaying ? 'scale-95 shadow-lg shadow-red-500 bg-red-200' : ''
      }`}>
      <div className="flex flex-col">
        <div className="hidden lg:block text-4xl font-mono font-extrabold">{keyChar}</div>
        <div className="font-mono pt-4">{sound}</div>
      </div>
    </motion.button>
  );
}

export default SoundBtn;
