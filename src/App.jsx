import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registrations from './pages/Registrations';
import Events from './pages/Events';
import Layout from './components/Layout';
import Allevents from './pages/Allevents';
import Dashboard from './pages/Dashboard';
const App = () => {
  return (
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout />} />
              <Route path="/Registrations" element={<Registrations />} />
                <Route path="/Events" element={<Events />} />
                <Route path="/Allevents" element={<Allevents />} />
                <Route path="/Dashboard" element={<Dashboard />} />
       </Routes>
       </BrowserRouter>
  );
};

export default App;
