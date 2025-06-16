import React from 'react'

const Registrations = () => {
    const registrations =[
    {
        Sno:'1',
        Name:'Babu',
        Idno:'24HM5A0502',
        Section:'Cse-A'
    },
    {
        Sno:'2',
        Name:'Harish',
        Idno:'23HM1A05I2',
        Section:'Cse-C'
    },
    {
        Sno:'3',
        Name:'Govardhan',
        Idno:'23HM1A0561',
        Section:'Cse-B'
    },
     {
        Sno:'4',
        Name:'Rajesh',
        Idno:'23HM1A05I2',
        Section:'Cse-C'
    },
     {
        Sno:'5',
        Name:'Mohan',
        Idno:'24hm5a0519',
        Section:'Cse-c'
    },
    ]
  return (
    <div className='z-40 md:z-0 md:ml-[150px]'>
            <h3 className='text-2xl md:ml-[200px] mt-[30px] text-[#98a2cb] font-bold'>Students Registartions</h3>
             {
            registrations.map((info,index)=>(
            <div
        className='border-[1px] border-[#545a72] rounded-lg grid grid-cols-4 gap-10 md:pl-[50px]  items-center shadow-xl mt-[20px] md:h-[50px] bg-[#292b48] md:w-[800px]'
        key={index}
      >
        <p className='font-semibold text-[#98a2cb]'>{info.Sno}</p>
        <p className='font-semibold text-[#98a2cb]'>{info.Name}</p>
        <p className='font-semibold text-[#98a2cb] uppercase'>{info.Idno}</p>
        <p className='font-semibold text-[#98a2cb]'>{info.Section}</p>
      </div>
            ))}
    </div>  
  )
}

export default Registrations