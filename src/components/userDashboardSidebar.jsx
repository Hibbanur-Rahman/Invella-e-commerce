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


const UserDashboardSidebar = () => {
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
            to="/user/dashboard"
            className="text-decoration-none text-secondary pt-2 pb-2 justify-content-between d-flex "
          >
           <p className="m-0 p-0 w-auto "> Dashboard</p>
            <img src={dashboardIcon} alt="Dashboard Icon" className="w-auto"/>
          </Link>
        </li>
        <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
          <Link
            to="/user/orders"
            className="text-decoration-none text-secondary pt-2 pb-2 justify-content-between d-flex"
          >
            <p className="m-0 p-0 w-auto ">Orders</p>
            <img src={ordersIcon} alt="Orders Icon" className="w-auto"/>

          </Link>
        </li>
        <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
          <Link
            to="/user/account-details"
            className="text-decoration-none text-secondary pt-2 pb-2 justify-content-between d-flex"
          >
            <p className="m-0 p-0 w-auto ">Account Details</p>
            <img src={profile} alt="profile Icon" className="w-auto"/>

          </Link>
        </li>
        <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
          <Link
            to="/user/downloads"
            className="text-decoration-none text-secondary pt-2 pb-2 justify-content-between d-flex"
          >
            <p className="m-0 p-0 w-auto ">Downloads</p>
            <img src={downloads} alt="Downloads Icon" className="w-auto"/>

          </Link>
        </li>
        <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
          <Link
            to="/user/address"
            className="text-decoration-none text-secondary pt-2 pb-2 justify-content-between d-flex"
          >
           <p className="m-0 p-0 w-auto "> Address</p>
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

export default UserDashboardSidebar;
