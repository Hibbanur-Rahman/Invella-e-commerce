import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'; // Import HashRouter
import App from './App';
import './assets/styles/style.css';



ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


