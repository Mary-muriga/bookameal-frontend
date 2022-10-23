import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserHomepage from "../homeuser/UserHomepage";
import '../../App.css';
import Dashboard from '../main-dashboard/Dashboard';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/UserHome" element={<UserHomepage />} />

      </Routes>
    </Router>
  );
}

export default App;
