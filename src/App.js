import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './pages/AboutMe';
function App() {
  return ( 
    <div className="App"> 
     
  <Navbar />
  <Header/>
  <AboutMe/>
    </div>
  );
}

export default App;
