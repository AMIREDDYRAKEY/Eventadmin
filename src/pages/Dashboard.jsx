import React from 'react';
import { FaUsers } from "react-icons/fa";
import { PiUsersFill } from "react-icons/pi";
import { MdEmojiEvents } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
     
    const data = [
        {
            title: 'Total Users',
            Count: '0',
            icon: <FaUsers />
        },
        {
            title: 'Participants',
            Count: '0',
            icon: <PiUsersFill />
        },
        {
            title: 'Total Events',
            Count: '0',
            icon: <MdEmojiEvents />
        },
        {
            title: 'Total Admins',
            Count: '1',
            icon: <MdOutlineAdminPanelSettings />
        },
    ];

    return (
        <div className=''>
            <div className='grid grid-cols-1 md:gap-0 gap-10 sm:grid-cols-2 lg:grid-cols-4 '>
                {data.map((info, index) => (
                    <div
                        key={index}
                        className='shadow-xl flex flex-col justify-center md:h-[100px] h-[120px]  px-10 md:w-[250px] rounded-xl bg-[#292b48] hover:scale-105 transition-transform duration-200'
                    >
                        <div className='flex items-center gap-2 mb-2'>
                            <span className='text-[#98a2cb] text-xl'>{info.icon}</span>
                            <h3 className='text-[18px] text-[#98a2cb] font-semibold'>{info.title}</h3>
                        </div>
                        <div className='text-[#98a2cb] text-center text-lg font-bold'>
                            {info.Count}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
