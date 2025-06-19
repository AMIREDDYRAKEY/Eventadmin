import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Addparticipant from './Addparticipant';
const Registrations = () => {
  const navigate = useNavigate();
  const [addstu,setaddstu] =useState('')
  const registrations = [
    { Sno: '1', 
      Name: 'Babu', 
      Idno: '24HM5A0502', 
      Section: 'Cse-A' 
    },
    { Sno: '2', 
      Name: 'Harish', 
      Idno: '23HM1A05I2', 
      Section: 'Cse-C' 
    },
    { Sno: '3', 
      Name: 'Govardhan', 
      Idno: '23HM1A0561',
       Section: 'Cse-B' 
      },
    { Sno: '4', 
      Name: 'Rajesh', 
      Idno: '23HM1A05I2', 
      Section: 'Cse-C' 
    },
    { Sno: '5', 
      Name: 'Mohan', 
      Idno: '24hm5a0519', 
      Section: 'Cse-C' 
    },
  ];

  return (
    <div className="min-h-screen pb-10">
      <div className="flex flex-col md:flex-row justify-center gap-10 items-center md:px-8 px-4 pt-8">
        <div><h3 className="text-2xl text-[#98a2cb] font-bold ml-[50px] text-center">Students Registrations</h3></div>

      </div>
      <div className='text-end md:mt-[-50px] mt-[30px]  '><button className="text-[#98a2cb] md:z-50 relative cursor-pointer bg-[#292b48] px-5 py-2  rounded-lg font-semibold " onClick={()=>setaddstu(!addstu)}>
          Add Participant
        </button></div>
      <div className="flex flex-col items-center mt-8">
        {registrations.map((info, index) => (
          <div
            key={index}
            className="bg-[#292b48] border-[1px] border-[#545a72] rounded-lg grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10 px-6 py-4 items-center shadow-xl mt-4 w-full max-w-[800px]"
          >
            <p className="font-semibold text-[#98a2cb]">{info.Sno}</p>
            <p className="font-semibold text-[#98a2cb]">{info.Name}</p>
            <p className="font-semibold text-[#98a2cb] uppercase">{info.Idno}</p>
            <p className="font-semibold text-[#98a2cb]">{info.Section}</p>
          </div>
        ))}
      </div>
     <div className='fixed md:top-1/4  md:left-1/2 top-1/4 right-2   '>
  {
    addstu && (
      <div><Addparticipant /></div>
    )
  }
</div>

    </div>
  );
};

export default Registrations;