import React from "react";

import "./homepage.css"; // Make sure this path is correct
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
     <Header/>
      <div className="aboutmain-container">
      <div className="aboutshadow-container">
        <div className="aboutimage-container2">
          {/* Add your image here */}
          <img src="/images/education-word-chalkboard-with-school-books-desk-education-concept_359031-6134.jpg" alt="Example" />
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
          <img src="/images/1.png" alt="Image1" className="aboutimage" />
          <div className="aboutdescription"> <p><b>Vission</b><br/><br/>
          We envision a future where every rural student has access to the same opportunities and resources as their urban peers. By providing virtual classrooms, improving school infrastructure, and supporting teachers, we aim to foster a generation of students who are prepared for success in the modern world.</p>
      </div>
        </div>
      </div>
      <div className="aboutimage-box">
        <div className="aboutimage-wrapper">
          <img src="/images/Asset-1.png" alt="Image2" className="abpoutimage" />
          <div className="aboutdescription"><p><b>Mission</b><br/><br/>
          Our mission is to ensure that every child in rural areas has access to quality education, regardless of their geographical location. By integrating technology and innovative teaching methods, we strive to create learning environments that empower students, support educators, and uplift entire communities. We are committed to making education a driving force for change, leading to sustainable development and brighter futures. </p></div>
     
        </div>
      </div>
    </div>
    <div className="aboutjoin">
      <h2>Join Us</h2>
      <p>We believe that with the right resources and support, rural communities can flourish. Whether you are a volunteer, educator, or organization, you can play a vital role in making quality education accessible to all. Together, we can transform lives, one community at a time.</p>
    </div>
     <Footer/>
          </div>
       );
    };
    
    export default About;