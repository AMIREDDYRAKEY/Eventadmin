import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Updateevent = () => {
  const navigate = useNavigate();
  const { id: eventId } = useParams();

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

  // Fetch existing event details
 useEffect(() => {
  const fetchEvent = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(`https://evebackend.onrender.com/api/events/${eventId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const e = res.data;

      setFormData({
        eventName: e.eventName || '',
        category: e.category || '',
        venue: e.venue || '',
        date: e.date?.split('T')[0] || '',
        time: e.time || '',
        description: e.description || '',
        image: null
      });

      if (e.imageUrl) setPreview(e.imageUrl);
    } catch (err) {
      console.error('Error fetching event details:', err);
      alert('Failed to fetch event details');
    }
  };

  fetchEvent();
}, [eventId]);


  // Image change handler
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

  // Update event handler
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

      await api.put(`/api/events/${eventId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Event updated successfully');
      navigate('/');
    } catch (err) {
      console.error('Error updating event:', err);
      alert('Event update failed');
    }
  };

  return (
    <div className="min-h-screen pb-10 relative md:z-[90]">
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-[#292b48] rounded-lg shadow-xl w-full max-w-[580px] p-5 md:ml-0 ml-[-24px]"
        >
          <h3 className="text-[#98a2cb] text-sm border-b border-gray-700 pb-3 font-semibold">
            UPDATE EVENT
          </h3>

          <div className="py-4">
            <h3 className="text-sm text-[#98a2cb] font-semibold mb-4">General Info</h3>

            <div className="flex flex-col md:flex-row gap-4 mb-5">
              <div className="flex flex-col md:w-1/2">
                <label className="text-xs text-[#98a2cb] mb-1">Update Title</label>
                <input
                  type="text"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  className="rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none"
                  placeholder="Enter event title"
                />
              </div>

              <div className="flex flex-col md:w-1/2">
                <label className="text-xs text-[#98a2cb] mb-1"> Update Category</label>
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

            <div className="flex flex-col mb-6">
              <label className="text-xs text-[#98a2cb] mb-1"> Update Venue</label>
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

            <h3 className="text-md text-[#98a2cb] font-semibold mb-4">Date and Time</h3>

            <div className="flex flex-col md:flex-row gap-4 mb-5">
              <div className="flex flex-col md:w-1/2">
                <label className="text-xs text-[#98a2cb] mb-1">Update Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none"
                />
              </div>

              <div className="flex flex-col md:w-1/2">
                <label className="text-xs text-[#98a2cb] mb-1">Update Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="rounded-md py-2 px-2 bg-[#1b1f38] text-[#98a2cb] text-sm outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label className="text-xs text-[#98a2cb] mb-1">Update Banner</label>
              <input type="file" accept="image/*" onChange={handleImageChange} />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="mt-2 rounded-md w-full max-h-40 object-cover border border-[#545a72]"
                />
              )}
            </div>

            <button
              type="submit"
              className="bg-[#1b1f38] text-[#98a2cb] border border-[#545a72] px-3 py-1 rounded hover:bg-[#31365e] transition-all text-sm font-medium"
            >
              Update Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Updateevent;
