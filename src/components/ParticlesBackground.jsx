import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import config from "./config/particles-config"
import "./Background.css"

export default function ParticlesBackground() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
       <Particles
       className="background"
      id="tsparticles"
      init={particlesInit}
      options={config}
    />
  );
}