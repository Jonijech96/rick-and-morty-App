import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { RickMortyLocation } from "./components/RickMortyLocation";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RickMortyLocation />
    </div>
  );
}

export default App;
