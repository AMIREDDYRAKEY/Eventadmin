import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Registrations from './pages/Registrations';
import Events from './pages/Events';
import Allevents from './pages/Allevents';
import Addparticipant from './pages/Addparticipant';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/' element={<Dashboard />} />
          <Route path="registrations" element={<Registrations />} />
          <Route path="events" element={<Events />} />
          <Route path="allevents" element={<Allevents />} />
           
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;