import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Cart from "../homeuser/Cart";
import UserHomepage from "../homeuser/UserHomepage";
import NotFound from "../NotFound";

function App() {
  
  return (
    <Router>
      <Routes>
      <Route path='/cart' element={<Cart />} />
      <Route path="/not-found" element={<NotFound/>} />
      <Route path="/" element={<UserHomepage />} />
       
        {/* <Navigate to="/not-found" /> */}
      </Routes>
    </Router>
  );
}

export default App;
