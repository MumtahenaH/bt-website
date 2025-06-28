
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Landing from './pages/Landing';
import Navbar from "./components/Navbar";
import About from './pages/AboutUs';
import Services from './pages/Services';
import ClientPortfolio from './pages/ClientPortfolio';
import ContactUs from './pages/Contact';
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminPage from './pages/admin';
import AdminLogin from './pages/adminlogin';
import Footer from "./components/Footer";


function App() {
  return (
   <AuthProvider>
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/services" element= {<Services/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/clients" element={<ClientPortfolio/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/1234" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
      <Route path="/12345" element={<AdminLogin/>} />
     
    </Routes>
    <Footer />
  </Router>
  </AuthProvider> 
  );
}

export default App;
