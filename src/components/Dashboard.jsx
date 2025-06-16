import React from 'react';
import { FaUsers } from "react-icons/fa";
import { PiUsersFill } from "react-icons/pi";
import { MdEmojiEvents } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

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
        <div className='md:ml-[300px]'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:ml-[-200px] md:mt-[30px]'>
                {data.map((info, index) => (
                    <div
                        key={index}
                        className='shadow-xl flex flex-col justify-center px-5 py-4 rounded-xl bg-[#292b48] hover:scale-105 transition-transform duration-200'
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
