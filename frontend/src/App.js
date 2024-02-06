import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import LandingPage from './LandingPage';
// import About from './About'
// import Dashboard from './Dashboard'
// import Login from './Login'
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;
