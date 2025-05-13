// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Profile from './components/Profile';
import UploadPost from './components/UploadPost';
import MainLayout from './Pages/MainLayout'; // NEW layout wrapper
import Posts from './components/Posts';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Layout wrapper with nested pages inside */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Posts />} />
{/*           <Route path="profile" element={<Profile />} /> */}
          <Route path="upload" element={<UploadPost />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
