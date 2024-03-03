import React from "react";
import { Routes, Route } from 'react-router-dom'


import AdminDashboardSidebar from "../../components/adminDashboardSidebar";
import Orders from "./orders";
import Dashboard from "./dashboard";
import Product from "./product";
import Category from "./category";
import Users from "./users";
import AccountDetails from "./accountDetails";
import Transactions from "./transactions";


import '../../assets/styles/dashboard.css'
import Reviews from "./reviews";

const AdminDashboard = () => {
    return (
        <div className="row m-0 p-0 justify-content-center pt-5 pb-5">
            <div className="col-10 d-flex">
                <AdminDashboardSidebar />
                <div className="col-10 d-flex ps-5 pe-5">
                    <Routes>
                        <Route path='/' element={<Dashboard/>}/>
                        <Route path='/dashboard' element={<Dashboard/>}/>
                        <Route path='/orders' element={<Orders/>}/>
                        <Route path='/product' element={<Product/>}/>
                        <Route path='/category' element={<Category/>}/>
                        <Route path='/users-details' element={<Users/>}/>
                        <Route path='/account-details' element={<AccountDetails/>}/>
                        <Route path='/transactions' element={<Transactions/>}></Route>
                        <Route path='/reviews' element={<Reviews/>}></Route>
                    </Routes>
                </div>
            </div>

        </div>
    )
}

export default AdminDashboard;