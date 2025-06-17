import React from 'react';

const Events = () => {
  return (
    <div>
      <div className='mt-[30px] ml-[100px]'> <button className='text-[#98a2cb] bg-[#292b48] px-5 py-2 rounded-lg font-semibold'>Back</button></div>
    <div className='flex items-center  justify-center mt-[10px]'>
      <form className='bg-[#292b48] rounded-lg shadow-xl w-[580px]'>
        {/* Header */}
        <h3 className='text-[#98a2cb] text-sm px-4 py-3 border-b border-gray-700 font-semibold'>
          Create Event
        </h3>

        {/* General Info */}
        <div className='px-5 py-4'>
          <h3 className='text-sm text-[#98a2cb] font-semibold mb-4'>General Info</h3>

          {/* Event Title & Organizer */}
          <div className='flex gap-4 mb-5'>
            <div className='flex flex-col w-1/2'>
              <label className='text-xs text-[#98a2cb] mb-1'>Event Title</label>
              <input
                type="text"
                placeholder=""
                className='rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none'
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <label className='text-xs text-[#98a2cb] mb-1'>Organizer</label>
              <input
                type="text"
                placeholder=""
                className='rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none'
              />
            </div>
          </div>

          {/* Type & Category */}
          <div className='flex gap-4 mb-5'>
            <div className='flex flex-col w-1/2'>
              <label className='text-xs text-[#98a2cb] mb-1'>Type</label>
              <select className='rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none'>
                <option value="">Select type</option>
                <option value="offline">Offline</option>
                <option value="online">Online</option>
              </select>
            </div>
            <div className='flex flex-col w-1/2'>
              <label className='text-xs text-[#98a2cb] mb-1'>Category</label>
              <select className='rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none'>
                <option value="">Select category</option>
                <option value="technical">  </option>
                <option value="nontechnical"></option>
                <option value="cultural"></option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div className='flex flex-col mb-6'>
            <label className='text-xs text-[#98a2cb] mb-1'>Location</label>
            <select className='rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none'>
              <option value="">Select location</option>
              <option value="auditorium">CSE-E Class Room</option>
              <option value="lab1">Lab 1</option>
               
            </select>
          </div>
          {/* date and time */}
          <h1 className='text-md text-[#98a2cb] font-semibold'>Date and Time</h1>
           <div className='flex gap-4 mb-5 mt-[20px]'>
            <div className='flex flex-col w-1/2'>
              <label className='text-xs text-[#98a2cb] mb-1'>Event start</label>
              <input
                type="text"
                placeholder=""
                className='rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none'
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <label className='text-xs text-[#98a2cb] mb-1'>Event End</label>
              <input
                type="text"
                placeholder=""
                className='rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none'
              />
            </div>
          </div>
          {/* checkout */}
          <div className='flex gap-3 px-1'>
            <input type="checkbox" className='bg-[#1b1f38]' /><label htmlFor="" className='text-sm text-[#98a2cb] font-semibold'>Check me Out</label>
          </div>
          {/* Submit Button */}
          <div className='flex justify-start mt-[20px]'>
            <button
              type='submit'
              className='bg-[#1b1f38] text-[#98a2cb] border border-[#545a72] px-3 py-1 rounded hover:bg-[#31365e] transition-all text-sm font-medium'
            >
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Events;
