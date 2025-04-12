import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from './pages/Landing';
import Navbar from "./components/Navbar";
import About from './pages/AboutUs';
import Services from './pages/Services';
import ClientPortfolio from './pages/ClientPortfolio';
import ContactUs from './pages/Contact';


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
     
    </Routes>
  </Router>
 
  );
}

export default App;
