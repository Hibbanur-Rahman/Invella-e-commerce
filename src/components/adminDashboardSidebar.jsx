import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";


import dashboardIcon from '../assets/images/dashboard/dashboardIcon.svg';
import address from '../assets/images/dashboard/address.svg';
import downloads from '../assets/images/dashboard/downloads.svg';
import logout from '../assets/images/dashboard/logout.svg';
import ordersIcon from '../assets/images/dashboard/ordersIcon.svg';
import profile from '../assets/images/dashboard/profile.svg';


const AdminDashboardSidebar = () => {
  const handleLogout = () => {
    const token = Cookies.remove("token");
    toast.success("logout successfully");
    setTimeout(() => {
      window.location.href = "/";
    }, 4000);
  };

  return (
    <div className="col-2 m-0 p-0">
      <ul className="list-unstyled">
        <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
        <Link
            to="/admin/dashboard"
            className="text-decoration-none text-secondary pt-2 pb-2 justify-content-between d-flex "
          >
           <p className="m-0 p-0 w-auto "> Dashboard</p>
            <img src={dashboardIcon} alt="Dashboard Icon" className="w-auto"/>
          </Link>
        </li>
        <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
        <Link
            to="/admin/orders"
            className="text-decoration-none text-secondary pt-2 pb-2 justify-content-between d-flex"
          >
            <p className="m-0 p-0 w-auto ">Orders</p>
            <img src={ordersIcon} alt="Orders Icon" className="w-auto"/>

          </Link>
        </li>
        <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
          <Link
            to="/admin/product"
            className="text-decoration-none text-secondary pt-2 pb-2 justify-content-between d-flex"
          >
            <p className="m-0 p-0 w-auto ">Product</p>
            <img src={ordersIcon} alt="Orders Icon" className="w-auto"/>

          </Link>
        </li>
        <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
          <Link
            to="/admin/category"
            className="text-decoration-none text-secondary pt-2 pb-2 justify-content-between d-flex"
            >
              <p className="m-0 p-0 w-auto ">Category</p>
              <img src={ordersIcon} alt="Orders Icon" className="w-auto"/>
  
          </Link>
        </li>
        <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
          <Link
            to="/admin/users-details"
            className="text-decoration-none text-secondary pt-2 pb-2 justify-content-between d-flex"
            >
              <p className="m-0 p-0 w-auto ">Users</p>
              <img src={profile} alt="profile Icon" className="w-auto"/>
  
          </Link>
        </li>
        <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
          <Link
            to="/admin/account-details"
            className="text-decoration-none text-secondary pt-2 pb-2 justify-content-between d-flex"
            >
              <p className="m-0 p-0 w-auto ">Account Details</p>
              <img src={profile} alt="profile Icon" className="w-auto"/>
  
          </Link>
        </li>
        <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
          <Link
            to="/admin/transactions"
            className="text-decoration-none text-secondary pt-2 pb-2 justify-content-between d-flex"
            >
              <p className="m-0 p-0 w-auto ">Transactions</p>
              <img src={downloads} alt="Downloads Icon" className="w-auto"/>
  
          </Link>
        </li>
        <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
          <Link
            to="/admin/reviews"
            className="text-decoration-none text-secondary pt-2 pb-2 justify-content-between d-flex"
            >
             <p className="m-0 p-0 w-auto ">Reviews</p>
             <img src={address} alt="Address Icon" className="w-auto"/>
  
          </Link>
        </li>
        <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
          <Link
            onClick={handleLogout}
            className="text-decoration-none text-secondary pt-2 pb-2 justify-content-between d-flex"
            >
              <p className="m-0 p-0 w-auto ">Logout</p>
              <img src={logout} alt="Logout Icon" className="w-auto"/>
  
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboardSidebar;
