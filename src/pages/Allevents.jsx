import React from 'react'
import img1 from '../assets/presen.jpg'
import img2 from '../assets/bug.jpg'
import img3 from '../assets/jam.webp'
import img4 from '../assets/thoughts.jpg'
import { useNavigate } from 'react-router-dom'
// import Layout from '../components/Layout'
const Allevents = () => {
    const navigate = useNavigate('')
    const details = [
        {
            Eventname: 'Paper Presentation',
            Date: '24/12/24',
            img: img1
        },
        {
            Eventname: 'Bug Hunting',
            Date: '24/12/24',
            img: img2
        },
        {
            Eventname: 'Techno Jam',
            Date: '24/12/24',
            img: img3
        },
        {
            Eventname: 'Click Your Thoughts',
            Date: '24/12/24',
            img: img4
        }
    ]
    return (
        <div className='min-h-screen w-full relative'>
            <div className='w-full px-4 md:px-8 pt-8'>
                <h3 className='text-[#74779a] font-bold text-3xl text-center mb-8'>All Events</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
                    {details.map((info, index) => (
                        <div key={index} className='bg-[#292b48] flex flex-col pb-5 w-full max-w-[280px] rounded-lg hover:scale-105 transition-transform duration-300'>
                            <div>
                                <img src={info.img} alt={info.Eventname} className='w-full h-[240px] object-cover rounded-t-lg' />
                            </div>
                            <div className='flex flex-col px-4 mt-4'>
                                <h3 className='text-xl text-[#74779a] font-semibold'>{info.Eventname}</h3>
                                <p className='text-lg text-[#74779a] font-semibold mt-2'>{info.Date}</p>
                            </div>
                            <div className='flex justify-between px-4 mt-4'>
                                <button className='bg-[#74779a] px-6 py-2 font-semibold text-[#242750] rounded-lg hover:bg-[#8a8da8] transition-colors'>Update</button>
                                <button className='bg-[#74779a] px-6 py-2 font-semibold text-[#292b48] rounded-lg hover:bg-[#8a8da8] transition-colors'>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Allevents