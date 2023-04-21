import SoundBtn from "./components/SoundBtn";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="flex flex-col items-center pt-20 lg:pt-40 h-screen bg-black">
      <h1 className="text-gray-100 pb-12 lg:pb-4 text-4xl lg:text-7xl font-mono">
        make a beat 🥁
      </h1>
      <h2 className="hidden lg:block text-gray-100 font-mono pb-16 text-2xl">
        Press the keys on your keyboard
      </h2>
      <div className="flex flex-wrap items-center justify-center lg:flex gap-4 lg:gap-2">
        <SoundBtn keyChar="a" soundFile="/sounds/boom.wav" sound="808" />
        <SoundBtn keyChar="s" soundFile="/sounds/clap.wav" sound="clap" />
        <SoundBtn keyChar="d" soundFile="/sounds/hihat.wav" sound="hihat" />
        <SoundBtn keyChar="f" soundFile="/sounds/kick.wav" sound="kick" />
        <SoundBtn keyChar="g" soundFile="/sounds/openhat.wav" sound="openhat" />
        <SoundBtn keyChar="h" soundFile="/sounds/ride.wav" sound="ride" />
        <SoundBtn keyChar="j" soundFile="/sounds/snare.wav" sound="snare" />
        <SoundBtn keyChar="k" soundFile="/sounds/tink.wav" sound="tink" />
        <SoundBtn keyChar="l" soundFile="/sounds/tom.wav" sound="tom" />
      </div>
      <Footer />
    </main>
  );
}

export default App;
