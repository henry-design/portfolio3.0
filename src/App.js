import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particle from "./components/configs/Particle"
import particlesCon from './components/configs/particlesConfig'

import Navbar from './components/Navbar'
import Header from './components/Header'
function App() {
  return ( 
    <div className="App"> 
      <Particle />
  <Navbar />
  <Header/>
    </div>
  );
}

export default App;
