import React from 'react'
import axios from'axios'
const api= axios.create ({baseURL:'https://evebackend.onrender.com'})
 export const  getdata = async () =>{
    const getres=await api.get('/api/events')
    return getres;
 }
 
