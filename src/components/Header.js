import React from 'react'

import Typewriter from 'typewriter-effect';
import Particle from "../components/configs/Particle"
const Header = () =>{
    

    return (
     <div className="header-wrapper">
         <Particle />
        <div className="main-info">
            <h1>
                Going the extra mile for your business...
            </h1>
            <Typewriter
  options={{
    strings: ["Web Applications Development","Software Development, and Intergrations","Data analytics","Systems Administration"],
    autoStart: true,
    loop: true,
    delay: 70,
    deleteSpeed: 20,
    pauseFor: 1000,
  }}
/>
            {/* <Typed
            className="typed-text"
            strings={
                ["Web Applications Development","Software Development, and Intergrations","Data analytics","Systems Administration"]
            }
            typeSpeed={50}
                    backSpeed={20}
                   
                    loop 
                   
            /> */}
            <a href="/" className="btn-main-offer">Cotact me</a>
        </div>
     </div>
    )
}
export default Header