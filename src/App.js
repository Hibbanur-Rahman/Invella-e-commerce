import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/home.jsx";
import WatchStrapBySize from "./views/watchStrapBySize.jsx";
import Login from "./views/login.jsx";

function App() {
  return (
    <Router basename="/Invella-e-commerce">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchStrapBySize" element={<WatchStrapBySize />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
