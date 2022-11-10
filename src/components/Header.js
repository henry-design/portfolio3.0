import React from 'react'


import Particle from "../components/configs/Particle"
import { Typer } from './Typer'
const Header = () =>{
    

    return (
     <div className="header-wrapper">
         <Particle />
        <div className="main-info">
            <h1>
                Going the extra mile for your business...
            </h1>
           
           <Typer/>
            <a href="/" className="btn-main-offer">Cotact me</a>
        </div>
     </div>
    )
}
export default Header