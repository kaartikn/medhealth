import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
// import Posts from './components/Posts';
import Admin from './admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shona" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
