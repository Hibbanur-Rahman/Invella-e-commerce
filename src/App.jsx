import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "./views/home.jsx";
import WatchStrapBySize from "./views/watchStrapBySize.jsx";
import Login from "./views/login.jsx";
import UserDashboard from "./views/userDashboard/userDashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";

import "./assets/styles/style.css";

function App() {
  return (
    <div>
      {/* =============== Footer ============= */}
      <Navbar />

      {/* =============== Views ============= */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/watchStrapBySize" element={<WatchStrapBySize />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/*" element={<UserDashboard />} />
      </Routes>

      {/* =============== Footer ============= */}
      <Footer />
    </div>
  );
}

export default App;
