// Login.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './login.css';
import ToggleSwitch from '../ToggalSwitch/ToggalSwitch';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login form submitted", { email, password });
    };

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    return (
        <div className={`login ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            {/* Toggle switch button */}
            <ToggleSwitch isDarkTheme={isDarkTheme} onToggle={toggleTheme} />

            {/* Login form */}
            <form className='login_form' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
                <p>Don't have an account? <NavLink to="/signup">Sign up</NavLink></p>
            </form>
        </div>
    );
}

export default Login;
