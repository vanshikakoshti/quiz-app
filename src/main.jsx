import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Tailwind and global styles
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter  basename="/quiz-app"> {/* ✅ This must wrap your App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);