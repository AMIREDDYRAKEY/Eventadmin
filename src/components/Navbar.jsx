import React, { useEffect, useState } from 'react';
import { IoMdMenu, IoIosNotifications , } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import Sidenav from './Sidenav';
// import Adminlogin from '../pages/Adminlogin';
import Signin from '../pages/Signin';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [adminopen, setadminopen] = useState('')
  const [login, setlogin] = useState(false)
  const [logout,setlogout]=useState(false)
  useEffect(() => {
    const token = localStorage.getItem('token');
    setlogin(!!token);
  }, []);

  const handlelogin =()=>{
    navigate('/signin')
  }
  const handlelogout=()=>{
    setlogin(false)
    setlogout(false)
    localStorage.removeItem("token")
  }
  const navigate = useNavigate()
  return (
    <div className="fixed top-0 left-0 w-full z-[80]">
      {/* Navbar */}
      <div className="bg-[#292b48] h-[70px] flex justify-between px-5 md:px-10 shadow-lg items-center text-white">
        <div className="flex items-center gap-5">
          <button
            className="text-3xl md:hidden"
            onClick={() => setOpen(!open)}
            
          >
            <IoMdMenu />
          </button>
          <h3 className='mt-[15px] text-2xl md:flex hidden font-bold'>Tech  <strong className='text-[#ff009b]'>Exlplore</strong> </h3>
        </div>

        {/* Right content */}
         <div>
          {!login ? (
            <button
              className='text-white font-semibold bg-pink-500 hover:bg-pink-800 px-4 py-1 rounded-md text-sm transition duration-200'
              onClick={handlelogin}
            >
             Admin Login
            </button>
          ) : (
            <button onClick={()=>setlogout(!logout)}  className='text-white text-3xl'>
                  <CgProfile />
            </button>
          )}
        </div>

      </div>
      <div>
 {
              logout &&(
              <div className='flex justify-end  mr-[100px]  mt-[-40px]  '>  <button className='bg-blue-300 rounded-md font-semibold px-2 py-2'  onClick={handlelogout}>Logout</button></div>
              )
            }
</div>
      {/* Sidenav */}
      <div
        className={`fixed top-[70px] left-0 z-40 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 md:static`}
      >
        <Sidenav adminopen={adminopen} setadminopen={setadminopen} />
         
      </div>
   
        
    </div>
  );
};

export default Navbar;