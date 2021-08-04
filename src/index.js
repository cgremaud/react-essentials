import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import {BrowserRouter as Router} from "react-router-dom";
import {Nav} from "./pages"
import { Checkbox } from './Checkbox';


ReactDOM.render(
  <Router>
  <div className="container" >
      <div className="row">
      <div classname="col-12" align="center">
        <Nav />
      </div>
    </div>
    <App />
    <Checkbox></Checkbox>
  </div>
  </Router>,
  document.getElementById('root')
);
