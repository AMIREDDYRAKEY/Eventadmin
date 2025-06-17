import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Sidenav from './Sidenav';

const Navbar = () => {
  const [open, setOpen] = useState(false);
 
  return (
    <div className="">
      {/* Navbar */}
      <div className='bg-[#292b48] h-[70px] z-50 flex justify-between px-5 md:px-10 shadow-lg fixed w-full items-center text-white'>
        
        <div className='flex items-center gap-5'>
          <button className='text-3xl md:hidden' onClick={()=>setOpen(!open)}>
            <IoMdMenu />
          </button>
          <h3 className='text-xl md:text-2xl font-bold hidden md:flex'>Tech Explore</h3>
        </div>

        {/* content right */}
        <div className='flex items-center gap-5'>
          <button className='bg-[#a06ee0] px-3 md:px-5 text-sm py-1 md:py-2 rounded-lg hover:bg-blue-600'>
            Create Event
          </button>
          <button className='text-2xl'>
            <IoIosNotifications />
          </button>
          <button className='text-3xl md:text-4xl'>
            <CgProfile />
          </button>
        </div>
      </div>

       {/* sidenav */}
   {open && (
<div className={`fixed md:top-[70px] left-0 z-40 transition-transform duration-300 md:flex hidden md:translate-x-0 md:static`}>
        <Sidenav  />
      </div>
   )}
   <div className={`fixed md:top-[70px] left-0 z-40 transition-transform duration-300 md:flex hidden md:translate-x-0 md:static`}>
        <Sidenav  />
      </div>

    </div>
  );
};

export default Navbar;
