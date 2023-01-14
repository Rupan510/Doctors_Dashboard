/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
// import Doctor_Dashboard from "./Components/Doctor_Dashboard";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Amount from "./pages/Amount";
import Appointments from "./Components/Appointments";
import Doctor_Dashboard from "./Components/Doctor_Dashboard";
import Feedback from "./pages/Feedback";
import People from "./pages/People";
import Setting from "./pages/Setting";
import Login from "./Components/Login";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        

        
          <Route path="/dashboard" element={<Doctor_Dashboard />} />
          <Route path="/people" element={<People />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/amount" element={<Amount />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      
          
    </BrowserRouter>
    
  );
}

export default App;