import SoundBtn from "./components/SoundBtn";
import Footer from "./components/Footer";

function App() {

  return (
    <main className="flex flex-col items-center pt-20 lg:pt-40 h-screen bg-stone-950">
      <h1 className="text-slate-100 pb-12 lg:pb-4 text-4xl lg:text-7xl font-mono">
        make a beat 🥁
      </h1>
      <h2 className="hidden lg:block text-gray-100 font-mono pb-8 text-2xl">
        Press the keys on your keyboard
      </h2>
      <div className="flex flex-wrap items-center justify-center lg:flex gap-4 lg:gap-3">
        <SoundBtn keyChar="a" soundFile="/sounds/boom.wav" sound="808" shadowId='shadow-red-600' />
        <SoundBtn keyChar="s" soundFile="/sounds/kick.wav" sound="kick" shadowId='shadow-blue-600' />
        <SoundBtn keyChar="d" soundFile="/sounds/hihat.wav" sound="hihat" shadowId='shadow-green-600'/>
        <SoundBtn keyChar="f" soundFile="/sounds/yeaho.wav" sound="🔥" shadowId='shadow-orange-600'/>
        <SoundBtn keyChar="g" soundFile="/sounds/openhat.wav" sound="openhat" shadowId='shadow-emerald-600'/>
        <SoundBtn keyChar="h" soundFile="/sounds/clap.wav" sound="clap" shadowId='shadow-yellow-600'/>
        <SoundBtn keyChar="j" soundFile="/sounds/snare.wav" sound="snare" shadowId='shadow-blue-600'/>
        <SoundBtn keyChar="k" soundFile="/sounds/tink.wav" sound="tink" shadowId='shadow-yellow-600'/>
        <SoundBtn keyChar="l" soundFile="/sounds/tom.wav" sound="tom" shadowId='shadow-red-600'/>
      </div>
      {/* <div className="flex flex-wrap items-center justify-center lg:flex gap-4 lg:gap-2">
        <SoundBtn keyChar="c" soundFile="/sounds/boom.wav" sound="808" />
        <SoundBtn keyChar="v" soundFile="/sounds/kick.wav" sound="kick" />
        <SoundBtn keyChar="b" soundFile="/sounds/hihat.wav" sound="hihat" />
        
      </div> */}
      <Footer />
    </main>
  );
}

export default App;
