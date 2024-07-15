import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './home';
import Admin from './admin';

const routing = (
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="medhealthkit.com/" exact component={Home} />
        <Route path="medhealthkit.com/shona" exact component={Admin} />

      </Routes>
    </React.StrictMode>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
