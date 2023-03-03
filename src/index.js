import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Form.css';
import reportWebVitals from './reportWebVitals';
import UserSignupPage from './pages/UserSignupPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserSignupPage />
  </React.StrictMode>
);

reportWebVitals();
