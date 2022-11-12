import React from 'react'
import Typewriter from 'typewriter-effect';
import {useEffect} from 'react';
export function Typer(props) {
    
    useEffect(() => {
        console.log("Typer.js loaded");
      }, []);

    return (

        <Typewriter
  options={{
    strings: ["Web Apps Development","Software Development", "Integrations","Data analytics","Systems Administration"],
    autoStart: true,
    loop: true,
    delay: 70,
    deleteSpeed: 20,
    pauseFor: 1000,
  }}
/>
    )
}
