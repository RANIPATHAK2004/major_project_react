// App.js
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import React from 'react';
import Homepage from './Homepage';
import Login from './Login';
import About from './About';

function App() {
  return (
    <Router>
  <Routes>
  <Route path="/" element = {<Homepage/>}/>
  <Route path="/login" element = {<Login/>}/>
  <Route path="/about" element = {<About/>}/>
  </Routes> 
  </Router>
  );
}

export default App;
