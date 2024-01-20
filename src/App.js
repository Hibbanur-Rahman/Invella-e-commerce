import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home.jsx';
import WatchStrapBySize from './views/watchStrapBySize.jsx';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/watchStrapBySize' element={<WatchStrapBySize />} /></Routes>
    </Router>
  );
}

export default App;
