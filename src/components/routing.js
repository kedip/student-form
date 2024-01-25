// routing.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/login';
import Signup from './Signup/signup';
import Dashboard from './Dasboaed/dashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
  );
}

export default App;
