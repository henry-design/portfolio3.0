import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './pages/AboutMe';

function App() {
  useEffect(() => {
    document.title = "Home | Portfolio";
    console.log("App.js loaded");
  }, []);
  return ( 
    <div className="App"> 
    
  <Navbar />
  <Header/>
  <AboutMe/>
  </div> 
  
  );
}

export default App;
