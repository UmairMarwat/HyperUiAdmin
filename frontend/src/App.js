
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adminpanalmain from './pages/adminpanalmain';
import Tournament from './components/Tournament';
import Playerdashboard from './pages/Playerdashboard';
import Adminpanal2 from './pages/adminpanel2';

function App() {
  return (
    <>
     <Router>
       
       <Routes>
         <Route path="/" element={<Adminpanalmain />} />
      
         <Route path="/tournament" element={<Playerdashboard />} />
         <Route path="/adminpanel2" element={<Adminpanal2 />} />
        
         
       </Routes>
       
     </Router>
    </>
     
  );
}

export default App;
