import React from "react";
import { Routes, Route } from "react-router-dom";

import UserDashboardSidebar from "../../components/userDashboardSidebar";
import Dashboard from "./dashboard";
import Orders from "./orders";
import AccountDetails from "./accountDetails";
import Downloads from "./downloads";
import Address from "./addresses";

const UserDashboard = () => {
  return (
    <div className="row m-0 p-0 d-flex ">
      <UserDashboardSidebar />
      <div className="col-9"> {/* Main content area */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/account-details" element={<AccountDetails />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/address" element={<Address />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboard;
