// App.js

import React from 'react';
import Login from './components/Login'; // Corrected import paths
import Signup from './components/Signup'; // Corrected import paths

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login/>
        {/* <Signup/> */}
      </header>
    </div> 
  );
}

export default App;
