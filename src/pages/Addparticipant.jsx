import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Addparticipant = () => {
    const [sno,setsno]=useState('')
    const [Name,setname]=useState('')
    const [Idno,setIdno]=useState('')
    const [section,setsection]=useState('')
    const [submit ,setsubmit] =useState('')
    const [errors,seterrors] = useState({
        sno:'',
        Name:'',
        Idno:'',
        section:''
    })
 const handlesubmit=()=>{
    setsubmit(!submit)
    let isvalid=true;
    //  e.preventDefault();
    if(sno.trim() === ''){
        seterrors((errors)=>({...errors,sno:'Sno is Required'}))
        isvalid=false;
    }
    else{
        seterrors((errors)=>({...errors,sno:''}))
    }
    // Name
      if(Name.trim() === ''){
        seterrors((errors)=>({...errors,Name:'Name is Required'}))
        isvalid=false;
    }
    else{
        seterrors((errors)=>({...errors,Name:''}))
    }
    // Idno
      if(Idno.trim() === ''){
        seterrors((errors)=>({...errors,Idno:'Idno is Required'}))
        isvalid=false;
    }
    else{
        seterrors((errors)=>({...errors,Idno:''}))
    }
    // Section
      if(section.trim() === ''){
        seterrors((errors)=>({...errors,section:'Section is Required'}))
        isvalid=false;
    }
    else{
        seterrors((errors)=>({...errors,section:''}))
    }
   if (isvalid) {
    setsno('');
    setname('');
    setIdno('');
    setsection('');
} 


 }
  return (
    <div className='flex items-center justify-center z-0'>
         <form action="" className=' pb-[20px] px-3 shadow-lg shadow-[#161720] bg-[#292b48] rounded-lg flex flex-col gap-4 w-[300px] mt-[20px]'>
            <h3 className='text-2xl text-[#98a2cb] font-bold text-center mt-[20px]'>Add Student </h3>
            {/* inputs */}
           <div className="flex flex-col gap-4 overflow-y-auto">
                {/* sno */}
                <div className='flex flex-col '>
                    <input type="text" placeholder='Sno' value={sno} className='py-2 px-3 md:w-[270px] text-white bg-[#1b1f38] rounded-lg' onChange={(e)=>setsno(e.target.value)}/>
                <span className='text-red-600 ml-[5px] font-semibold'>{errors.sno}</span>
                </div>
                {/* Name */}
                <div className='flex flex-col '>
                    <input type="text" placeholder='Enter Name' value={Name} className='py-2 px-3 text-white md:w-[270px] bg-[#1b1f38] rounded-lg' onChange={(e)=>setname(e.target.value)}/>
                <span className='text-red-600 ml-[5px] font-semibold'>{errors.Name}</span>
                </div>
                {/* Idno */}
                               <div className='flex flex-col '>
                    <input type="text" placeholder='Enter Name' value={Idno} className='py-2 px-3 text-white md:w-[270px] bg-[#1b1f38] rounded-lg' onChange={(e)=>setIdno(e.target.value)}/>
                <span className='text-red-600 ml-[5px] font-semibold'>{errors.Idno}</span>
                </div>
                {/* section */}
                                <div className='flex flex-col '>
                    <input type="text" placeholder='Enter Name' value={section} className='py-2 px-3 text-white md:w-[270px] bg-[#1b1f38] rounded-lg' onChange={(e)=>setsection(e.target.value)}/>
                <span className='text-red-600 ml-[5px] font-semibold'>{errors.section}</span>
                </div>
                <button className='bg-[#1b1f38] py-2 px-3 md:w-[270px] rounded-xl text-[#98a2cb] font-bold ' onClick={handlesubmit}>Submit</button>
            </div>
         </form>
         {/* submitted */}
        
         {
            submit &&(
                 <div className='top-0 right-3 fixed z-50'>
                    <p>Student Added Sucessfully</p>
                 </div>
            )
         }
         
    </div>
  )
}

export default Addparticipant