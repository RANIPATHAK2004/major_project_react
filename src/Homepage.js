// Header.js
import React from "react";

import "./homepage.css"; // Make sure this path is correct
import Header from "./Header";
import Footer from "./Footer";
const Homepage = () => {
  return (
    <div>
     <Header/>
      <div id="video1">
        <p id="solu">
          SOLUTION FOR <br />
          RURAL STUDENTS
          <br />
          <p id="solu1">
            This project aims to develop software solutions that address the
            challenges of inadequate educational infrastructure and limited
            connectivity in rural India. By leveraging technology, the project
            seeks to provide remote learning opportunities, optimize resource
            management, and enhance connectivity. Throug virt
          </p>
          <button id="but"> Try for Free</button>
        </p>

        <div id="image">
          <img src="/images/logo-tc-artical (1).svg" />
        </div>
      </div>

      <div id="how">
        <h2 id="how1">"The Power of Digital Learning"</h2>
        <p id="how2">
          "Digital learning is not just about accessing information; it's about
          transforming the way education is delivered. Our e-learning platforms
          allow rural students to explore interactive content, attend virtual
          lessons, and engage with teachers and peers in real time."
        </p>
      </div>
      {/* Packages Section */}
      <div id="packages-container">
        <div className="image-row">
          <div className="image-container">
            <img
              src="/images/education-background-with-book-pencil_23-2147491204.jpg"
              alt="Image 1"
              className="image"
            />

            <p className="description desc-1">
              <b> Offline Learning Mode:</b>
              <hr />
              <br />
              We strive to be the catalyst for our clients’ success in the
              digital realm by providing innovative strategies, advanced
              technologies, and unparalleled support in digital marketing and
              information technology realm.
            </p>
          </div>
          <div className="image-container">
            <img
              src="/images/front-view-stacked-books-graduation-cap-ladders-education-day_23-2149241014.avif"
              alt="Image 2"
              className="image"
            />
            <p className="description desc-2">
              <b>Interactive Content: </b>
              <hr />
              <br />
              "From videos to quizzes, our content is designed to be engaging
              and interactive, making learning fun and effective."
            </p>{" "}
          </div>
          <div className="image-container">
            <img
              src="/images/top-view-school-supplies-tree-drawn-blackboard-education-day_23-2149241049.jpg"
              alt="Image 3"
              className="image"
            />
            <p className="description desc-3">
              <b>Personalized Learning Paths: </b>
              <hr />
              <br />
              "Students can learn at their own pace, with personalized learning
              paths that cater to their strengths and weaknesses."
            </p>
          </div>
        </div>
      </div>

      <div id="para1">
        <p id="why">"Why Rural Education is Critical"</p>
        <p id="why1">
          "Rural education is the backbone of our future. In India, over 65% of
          the population lives in rural areas, where educational resources are
          often limited. We aim to bridge the gap between rural and urban
          education by introducing innovative, scalable solutions tailored to
          the unique challenges of rural communities."
        </p>
        <div id="pic1">
          <img src="/images/istockphoto-808845348-1024x1024.jpg" />
        </div>
      </div>
      <p className="hover-sentence">
        <b>
          <span className="hover-word">"Empowering&nbsp; </span>
        </b>
        <b>
          <span className="hover-word"> Education&nbsp;</span>
        </b>
        <b>
          <span className="hover-word">in&nbsp;</span>
        </b>
        <b>
          <span className="hover-word">Rural&nbsp;</span>
        </b>
        <b>
          <span className="hover-word">Area"&nbsp;</span>
        </b>
      </p>
      <div className="head">
        <p>
          Empowering education in rural India focuses on providing quality
          learning to underserved communities through technology and
          infrastructure. By introducing virtual classrooms and mobile learning
          platforms, we aim to bridge the gap between urban and rural education,
          ensuring every child has access to the knowledge and skills needed for
          a brighter future.
        </p>
        <h2>"Bridging the Gap, Building Bright Futures"</h2>
      </div>
      <div className="head1">
        <img src="/images/istockphoto-2163764887-612x612.jpg" alt="3D Girl" />
      </div>
      {/* Our Services Section */}
      <div id="ourservices-text">
        <h3>Our Services</h3>
      </div>
      <div className="marquee-container">
        <div className="marquee">
          <div className="box">
            <h3>1. Virtual Classrooms</h3>
            <p>
              Enable interactive learning with live online classes, video
              lectures, and digital tools to connect rural students with
              experienced educators.
            </p>
            <img
              src="/images/81951.jpg"
              className="bottom-image"
            />
          </div>
          <div className="box">
            <h3>2. E-Learning Resources:</h3>
            <p>
              Offer comprehensive educational materials, including eBooks,
              tutorials, quizzes, and video content.
            </p>
            <img
              src="/images/AF_3125X1586_1-min_2_2.png"
              alt="SEO"
              className="bottom-image"
            />
          </div>
          <div className="box">
            <h3>3. Resource Management System:</h3>
            <p>
              Simplify the management of learning materials, student progress
              tracking, and class schedules for schools and educators.
            </p>
            <img
              src="/images/AF_Jan_3125X1586_1.png"
              alt="PPC"
              className="bottom-image"
            />
          </div>
          <div className="box">
            <h3>4. Connectivity Tools: </h3>
            <p>
              Provide solutions to enhance internet access in remote areas,
              ensuring uninterrupted learning.
            </p>
            <img
              src="/images/AF_web.png"
              alt="Social Media Marketing"
              className="bottom-image"
            />
          </div>
          <div className="box">
            <h3>5.Teacher Training Programs:</h3>
            <p>
              Offer online workshops and resources to upskill teachers in rural
              areas.
            </p>
            <img
              src="/images/best-parent-school.png"
              alt="Website Development"
              className="bottom-image"
            />
          </div>
          <div className="box">
            <h3>6. School Registration:</h3>
            <p>
              Allow schools and learning centers to register on the platform to
              receive support, resources, and training.
            </p>
            <img
              src="/images/integrated.png"
              alt="Mobile App Development"
              className="bottom-image"
            />
          </div>
          <div className="box">
            <h3>7. Volunteering Opportunities:</h3>
            <p>
              Enable volunteers (teachers, NGOs, tech experts) to join and offer
              educational support, mentorship, or technology assistance.
            </p>
            <img
              src="/images/oct_blog_post2.png"
              alt="Testing"
              className="bottom-image"
            />
          </div>
        </div>
      </div>
      <div className="main-container">
      <div className="shadow-container">
        <div className="image-container2">
          {/* Add your image here */}
          <img src="/images/happy-teachers-day-design-stack-books-with-glasses-magnifier-blackboard-background_1325059-4021.jpg" alt="Example" />
        </div>
        <div className="content-container2">
          {/* Add your content here */}
          <h2>Resource Management</h2>
          <p>Our resource management tools help schools efficiently allocate and utilize educational materials, such as textbooks, learning kits, and technology. By providing training and support, we empower educators to manage these resources effectively, fostering an environment conducive to learning.</p>
        </div>
      </div>
    </div>

     <Footer/>
    </div>
  );
};

export default Homepage;
