// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { IoCloseSharp } from "react-icons/io5";
// import axios from 'axios'
//  import Sigin from './Signin'
//  import Navbar from '../components/Navbar';
//  import Registrations from './Registrations';
// const Adminlogin = () => {
// const navigate = useNavigate();
   
//   const [isopen, setisopen] = useState(false)
//   const [username, setusername] = useState('')
//   const [email, setemail] = useState('')
//   const [password, setpassword] = useState('')
  
//   const [section, setsection] = useState('')
//   const [data, setdata] = useState('')
//   const [errors, seterrors] = useState({
//     username: '',
//     email: '',
//     password: '',
    
//   });


//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     let isValid = true;

//     if (username.trim() === "") {
//       seterrors((errors) => ({ ...errors, username: 'Enter valid username' }));
//       isValid = false;
//     } else {
//       seterrors((errors) => ({ ...errors, username: '' }));
//     }

//     if (email.trim() === "") {
//       seterrors((errors) => ({ ...errors, email: 'Enter valid email' }));
//       isValid = false;
//     } else {
//       seterrors((errors) => ({ ...errors, email: '' }));
//     }

//     if (password.trim() === "") {
//       seterrors((errors) => ({ ...errors, password: 'Password is required' }));
//       isValid = false;
//     } else if (password.length < 6) {
//       seterrors((errors) => ({ ...errors, password: 'Password must be 6 characters' }));
//       isValid = false;
//     } else {
//       seterrors((errors) => ({ ...errors, password: '' }));
//     }

     
//     if (isValid) {
//       setisopen(true);
//       setusername('');
//       setemail('');
//       setpassword('');
       
//     }
//     else {
//       setisopen(false)
//     }
//      const api = axios.create({ baseURL: 'https://evebackend.onrender.com' });
//     try {
//       const token=localStorage.getItem('token')
//       const res = await api.post('/api/auth/admin/register',{
//         username,email,password
//       },{
//        headers:{
//          Authorization: `Bearer ${token}`,
//        },
//       }); 
//       if (res.data.token) {
//         localStorage.setItem("token",res.data.token)
//         setdata(res.data.token)
//          navigate('/')
//       }
//     }
//     catch (err){
//       console.log("error", err)
//     }
    
   
//   };
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0b132b] via-[#2a1b3d] to-[#3a506b]">
//       <div className="flex items-center justify-center">
//         <div className=" w-[300px] md:mt-[180px] mt-[180px] rounded-lg shadow-lg shadow-[#4b3c63] overflow-y-auto no-scrollbar bg-[#34244c]">
//           <form  className="flex flex-col gap-4 pb-[20px] items-center justify-center ">
//             <h3 className="text-4xl text-white font-semibold uppercase mt-[20px]">Sign Up</h3>
//             <div className="flex flex-col gap-4 items-center justify-center ">
//               {/* Username */}
//               <span className='flex flex-col'> <input type="text" placeholder="Username" value={username} className="w-[260px] rounded-lg py-[6px] p-3 bg-[#34244c] border-[1px] text-gray-400" onChange={(e) => setusername(e.target.value)} />
//                 {errors.username && <span className='text-red-600 ml-[10px]'>{errors.username}</span>}
//               </span>
//               {/* Email */}
//               <span className='flex flex-col'> <input type="Email" placeholder="Email" value={email} className="w-[260px] rounded-lg py-[6px] p-3 bg-[#34244c] border-[1px] text-gray-400" onChange={(e) => setemail(e.target.value)} />
//                 {errors.email && <span className='text-red-600 ml-[10px]'>{errors.email}</span>}
//               </span>
//               {/* Passowrd */}
//               <span className='flex flex-col'> <input type="Password" placeholder="Password" value={password} className="w-[260px] rounded-lg py-[6px] p-3 bg-[#34244c] border-[1px] text-gray-400" onChange={(e) => setpassword(e.target.value)} />
//                 {errors.password && <span className='text-red-600 ml-[10px]'>{errors.password}</span>}
//               </span>
           
//             </div>

//             <div className="mt-[0px] flex flex-col gap-2 items-center justify-center">
//               <button type='submit' className="h-[40px] px-[100px] text-white font-bold rounded-xl bg-[#572bc7]"  onClick={handleSubmit} >Submit</button>

//               {/* <button className="text-sm text-white opacity-80 font-semibold">Already Have An Account?</button> */}
//               <button
//                 className="text-md text-blue-500 font-semibold"
//                 onClick={() => navigate('/Signin')}
//               >

//                 Login
//               </button>
//             </div>
//           </form>
//           {/* {isopen && (
//             <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//               <div className="relative bg-white rounded-xl shadow-lg w-[280px] h-[160px] flex flex-col items-center justify-center">
//                 <button
//                   className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
//                   onClick={() => setisopen(false)}
//                 >
//                   <IoCloseSharp />
//                 </button>
//                 <p className="text-lg font-semibold text-center text-black">Sign in Successfully</p>
//               </div>
//             </div>
//           )} */}

//         </div>
//       </div>

//     </div>
//   );
// };

// export default Adminlogin;   