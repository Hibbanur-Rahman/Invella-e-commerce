import React from "react";
import { Routes, Route } from 'react-router-dom'


import AdminDashboardSidebar from "../../components/adminDashboardSidebar";
import Orders from "./orders";
import Dashboard from "./dashboard";
import Product from "./product";
import Category from "./category";
import Users from "./users";
import AccountDetails from "./accountDetails";

import '../../assets/styles/dashboard.css'
const AdminDashboard = () => {
    return (
        <div className="row m-0 p-0 justify-content-center pt-5 pb-5">
            <div className="col-10 d-flex">
                <AdminDashboardSidebar />
                <div className="col-10 d-flex">
                    <Routes>
                        <Route path='/' element={<Dashboard/>}/>
                        <Route path='/dashboard' element={<Dashboard/>}/>
                        <Route path='/orders' element={<Orders/>}/>
                        <Route path='/product' element={<Product/>}/>
                        <Route path='/category' element={<Category/>}/>
                        <Route path='/users-details' element={<Users/>}/>
                        <Route path='/account-details' element={<AccountDetails/>}/>
                    </Routes>
                </div>
            </div>

        </div>
    )
}

export default AdminDashboard;