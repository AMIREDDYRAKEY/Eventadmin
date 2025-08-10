import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Events = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    eventName: '',
    category: '',
    venue: '',
    date: '',
    time: '',
    description: '',
    image: null
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
      setPreview(URL.createObjectURL(file));  
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = axios.create({ baseURL: 'https://evebackend.onrender.com' });

    try {
      const token = localStorage.getItem('token');

      const data = new FormData();
      data.append('eventName', formData.eventName);
      data.append('category', formData.category);
      data.append('venue', formData.venue);
      data.append('description', formData.description);
      data.append('date', formData.date);
      data.append('time', formData.time);
      if (formData.image) {
        data.append('image', formData.image);
      }

      const res = await api.post('/api/events', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Event Created');
      navigate('/');
    } catch (err) {
      console.error('Error:', err);
      alert('Event creation failed. Check console for details.');
    }
  };

  return (
    <div className="min-h-screen pb-10 relative md:z-[80]">
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-[#292b48] rounded-lg shadow-xl w-full max-w-[580px] p-5 md:ml-0 ml-[-24px]"
        >
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

            {/* Image Upload */}
            <div className="flex flex-col mb-6">
              <label className="text-xs text-[#98a2cb] mb-1">Event Banner</label>
              <input type="file" accept="image/*" onChange={handleImageChange} />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="mt-2 rounded-md w-full max-h-40 object-cover border border-[#545a72]"
                />
              )}
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
