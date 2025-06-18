import React from 'react';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-10">
    
      <div className="flex justify-center ">
        <form className="bg-[#292b48] rounded-lg shadow-xl w-full max-w-[580px] p-5">
          <h3 className="text-[#98a2cb] text-sm border-b border-gray-700 pb-3 font-semibold">
            Create Event
          </h3>
          <div className="py-4">
            <h3 className="text-sm text-[#98a2cb] font-semibold mb-4">General Info</h3>
            <div className="flex flex-col md:flex-row gap-4 mb-5">
              <div className="flex flex-col md:w-1/2">
                <label className="text-xs text-[#98a2cb] mb-1">Event Title</label>
                <input
                  type="text"
                  className="rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none"
                />
              </div>
              <div className="flex flex-col md:w-1/2">
                <label className="text-xs text-[#98a2cb] mb-1">Organizer</label>
                <input
                  type="text"
                  className="rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-5">
              <div className="flex flex-col md:w-1/2">
                <label className="text-xs text-[#98a2cb] mb-1">Type</label>
                <select className="rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none">
                  <option value="">Select type</option>
                  <option value="offline">Offline</option>
                  <option value="online">Online</option>
                </select>
              </div>
              <div className="flex flex-col md:w-1/2">
                <label className="text-xs text-[#98a2cb] mb-1">Category</label>
                <select className="rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none">
                  <option value="">Select category</option>
                  <option value="technical">Technical</option>
                  <option value="nontechnical">Non-Technical</option>
                  <option value="cultural">Cultural</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label className="text-xs text-[#98a2cb] mb-1">Location</label>
              <select className="rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none">
                <option value="">Select location</option>
                <option value="auditorium">CSE-E Class Room</option>
                <option value="lab1">Lab 1</option>
              </select>
            </div>
            <h3 className="text-md text-[#98a2cb] font-semibold mb-4">Date and Time</h3>
            <div className="flex flex-col md:flex-row gap-4 mb-5">
              <div className="flex flex-col md:w-1/2">
                <label className="text-xs text-[#98a2cb] mb-1">Event Start</label>
                <input
                  type="datetime-local"
                  className="rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none"
                />
              </div>
              <div className="flex flex-col md:w-1/2">
                <label className="text-xs text-[#98a2cb] mb-1">Event End</label>
                <input
                  type="datetime-local"
                  className="rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3 mb-5">
              <input
                type="checkbox"
                className="bg-[#1b1f38] text-[#98a2cb]"
                id="checkout"
              />
              <label htmlFor="checkout" className="text-sm text-[#98a2cb] font-semibold">
                Check me out
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#1b1f38] text-[#98a2cb] border border-[#545a72] px-3 py-1 rounded hover:bg-[#31365e] transition-all text-sm font-medium"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Events;