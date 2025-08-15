import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Navigate, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Dashboard from './Dashboard';
import Navbar from '../components/Navbar';
const Signin = () => {
  const [sub, setsub] = useState('')
  const [open, setopen] = useState('')
  const [email, setemail] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [password, setpassword] = useState('')
  const [data, setdata] = useState('')
  const [errors, seterrors] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate('')
 const handlesubmit = async (e) => {
  e.preventDefault();
  let isValid = true;

  // Email 
  if (email.trim() === "") {
    seterrors((errors) => ({ ...errors, email: 'Required email' }));
    isValid = false;
  } else {
    seterrors((errors) => ({ ...errors, email: '' }));
  }

  // Password 
  if (password.trim() === "") {
    seterrors((errors) => ({ ...errors, password: 'Password Required' }));
    isValid = false;
  } else if (password.length < 6) {
    seterrors((errors) => ({ ...errors, password: 'Password must be at least 6 characters' }));
    isValid = false;
  } else {
    seterrors((errors) => ({ ...errors, password: '' }));
  }

  if (!isValid) return;

  const api = axios.create({ baseURL: 'https://evebackend.onrender.com' });

  try {
    const res = await api.post('/api/auth/admin/login', { email, password });

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      setdata(res.data);

      toast.success("Login successful! Redirecting...", {
        position: "top-right",
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate('/');
      }, 2200);
    }
  } catch (err) {
    console.log("error", err);
    toast.error("Invalid email or password", {
      position: "top-right",
      autoClose: 3000,
    });
  }
};

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
                <span className='flex flex-col relative'>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    className="w-[250px] px-3 rounded-xl py-[7px] bg-[#34244c] border-[1px] text-gray-400 pr-10"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <span
                    className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {errors.password && (
                    <span className='text-red-600 ml-[15px] mt-[5px]'>{errors.password}</span>
                  )}
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
                        onClick={() => setopen(false)}
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
       <ToastContainer />
    </div>
  )
}

export default Signin
