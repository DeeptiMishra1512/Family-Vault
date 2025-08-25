// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import UploadPost from './components/UploadPost';
import MainLayout from './Pages/MainLayout';
import Posts from './components/Posts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Posts />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="UploadPost" element={<UploadPost />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
