import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './App.css'; // Assuming you have a CSS file for styling

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="login-container">
      {/* Left side: Image */}
      <div className="login-left">
        <img
          src="/images/1200-630.png" // replace with your image URL
          alt="Students learning"
          className="login-image"
        />
      </div>

      {/* Right side: Form */}
      <div className="login-right">
        <h2>WELCOME TO EDURL</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username or email</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          <div className="form-options">
            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="login-btn">
            Sign in
          </button>

          <div className="or-divider">
            <span>or</span>
          </div>

          <button type="button" className="google-login-btn">
            <img
              src="/images/goggle.jpeg"
              alt="Google icon"
              className="google-icon"
            />
            Sign in with Google
          </button>

          <p className="signup-prompt">
            Are you new? <a href="/signup">Create an Account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
