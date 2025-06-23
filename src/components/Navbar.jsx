import React, { useState } from 'react';
import { IoMdMenu, IoIosNotifications } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import Sidenav from './Sidenav';
import Adminlogin from '../pages/Adminlogin';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [adminopen ,setadminopen]=useState('')

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Navbar */}
      <div className="bg-[#292b48] h-[70px] flex justify-between px-5 md:px-10 shadow-lg items-center text-white">
        <div className="flex items-center gap-5">
          <button
            className="text-3xl md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle sidebar"
          >
            <IoMdMenu />
          </button>
          <h3 className="text-xl md:text-2xl font-bold hidden md:flex">Tech Explore</h3>
        </div>

        {/* Right content */}
        <div className="flex items-center gap-5">
          <button className="bg-[#a06ee0] px-3 md:px-5 text-sm py-1 md:py-2 rounded-lg hover:bg-blue-600 transition-colors" onClick={()=>setadminopen(!adminopen)}>
            Add Admin
          </button>
          <button className="text-2xl" aria-label="Notifications">
            <IoIosNotifications />
          </button>
          <button className="text-3xl md:text-4xl" aria-label="Profile">
            <CgProfile />
          </button>
        </div>
         
      </div>
      {
        adminopen&&(
        
        <Adminlogin/>
  
      )}

      {/* Sidenav */}
      <div
        className={`fixed top-[70px] left-0 z-40 transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static`}
      >
        <Sidenav adminopen={adminopen} setadminopen={setadminopen} />
      </div>
       
    </div>
  );
};

export default Navbar;