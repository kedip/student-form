// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/routing'; // Assuming this is the top-level component containing Routes
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './Redux/store';

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
