import './App.css';
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Login from './components/Login'
import Marketplace from './components/Marketplace';

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
