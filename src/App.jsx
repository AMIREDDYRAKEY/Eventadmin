import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Registrations from './pages/Registrations';
import Events from './pages/Events';
import Allevents from './pages/Allevents';
import Addparticipant from './pages/Addparticipant';
import Signin from './pages/Signin';
// import Adminlogin from './pages/Adminlogin';
import Updateevent from './pages/Updateevent';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path="registrations" element={<Registrations />} />
          <Route path="events" element={<Events />} />
          <Route path="allevents" element={<Allevents />} />
           <Route path="Updateevent/:id" element={<Updateevent />} />
        </Route>
        <Route path="Signin" element={<Signin />} />
        {/* <Route path="adminlogin" element={<Adminlogin />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;