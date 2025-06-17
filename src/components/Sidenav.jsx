import React, { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { VscSymbolEvent } from "react-icons/vsc";
import Dashboard from '../pages/Dashboard';
import Registrations from '../pages/Registrations';
import Events from '../pages/Events';
import { useNavigate } from 'react-router-dom';

const Sidenav = () => {
    const [dashboardopen, setdashboardopen] = useState(false);
    const [events, setevents] = useState(false);
    const [color, setcolor] = useState(false);
    const [active, setactive] = useState('dashboard');
    const navigate=useNavigate('')

    return (
        <div className='md:flex  '>
            {/* Sidebar */}
            <div className="bg-[#292b48] shadow-xl  min-h-screen h-full  md:w-[250px]   mt-[70px]  text-white ">
                <div className='flex flex-col gap-1 items-start px-5'>
                    <h2 className="text-sm border-b border-gray-700 pb-2 mt-[10px]  text-gray-400 uppercase tracking-widest">
                        Navigation
                    </h2>

                    {/* Dashboard Menu */}
                    <div className='flex flex-col mt-[20px]'>
                        <div className='flex gap-3'>
                            <span className='text-xl text-[#74779a]'><IoMdHome /></span>
                            <button
                                className='text-md text-[#74779a] flex font-semibold hover:text-white'
                                onClick={() => {
                                    setdashboardopen(!dashboardopen);
                                    setactive('dashboard');
                                    // navigate('/Dashboard')
                                }}
                            >
                                Dashboard
                            </button>
                        </div>

                        {dashboardopen && (
                            <div className='flex flex-col gap-4 mt-[10px] ml-[10px] text-[#74779a]'>
                                <li className='hover:text-white text-sm text-center'>
                                    <button onClick={() => setactive( navigate('/Registrations')) }>Registrations</button>
                                </li>
                                <li className='hover:text-white text-sm'>
                                    <button>Analytics</button>
                                </li>
                            </div>
                        )}
                    </div>

                    {/* Events Menu */}
                    <div className='flex flex-col mt-[10px] gap-3'>
                        <div className='flex gap-3'>
                            <span className='text-xl text-[#74779a]'><VscSymbolEvent /></span>
                            <button
                                className='text-md text-[#74779a] font-semibold'
                                onClick={() => setevents(!events)}
                            >
                                Events
                            </button>
                        </div>

                        {events && (
                            <div className='flex flex-col gap-4 mt-[10px] ml-[10px] text-[#74779a]'>
                                <li className='hover:text-white text-sm text-center'><button onClick={()=>setactive('Events')}>Create Event</button></li>
                                <li className='text-center hover:text-white text-sm'><button>Create Ticket</button></li>
                                <li className='text-center hover:text-white text-sm ml-[-23px]'><button>Discount</button></li>
                                <li className='text-center hover:text-white text-sm ml-[-43px]'><button>Guest</button></li>
                            </div>
                        )}
                    </div>

                    {/* Theme Menu */}
                    <div className='flex flex-col mt-[10px] gap-3'>
                        <div className='flex gap-3'>
                            <span className='text-xl text-[#74779a]'><VscSymbolEvent /></span>
                            <button
                                className='text-md text-[#74779a] font-semibold'
                                onClick={() => setcolor(!color)}
                            >
                                Color Theme
                            </button>
                        </div>

                        {color && (
                            <div className='flex flex-col gap-4 mt-[10px] px-5 text-[#74779a]'>
                                <li className='hover:text-white text-sm'><button>Dark</button></li>
                                <li className='hover:text-white text-sm'><button>Light</button></li>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/*  Content */}
            <div className='  md:mt-[80px] text-white'>
                {active === 'dashboard' && <Dashboard />}
                {active === 'registrations' && <Registrations />}
                 {active === 'Events' && <Events/>}
            </div>
            {/*Events */}
               
        </div>
    );
};

export default Sidenav;