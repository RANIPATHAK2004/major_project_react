import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css"; // Make sure this path is correct

const Header = () => {
  return (

<header className="header">
<div id="logo">
<h1>Edurl</h1>
</div>
<ul className="navbar">
<li> <Link to="/home">Home</Link></li>
  <li className="dropdown">
    <a href="/services">
      Programs <span className="arrow"></span>
    </a>
    <ul className="dropdown-menu">
    <li> <Link to="/virtual">Virtual Classrooms</Link></li>
      <li>Teacher Training</li>
      <li>E-learning Resources</li>
      <li>Community Outreach</li>
    </ul>
  </li>
  <li className="dropdown">
    <a href="/services">
      Courses <span className="arrow"></span>
    </a>
    <ul className="dropdown-menu">
      <li>Virtual Classrooms</li>
      <li>Resource Management</li>
      <li>E-learning Content</li>
      <li>Connectivity Tools</li>
    </ul>
  </li>
  <li> <Link to="/about">About</Link></li>

  <li>
    {" "}
    <Link to="/login">Login/Signup</Link>
  </li>
  <li>Register</li>
</ul>
</header>
);
};

export default Header;
