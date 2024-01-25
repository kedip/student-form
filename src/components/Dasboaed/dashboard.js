// Dashboard.js

import React, { useEffect, useState } from 'react';
import './dashboard.css';
import { UseSelector, useSelector } from 'react-redux';
import ToggleSwitch from '../ToggalSwitch/ToggalSwitch';
import { useNavigate } from 'react-router-dom';



const Dashboard = () => {
  const userinfo = useSelector((state) => state);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // useEffect(() => {

  //   console.log(userinfo);
  // }, [])
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };
  const navigate = useNavigate();


  const logout = () => {
    localStorage.setItem("AccessToken", null)
    navigate("/login", { replace: true });
  }

  return (
    <div className={`dashboard ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      {/* Toggle switch button */}
      <ToggleSwitch isDarkTheme={isDarkTheme} onToggle={toggleTheme} />

      {/* Dashboard content */}
      <div className='dashboard_content'>
        <h1>Welcome to Your Dashboard</h1>
        <p>Dashboard content goes here.</p>
        <button className='logout_button' onClick={logout} >LogOut</button>
      </div>
    </div>
  );
};

export default Dashboard;
