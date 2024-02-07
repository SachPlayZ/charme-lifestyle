import './App.css';
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Login from './components/Login'
import Marketplace from './components/Marketplace';
import AiStylist from './components/AiStylist';
import ProductDetails from './components/ProductView';


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/aistylist" element={<AiStylist />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
