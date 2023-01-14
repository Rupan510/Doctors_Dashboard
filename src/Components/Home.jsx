import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
// import Sidebar from "./Components/Sidebar";
// import Amount from "./pages/Amount";
import Appointments from "./Appointments"
import Doctor_Dashboard from "./Doctor_Dashboard";
// import Feedback from "./pages/Feedback";
// import People from "./pages/People";
// import Setting from "./pages/Setting";
// import Login from "./Components/Login";


const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Sidebar>
            <Routes>
            <Route path='/' element={<Doctor_Dashboard />} />
            <Route path='/appointments' element={<Appointments />} />
            
            </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  )
}

export default Home
