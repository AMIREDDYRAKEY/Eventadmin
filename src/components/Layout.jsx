import React from 'react';
import Navbar from './Navbar';  
import { Outlet } from 'react-router-dom';  
import Registrations from '../pages/Registrations';
const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />  
              </main>
    </div>
  );
};

export default Layout;
