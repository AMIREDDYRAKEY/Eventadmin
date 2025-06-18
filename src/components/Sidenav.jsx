import React, { useState } from 'react';
import { IoMdHome } from 'react-icons/io';
import { VscSymbolEvent } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

const Sidenav = () => {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-[#292b48] shadow-xl h-screen w-[250px] fixed md:static top-[70px] text-white">
      <div className="flex flex-col gap-1 items-start px-5">
        <h2 className="text-sm border-b border-gray-700 pb-2 mt-4 text-gray-400 uppercase tracking-widest">
          Navigation
        </h2>

        {/* Dashboard Menu */}
        <div className="flex flex-col mt-4">
          <div className="flex gap-3 items-center">
            <span className="text-xl text-[#74779a]">
              <IoMdHome />
            </span>
            <button
              className="text-md text-[#74779a] font-semibold hover:text-white"
              onClick={() => {
                setDashboardOpen(!dashboardOpen);
                navigate('/');
              }}
            >
              Dashboard
            </button>
          </div>
          {dashboardOpen && (
            <div className="flex flex-col gap-4 mt-2 ml-8 text-[#74779a]">
              <button
                className="hover:text-white text-sm text-left"
                onClick={() => navigate('/registrations')}
              >
                Registrations
              </button>
              <button className="hover:text-white text-sm text-left">Analytics</button>
            </div>
          )}
        </div>

        {/* Events Menu */}
        <div className="flex flex-col mt-4 gap-3">
          <div className="flex gap-3 items-center">
            <span className="text-xl text-[#74779a]">
              <VscSymbolEvent />
            </span>
            <button
              className="text-md text-[#74779a] font-semibold hover:text-white"
              onClick={() => setEventsOpen(!eventsOpen)}
            >
              Events
            </button>
          </div>
          {eventsOpen && (
            <div className="flex flex-col gap-4 mt-2 ml-8 text-[#74779a]">
              <button
                className="hover:text-white text-sm text-left"
                onClick={() => navigate('/events')}
              >
                Create Event
              </button>
              <button
                className="hover:text-white text-sm text-left"
                onClick={() => navigate('/allevents')}
              >
                All Events
              </button>
              <button className="hover:text-white text-sm text-left">Discount</button>
              <button className="hover:text-white text-sm text-left">Guest</button>
            </div>
          )}
        </div>

        {/* Theme Menu */}
        <div className="flex flex-col mt-4 gap-3">
          <div className="flex gap-3 items-center">
            <span className="text-xl text-[#74779a]">
              <VscSymbolEvent />
            </span>
            <button
              className="text-md text-[#74779a] font-semibold hover:text-white"
              onClick={() => setColorOpen(!colorOpen)}
            >
              Color Theme
            </button>
          </div>
          {colorOpen && (
            <div className="flex flex-col gap-4 mt-2 ml-8 text-[#74779a]">
              <button className="hover:text-white text-sm text-left">Dark</button>
              <button className="hover:text-white text-sm text-left">Light</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidenav;