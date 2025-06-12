import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from './pages/Landing';
import Navbar from "./components/Navbar";
import About from './pages/AboutUs';
import Services from './pages/Services';
import ClientPortfolio from './pages/ClientPortfolio';
import ContactUs from './pages/Contact';

import AdminPage from './pages/admin';
import AdminLogin from './pages/adminlogin';


function App() {
  return (
    
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/services" element= {<Services/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/clients" element={<ClientPortfolio/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/1234" element={<AdminPage/>} />
      <Route path="/12345" element={<AdminLogin/>} />
     
    </Routes>
  </Router>
 
  );
}

export default App;
