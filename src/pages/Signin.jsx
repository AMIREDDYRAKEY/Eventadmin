import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Signin = () => {
  const [sub, setsub] = useState('')
  const [open,setopen]=useState('')
  const [email,setemail]=useState('')
  const [password ,setpassword]=useState('')
  const [errors,seterrors]=useState({
    email:'',
    password:'',
  });
  const navigate=useNavigate('')
  const handlesubmit = async(e)=>{
    e.preventDefault();
    let isValid=true
    if(email.trim()===""){
      seterrors((errors) =>({...errors,email:'Required email'}) )
      isValid=false
    }
    else{
      seterrors((errors) =>({...errors,email:''}) )
    }
    // Passowrd
    if(password.trim()===""){
      seterrors((errors)=>({...errors,password:'Password Required'}))
      isValid=false
    }
    else if(password.length <6){
      seterrors((errors)=>({...errors,password:'Password Must be 6 characters'}))
    }
    else{
      seterrors((errors)=>({...errors,password:''}))
    }
     const api = axios.create({ baseURL: 'https://evebackend.onrender.com' });
    try {

      const res = await api.post('/api/auth/admin/signin',{
        email,password
      });
      
     
      if (res.data.token) {
        localStorage.setItem("token", res.data.token)
       setdata(res.data)
      }
        
    }
    catch (err) {
      console.log("error", err)
    }
    
  }
  const submit = () => {
    e.preventDefault()
    setsub(true)
       
  }
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-[#0b132b] via-[#2a1b3d] to-[#3a506b] ">
        <div className="flex items-center justify-center  ">
          <div className=" pb-[20px] md:w-[320px] w-[300px] lg:mt-[12%] mt-[200px] rounded-lg shadow-lg  shadow-[#4b3c63]  bg-[#34244c]">
            {/* user */}
            <div className="flex justify-center mt-[-40px]">
              <div className="flex items-center justify-center bg-[#403f68] h-[80px] w-[80px] rounded-full">
                <FaUser className="text-3xl text-[#cbdcf0]" />
              </div>
            </div>
            <div className="flex flex-col gap-7 items-center justify-center">
              <h3 className="text-4xl text-white font-semibold uppercase mt-[10px]">Sigin </h3>

              <div className="flex flex-col gap-3 mt-[-10px] items-center justify-center">
                <span className='flex flex-col  '> <input type="text" placeholder="email" value={email} className="w-[250px] px-3 rounded-xl py-[7px] bg-[#34244c] border-[1px] text-gray-400" onChange={(e) => setemail(e.target.value)} />
                {errors.email && <span className='text-red-600 ml-[15px] mt-[5px]'>{errors.email}</span>}
              </span>
               <span className='flex flex-col'> <input type="Password" placeholder="Password" value={password} className="w-[250px] px-3 rounded-xl py-[7px] bg-[#34244c] border-[1px] text-gray-400" onChange={(e) => setpassword(e.target.value)} />
                {errors.password && <span className='text-red-600 ml-[15px] mt-[5px]'>{errors.password}</span>}
              </span>
                  
              </div>
              <div className="mt-[-6px] flex flex-col gap-2 items-center justify-center">
                <button className="h-[40px] w-[250px] text-white font-bold rounded-xl bg-[#572bc7]" onClick={handlesubmit}>Submit</button>
                {
                  open && (
                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-[#34244c] text-white px-8  py-[80px] rounded-xl shadow-lg z-50">
                       <button
                                        className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
                                      onClick={()=>setopen(false)}
                                      >
                                        <IoCloseSharp />
                                      </button>
                      <p className="lg:text-lg text-[10px] font-semibold">Login successfully</p>
                    </div>
                  )
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
