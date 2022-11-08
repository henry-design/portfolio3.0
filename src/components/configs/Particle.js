import React from 'react'

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesCon from './particlesConfig'

export default function Particle() {

    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      return (
        <div className="particles-canvas">
         
    
           <Particles
          id="tsparticles"
          init={particlesInit}
    
          options={particlesCon
        // an config object
      } />

    </div>
  );
}