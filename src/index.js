import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import {BrowserRouter as Router} from "react-router-dom";
import {Nav} from "./pages"


ReactDOM.render(
  <Router>
  <div className="container">
    <Nav />
    <App />
  </div>
  </Router>,
  document.getElementById('root')
);
