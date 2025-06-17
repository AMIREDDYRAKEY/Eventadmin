import React from 'react'
import Navbar from './components/Navbar'
 import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Registrations from './pages/Registrations';
import Events from './pages/Events';
const App = () => {
  return (
    <div className='   '>
      <div><Navbar /></div>
        <BrowserRouter>
      <Routes>
          <Route index element={<Dashboard />} />   
          <Route path="registrations" element={<Registrations />} />
          <Route path="events" element={<Events />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App