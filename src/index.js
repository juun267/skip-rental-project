import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import Tailwind CSS
import App from './App'; // Import the main App component

// Render the React app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // The root div in the index.html file
);
