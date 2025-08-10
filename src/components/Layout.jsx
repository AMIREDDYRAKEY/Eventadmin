import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#1b1f38] lg:z-[100]">
      <Navbar />
      <div className="flex">
        <main className="flex-1 md:ml-[250px] mt-[70px] p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;