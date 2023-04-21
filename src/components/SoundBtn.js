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
        setTimeout(() => setIsPlaying(false), 110);
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





{/* <div className="relative group h-24 w-24 lg:h-32 lg:w-32">

<div className="animate-tilt transition group-hover:duration-200 duration-500 group-hover:opacity-100 opacity-75 absolute rounded-lg -inset-0.5 bg-gradient-to-r from-red-900 via-red-700 to-red-500 filter blur"></div>
<button 
onClick={handleButtonClick}
className={`relative h-24 w-24 lg:h-32 lg:w-32 flex items-center justify-center leading-none bg-black rounded-lg focus:outline-none
transform transition-transform duration-150 ${isPlaying ? "scale-95 " : ""}`}>
  


  <div className="flex flex-col text-gray-300">
    <div className="hidden lg:block text-4xl font-mono font-extrabold">
    {keyChar}
    </div>
    <div className="font-mono pt-4">{sound}</div>
  </div>
</button>
</div> */}