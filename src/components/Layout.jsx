import React from 'react';
import Navbar from './Navbar'; // ✅ Make sure this path is correct
import { Outlet } from 'react-router-dom'; // ✅ To render child routes

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* This will render nested routes */}
      </main>
    </div>
  );
};

export default Layout;
