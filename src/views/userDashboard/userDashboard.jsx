import React from "react";
import { Routes, Route } from "react-router-dom";

import UserDashboardSidebar from "../../components/userDashboardSidebar";
import Dashboard from "./dashboard";
import Orders from "./orders";
import AccountDetails from "./accountDetails";
import Downloads from "./downloads";
import{ Address,BillingAddress,ShippingAddress} from "./addresses";

const UserDashboard = () => {
  return (
    <div className="row m-0 p-0 justify-content-center pt-5 pb-5">
      <div className="col-10 d-flex">
        <UserDashboardSidebar />
        <div className="col-10 ps-5 pe-5">
          {" "}
          {/* Main content area */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/account-details" element={<AccountDetails />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/address" element={<Address />} />
            <Route path="/billing-address" element={<BillingAddress />}/>
            <Route path="/shipping-address" element={<ShippingAddress />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
