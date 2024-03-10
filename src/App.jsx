import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/home.jsx';
import WatchStrapBySize from './views/watchStrapBySize.jsx';
import Login from './views/login.jsx';
import UserDashboard from './views/userDashboard/userDashboard.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/footer.jsx';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/style.css';
import AdminDashboard from './views/adminDashboard/index.jsx';
import ProductDetails from './views/productDetails.jsx';
import Cart from './views/cart.jsx';
function App() {
  return (
    <div>
      {/* =============== Navbar ============= */}
      <Navbar />
      {/* =============== Views ============= */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/watchStrapBySize" element={<WatchStrapBySize />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/*" element={<UserDashboard />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path='/productDetails/:productId' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      {/* =============== Footer ============= */}
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
