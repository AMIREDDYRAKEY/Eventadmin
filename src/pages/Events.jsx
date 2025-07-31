import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Events = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventName: '',
    category: '',
    venue: '',
    date: '',
    time: '',
     description:''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = axios.create({ baseURL: 'https://evebackend.onrender.com' });

    try {
      const token = localStorage.getItem('token');
      const res = await api.post(
        '/api/events',
        {
          eventName: formData.eventName,
          category: formData.category,
          venue: formData.venue,
          description:formData.description,
          date: formData.date,
          time: formData.time,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert('Event Created');
      navigate('/');
    } catch (err) {
      console.log('Error:', err);

    }
  };

  return (
    <div className="min-h-screen pb-10 relative md:z-[60]">
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="bg-[#292b48] rounded-lg shadow-xl w-full max-w-[580px] p-5">
          <h3 className="text-[#98a2cb] text-sm border-b border-gray-700 pb-3 font-semibold">
            Create Event
          </h3>
          <div className="py-4">
            {/* General Info */}
            <h3 className="text-sm text-[#98a2cb] font-semibold mb-4">General Info</h3>

            <div className="flex flex-col md:flex-row gap-4 mb-5">
              {/* Event Title */}
              <div className="flex flex-col md:w-1/2">
                <label className="text-xs text-[#98a2cb] mb-1">Event Title</label>
                <input
                  type="text"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  className="rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none"
                  placeholder="Enter event title"
                />
              </div>

              {/* Category */}
              <div className="flex flex-col md:w-1/2">
                <label className="text-xs text-[#98a2cb] mb-1">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none"
                >
                  <option value="">Select Category</option>
                  <option value="TechExplore-24">TechExplore-24</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col mb-6">
              <label className="text-xs text-[#98a2cb] mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter event description"
                className="rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none resize-none h-24"
              ></textarea>
            </div>

            {/* Venue */}
            <div className="flex flex-col mb-6">
              <label className="text-xs text-[#98a2cb] mb-1">Venue</label>
              <select
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                className="rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none"
              >
                <option value="">Select Venue</option>
                <option value="CSE-E Class Room">CSE-E Class Room</option>
                <option value="Lab 1">Lab 1</option>
              </select>
            </div>

            {/* Date and Time */}
            <h3 className="text-md text-[#98a2cb] font-semibold mb-4">Date and Time</h3>

            <div className="flex flex-col md:flex-row gap-4 mb-5">
              {/* Event Date */}
              <div className="flex flex-col md:w-1/2">
                <label className="text-xs text-[#98a2cb] mb-1">Event Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none"
                />
              </div>

              {/* Event Time */}
              <div className="flex flex-col md:w-1/2">
                <label className="text-xs text-[#98a2cb] mb-1">Event Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
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
