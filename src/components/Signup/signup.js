// Signup.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './signup.css';
import ToggleSwitch from '../ToggalSwitch/ToggalSwitch';


const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("male");
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup form submitted", {
            name,
            email,
            password,
            mobileNumber,
            age,
            gender,
        });
    };

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className={`signup ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            {/* Toggle switch button */}
            <ToggleSwitch isDarkTheme={isDarkTheme} onToggle={toggleTheme} />

            {/* Rest of the component content */}
            <form className='signup_form' onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="text" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />

                <div className="gender_selection">
                    <label>
                        Male
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === "male"}
                            onChange={() => setGender("male")}
                        />
                    </label>
                    <label>
                        Female
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={gender === "female"}
                            onChange={() => setGender("female")}
                        />
                    </label>
                </div>

                <button type="submit">Sign Up</button>
            {/* Navigation link to the login page */}
            <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
            </form>

        </div>
    );
}

export default Signup;
