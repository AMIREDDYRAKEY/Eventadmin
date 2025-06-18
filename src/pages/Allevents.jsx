import React from 'react'
import img1 from '../assets/presen.jpg'
import img2 from '../assets/bug.jpg'
import img3 from '../assets/jam.webp'
import img4 from '../assets/thoughts.jpg'
import { useNavigate } from 'react-router-dom'

const Allevents = () => {
    const navigate=useNavigate('')
    const details=[
    {
        Eventname:'Paper Presentation',
        Date:'24/12/24',
        img:img1
    },
     {
        Eventname:'Bug Hunting',
        Date:'24/12/24',
        img:img2
    },
     {
        Eventname:'Techno Jam',
        Date:'24/12/24',
        img:img3
    },
    {
        Eventname:'Click Your Thoughts',
        Date:'24/12/24',
        img:img4
    }
    ]
  return (
    <div className=' '>
        <div className=' md:mt-[50px] mt-[30px]'> <div className=''> <button className='text-[#98a2cb] bg-[#292b48] px-5 py-2 md:ml-[30px] ml-4  rounded-lg font-semibold ' onClick={()=>navigate('/')}>Back</button></div>
        <h3 className='text-[#74779a] font-bold text-3xl text-center'>All Events</h3></div>
    <div className='md:grid md:grid-cols-4 grid grid-cols-1  gap-10 md:px-[140px] md:ml-0 ml-5 mt-[50px]'>
        {
            details.map((info,index) =>(
        <div className='bg-[#292b48] flex flex-col  pb-[20px]  w-[280px] md:w-[250px] rounded-lg hover:scale-105 transition-transform duration-300'>
            <div><img src={info.img} alt=""  className='h-[240px] w-[280px] md:w-[250px] rounded-lg'/></div>
            <div className='flex flex-col px-3 mt-[10px]'>
            <h3 className='text-xl text-[#74779a] font-semibold'>{info.Eventname}</h3>
            <p className='text-lg text-[#74779a] font-semibold '>{info.Date}</p>
            </div>
            <div className='flex md:px-5 md:gap-0 px-4 gap-3 md:justify-between mt-[10px]'>
                <button className='bg-[#74779a] md:px-4 px-8 py-1 font-semibold text-[#242750] rounded-lg'>Update</button>
                <button className='bg-[#74779a] md:px-4 py-1 px-8 font-semibold text-[#292b48] rounded-lg'>Delete</button>
            </div>
        </div>
  ))
}
    </div>
    </div>
  )
}

export default Allevents