import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Addparticipant from './Addparticipant';
import axios from 'axios';

const Registrations = () => {
  const navigate = useNavigate();
  const [addstu, setaddstu] = useState(false);
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get('https://evebackend.onrender.com/api/auth/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.data) {
          setdata(res.data); 
        }
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen pb-10">
      <div className="flex flex-col md:flex-row justify-center gap-10 items-center md:px-8 px-4 pt-8">
        <h3 className="md:text-2xl text-[#98a2cb] font-bold md:ml-[50px] text-4xl text-center">
          Students Registrations
        </h3>
      </div>

      <div className="text-end md:mt-[-50px] mt-[30px]">
        <button
          className="text-[#98a2cb] md:z-50 relative cursor-pointer bg-[#292b48] px-5 py-2 rounded-lg font-semibold text-lg"
          onClick={() => setaddstu(!addstu)}
        >
          Add Participant
        </button>
      </div>

      <div className="flex flex-col items-center mt-8">
        {data.map((info, index) => (
          <div
            key={index}
            className="bg-[#292b48] border-[1px] border-[#545a72] rounded-lg grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-10 px-6 py-4 items-center shadow-xl mt-4 w-full max-w-[800px]"
          >
            <p className="font-semibold text-[#98a2cb]">{index + 1}</p>
            <p className="font-semibold text-[#98a2cb]">{info.username}</p>
            <p className="font-semibold text-[#98a2cb] uppercase">{info.idNo}</p>
            <p className="font-semibold text-[#98a2cb]">{info.section}</p>
            <p className="font-semibold text-[#98a2cb]">{info.year}</p>
            <p className="font-semibold text-[#98a2cb]">{info.registeredEvents}</p>
          </div>
        ))}
      </div>

      <div className="fixed md:top-1/4 md:left-1/4 top-1/4 right-2 md:z-0">
        {addstu && <Addparticipant />}
      </div>
    </div>
  );
};

export default Registrations;
