// Signup.js

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './signup.css';
import ToggleSwitch from '../ToggalSwitch/ToggalSwitch';

const Signup = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobailno, setMobailno] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4458/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ first_name, last_name, email, password, mobailno }),
      });

      const responseData = await response.json();

      console.log('Response:', response);
      console.log('Response Data:', responseData);

      if (response.ok) {
        alert('Signup successful');
        // Redirect to login page after successful signup
        navigate('/login');
      } else {
        alert('Signup failed: ' + responseData.error);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred during signup');
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`signup ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      {/* Rest of the component content */}
      <form className='signup_form' onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input type="text" placeholder="First Name" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" value={last_name} onChange={(e) => setLastName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder="Mobile Number" value={mobailno} onChange={(e) => setMobailno(e.target.value)} />

        <button type="submit">Sign Up</button>
        {/* Navigation link to the login page */}
        <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
      </form>
    </div>
  );
};

export default Signup;
