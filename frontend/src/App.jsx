// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Posts from './components/Posts';
import UploadPost from './components/UploadPost';
import Sidebar from './components/SideBar';

const App = () => {
  return (
    <Router>
      <Header />
      <div id="main" style={styles.main}>
        <Sidebar />
        <div id="right-panel" style={styles.rightPanel}>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/upload" element={<UploadPost />} />
            {/* Add a <Route path="/login" ...> if needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const styles = {
  main: {
    display: 'flex',
    minHeight: '100vh'
  },
  rightPanel: {
    flex: 1,
    padding: '20px'
  }
};

export default App;
