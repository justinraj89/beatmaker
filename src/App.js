import SoundBtn from "./components/SoundBtn";
import { useState, useEffect } from "react";

function App() {
  return (
    <main className='flex flex-col justify-center items-center h-screen'>
      <div className="grid grid-cols-3 lg:flex gap-2">
        <SoundBtn keyChar='a' soundFile='/sounds/boom.wav' sound='kick drum'/>
        <SoundBtn keyChar='s' soundFile='/sounds/boom.wav' />
        <SoundBtn keyChar='d' soundFile='/sounds/boom.wav' />
        <SoundBtn keyChar='f' soundFile='/sounds/boom.wav' />
        <SoundBtn keyChar='g' soundFile='/sounds/boom.wav' />
        <SoundBtn keyChar='h' soundFile='/sounds/boom.wav' />
        <SoundBtn keyChar='j' soundFile='/sounds/boom.wav' />
        <SoundBtn keyChar='k' soundFile='/sounds/boom.wav' />
        <SoundBtn keyChar='l' soundFile='/sounds/boom.wav' />
      </div>
    </main>
  );
}

export default App;
