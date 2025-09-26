import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RegisterFarmer from './pages/RegisterFarmer';
import RegisterCompany from './pages/RegisterCompany';
import Dashboard from './pages/Dashboard'; // Dummy dashboard after login
import Suggestions from './pages/Suggestions';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-farmer" element={<RegisterFarmer />} />
          <Route path="/register-company" element={<RegisterCompany />} />
          <Route path="/contact" element={<Suggestions />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App