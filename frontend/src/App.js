import './App.css';
import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage';
import Login from './Login'
import Marketplace from './Marketplace';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </div>
  );
}

export default App;
