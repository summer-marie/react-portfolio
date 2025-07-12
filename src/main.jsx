import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import './index.css'

// Suppress findDOMNode warning and extension errors in development
const originalError = console.error;
console.error = (...args) => {
  if (typeof args[0] === 'string' && (
    args[0].includes('findDOMNode is deprecated') ||
    args[0].includes('message channel closed before a response was received')
  )) {
    return;
  }
  originalError.call(console, ...args);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
