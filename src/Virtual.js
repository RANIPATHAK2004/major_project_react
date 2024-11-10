import React from "react";

import "./virtual.css"; // Make sure this path is correct
import Header from "./Header";
import Footer from "./Footer";
const Virtual = () => {
  return (
    <div>
     <Header/>
     <div className="meeting-schedule">
      <header className="header">
        
        <input 
          type="text" 
          placeholder="Search your virtual classroom Here...." 
          className="search-bar"
        />
      </header>
      <h2>Your meeting schedule</h2>
      <p className="subtext">Click link and join</p>
      <div className="meeting-list">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="meeting-item">
            <p className="meeting-link">yaha par meeting ki link aaygi...</p>
            <button className="join-button">join now</button>
          </div>
        ))}
      </div>
      <p className="footer-text">Your paragraph text</p>
    </div>
     <Footer/>
    </div>
  );
};

export default Virtual;