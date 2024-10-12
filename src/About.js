import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css"; // Make sure this path is correct

const About = () => {
  return (
    <div>
      <header className="header">
        <div id="logo">
         <h1>Edurl</h1>
        </div>
        <ul className="navbar">
          <li>Home</li>
          <li className="dropdown">
            <a href="/services">
              Category <span className="arrow"></span>
            </a>
            <ul className="dropdown-menu">
              <li>Virtual Classrooms</li>
              <li>Resource Management</li>
              <li>E-learning Content</li>
              <li>Connectivity Tools</li>
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
          <li> <Link to="/about">About </Link></li>

          <li>
            {" "}
            <Link to="/login">Login/Signup</Link>
          </li>
          <li>Register</li>
        </ul>
      </header>
      <div className="aboutmain-container">
      <div className="aboutshadow-container">
        <div className="aboutimage-container2">
          {/* Add your image here */}
          <img src="/images/images (4).jpeg.jpg" alt="Example" />
        </div>
        <div className="aboutcontent-container2">
          {/* Add your content here */}
          <h2>About Edurl</h2>
          <p>At Edurl, we are dedicated to transforming the educational landscape in rural areas. Our initiative aims to break down barriers that hinder access to quality education. By leveraging technology and innovative approaches, we provide resources that enable students to thrive academically. Our team is committed to creating a supportive community where every child has the opportunity to learn, grow, and succeed.</p>
        </div>
      </div>
    </div>


    <div className="aboutbig-container">
      <div className="aboutimage-box">
        <div className="aboutimage-wrapper">
          <img src="/images/360_F_562253855_GBC5HWRmNJtmJaHZ97KWtwFELWcNjPoT.jpg" alt="Image 1" className="aboutimage" />
          <div className="aboutdescription">This is a description for Image 1</div>
        </div>
      </div>
      <div className="aboutimage-box">
        <div className="aboutimage-wrapper">
          <img src="/images/1200-630.png" alt="Image 2" className="abpoutimage" />
          <div className="aboutdescription">This is a description for Image 2</div>
        </div>
      </div>
    </div>
     
          </div>
       );
    };
    
    export default About;