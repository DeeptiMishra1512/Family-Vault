import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/SideBar';

const MainLayout = () => {
  return (
    <div style={styles.page}>
      <Header />
      <div style={styles.main}>
        <Sidebar />
        <div style={styles.rightPanel}>
          <Outlet /> {/* This renders nested routes */}
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'hidden',
  },
  main: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
  },
  rightPanel: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
    backgroundColor: '#f9f9f9',
  },
};

export default MainLayout;
