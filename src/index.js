import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './config/Routes';

import './index.css';

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('root')
);