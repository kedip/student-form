// Login.js

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './login.css';
import ToggleSwitch from '../ToggalSwitch/ToggalSwitch';
import { loginUser } from '../../Redux/actions/userLoginAction';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const loginResponse = await loginUser({ email, password });
            if (loginResponse.data.AccessToken) {
                alert("Login successful");
                navigate('/dashboard');

            } else {
                alert("Invalid credentials");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred during login");
        }
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
