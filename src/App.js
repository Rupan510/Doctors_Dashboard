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



function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Doctor_Dashboard />} />
          <Route path="/people" element={<People />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/amount" element={<Amount />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    
  );
}

export default App;