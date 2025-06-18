import React from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
const Registrations = () => {
  const navigate =useNavigate('')
  const registrations = [
    {
      Sno: '1',
      Name: 'Babu',
      Idno: '24HM5A0502',
      Section: 'Cse-A'
    },
    {
      Sno: '2',
      Name: 'Harish',
      Idno: '23HM1A05I2',
      Section: 'Cse-C'
    },
    {
      Sno: '3',
      Name: 'Govardhan',
      Idno: '23HM1A0561',
      Section: 'Cse-B'
    },
    {
      Sno: '4',
      Name: 'Rajesh',
      Idno: '23HM1A05I2',
      Section: 'Cse-C'
    },
    {
      Sno: '5',
      Name: 'Mohan',
      Idno: '24hm5a0519',
      Section: 'Cse-c'
    },
  ]
  return (
    <div className='pb-[40px]'>
      <div className=''><Layout/></div>
      <div className='md:flex md:flex-row flex flex-col md:ml-[300px] md:mt-[-45%] md:pt-0 pt-[100px] justify-between md:px-[140px]'>
        {/* <div className=' md:pt-[50px] pt-[40px] ' onClick={()=>navigate('/')}> <button className='text-[#98a2cb] bg-[#292b48] md:px-5 md:py-2 rounded-lg font-semibold px-3 py-2  md:ml-0 ml-[10px]'>Back</button></div> */}
        <h3 className='text-2xl   text-[#98a2cb] text-center font-bold md:ml-[200px] mt-[50px]'>Students Registrations</h3>
        <div className='md:pl-0 pl-[140px]  '> <button className='text-[#98a2cb] bg-[#292b48] mt-[30px] md:px-5 md:py-2 px-3 py-1 rounded-lg font-semibold'>Add Participant</button></div>
      </div>
      <div className=' md:ml-[300px] flex items-center justify-center flex-col '>
        {
          registrations.map((info, index) => (
            <div
              className='border-[1px] md:py-0 md:px-0 px-[70px] py-5  border-[#545a72] rounded-lg md:grid md:grid-cols-4 grid grid-cols- md:gap-10 md:pl-[50px]  items-center shadow-xl mt-[20px] md:h-[50px] bg-[#292b48]  md:w-[800px]'
              key={index}
            >
              <p className='font-semibold text-[#98a2cb] '>{info.Sno}</p>
              <p className='font-semibold text-[#98a2cb]'>{info.Name}</p>
              <p className='font-semibold text-[#98a2cb] uppercase'>{info.Idno}</p>
              <p className='font-semibold text-[#98a2cb]'>{info.Section}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Registrations