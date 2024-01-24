// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/routing'; // Assuming this is the top-level component containing Routes
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
