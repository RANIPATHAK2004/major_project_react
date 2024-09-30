// App.js
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import React from 'react';
import Homepage from './Homepage';
import Login from './Login';

function App() {
  return (
    <Router>
  <Routes>
  <Route path="/" element = {<Homepage/>}/>
  <Route path="/login" element = {<Login/>}/>
  </Routes> 
  </Router>
  );
}

export default App;
