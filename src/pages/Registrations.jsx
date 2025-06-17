import React from 'react'

const Registrations = () => {
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
    <div>
      <div className='flex mt-[50px] justify-between md:px-[140px]'>
        <div className='bg-[#292b48] px-5 py-2 rounded-lg font-semibold '> <button className='text-[#98a2cb]'>Back</button></div>
        <h3 className='text-2xl   text-[#98a2cb] text-center font-bold'>Students Registrations</h3>
        <div className='bg-[#292b48] px-5 py-2 rounded-lg font-semibold  '> <button className='text-[#98a2cb]'>Add Participant</button></div>
      </div>
      <div className='  flex items-center justify-center flex-col '>
        {
          registrations.map((info, index) => (
            <div
              className='border-[1px] md:py-0 md:px-0 px-[100px] py-5  border-[#545a72] rounded-lg md:grid md:grid-cols-4 grid-cols-1 md:gap-10 md:pl-[50px]  items-center shadow-xl mt-[20px] md:h-[50px] bg-[#292b48]  md:w-[800px]'
              key={index}
            >
              <p className='font-semibold text-[#98a2cb] md:flex hidden'>{info.Sno}</p>
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