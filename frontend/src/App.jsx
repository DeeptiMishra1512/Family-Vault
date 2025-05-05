// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Posts from './components/Posts';
import UploadPost from './components/UploadPost';

const App = () => {
  return (
    <Router>
      <Header />
      <div id="main">
        <div id="left-panel">
          <button className="nav-button" onClick={() => window.location.href = '/'}>
            Home
          </button>
        </div>
        <div id="right-panel">
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/upload" element={<UploadPost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
