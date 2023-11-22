// Import libraries and components
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import styles
import './index.css';

// Render application
ReactDOM.createRoot(document.getElementById('root')).render(
  // Use StrictMode for better error handling
  <React.StrictMode>
    {/* Render App component */}
    <App />
  </React.StrictMode>,
);
