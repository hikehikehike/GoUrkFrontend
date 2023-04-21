import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';

// const express = require('express');
// const cors = require('cors');

// const app = express();

// app.use(cors({
//   origin: 'http://localhost:3000',
// }));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
