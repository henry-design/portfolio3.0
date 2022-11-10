import React from 'react'
import Typewriter from 'typewriter-effect';

export function Typer(props) {
    

    return (
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
    )
}
