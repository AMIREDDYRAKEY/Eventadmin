import React, { useEffect, useState } from 'react'
import img1 from '../assets/presen.jpg'
import img2 from '../assets/bug.jpg'
import img3 from '../assets/jam.webp'
import img4 from '../assets/thoughts.jpg'
import axios from 'axios'
import Updateevent from './Updateevent'
import { useNavigate } from 'react-router-dom'
// import Layout from '../components/Layout'
const Allevents =  () => {
    const navigate = useNavigate('')
    const [data,setdata]=useState([])
    const [update,setupdate]=('')

    useEffect(() => {
    const fetchEvents = async () => {
      const api = axios.create({ baseURL: 'https://evebackend.onrender.com' });

      try {
        const token = localStorage.getItem('token');
        const res = await api.get('/api/events', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setdata(res.data);  
      } catch (err) {
        console.log('Error fetching events:', err);
      }
    };

    fetchEvents();
  }, []);
  const handleupdate= (eventId)=>{
     navigate(`/Updateevent ${eventId}`)
  }
  const handledelete= async (eventId)=>{
     const api = axios.create({ baseURL: 'https://evebackend.onrender.com' });

      try {
        const token = localStorage.getItem('token');
        const res = await api.delete(`/api/events/${eventId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setdata(res.data);  
      } catch (err) {
        console.log('Error fetching events:', err);
      }
  }
    return (
         <div className='min-h-screen w-full relative'>
      <div className='w-full px-4 md:px-8 pt-8'>
        <h3 className='text-[#74779a] font-bold text-3xl text-center mb-8'>All Events</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          {data.length  ? (
            data.map((event, index) => (
              <div key={index} className='bg-[#292b48] flex flex-col pb-5 w-full max-w-[280px] rounded-lg hover:scale-105 transition-transform duration-300'>
                <div>
                  <img
                    src={event.image}
                    alt={event.eventName}
                    className='w-full h-[240px] object-cover rounded-t-lg'
                  />
                </div>
                <div className='flex flex-col px-4 mt-4'>
                  <h3 className='text-xl text-[#74779a] font-semibold'>{event.eventName}</h3>
                  <p className='text-lg text-[#74779a] font-semibold mt-2'>{event.date}</p>
                </div>
                <div className='flex justify-between px-4 mt-4'>
                  <button className='bg-[#74779a] px-6 py-2 font-semibold text-[#242750] rounded-lg hover:bg-[#8a8da8] transition-colors' onClick={() => handleupdate(event._id)}>
                    Update
                  </button>
                  <button className='bg-[#74779a] px-6 py-2 font-semibold text-[#292b48] rounded-lg hover:bg-[#8a8da8] transition-colors' onClick={() => handledelete(event._id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className='text-[#74779a] text-center col-span-full'>No events found.</p>
          )}
        </div>
      </div>
      {
        update &&(
            <Updateevent/>
        )
      }
    </div>
    )
}

export default Allevents