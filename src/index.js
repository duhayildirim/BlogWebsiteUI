import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Form.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserSignupPage from './Components/UserSignupPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserSignupPage />
  </React.StrictMode>
);

reportWebVitals();
