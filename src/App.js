// App.js
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import React from 'react';
import Homepage from './Homepage';
import Login from './Login';
import About from './About';
import Virtual from './Virtual';

function App() {
  return (
    <Router>
  <Routes>
  
  <Route path="/" element = {<Homepage/>}/>
  <Route path="/home" element = {<Homepage/>}/>
  <Route path="/login" element = {<Login/>}/>
  <Route path="/about" element = {<About/>}/>
  <Route path="/virtual" element = {<Virtual/>}/>
  </Routes> 
  </Router>
  );
}

export default App;
