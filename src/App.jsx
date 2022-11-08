import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ResidenFilter } from "./components/ResidenFilter";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      
      <ResidenFilter />
    </div>
  );
}

export default App;
