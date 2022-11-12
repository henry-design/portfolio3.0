import React from 'react'
import {useEffect} from 'react';

import Particle from "../components/configs/Particle"
import { Typer } from './Typer'
const Header = () =>{
    
    useEffect(() => {
        console.log("Header.js loaded");
        }, []);

    return (
     <div className="header-wrapper">
         <Particle />
        <div className="main-info">
            <h1>
                Going the extra mile for your business...
            </h1>
           
           <Typer/>
            <a href="/" className="btn-main-offer">Contact me</a>
        </div>
     </div>
    )
}
export default Header