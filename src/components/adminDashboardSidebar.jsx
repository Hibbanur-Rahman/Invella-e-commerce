import React from "react";
import { Link } from "react-router-dom";

const AdminDashboardSidebar = () => {
    return (
        <div className="col-3 m-0 p-0">
            <ul className="list-unstyled">
                <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
                    <Link to="/admin/dashboard" className="text-decoration-none text-secondary pt-2 pb-2">Dashboard </Link>
                </li>
                <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
                    <Link to="/admin/orders" className="text-decoration-none text-secondary pt-2 pb-2">Orders</Link>
                </li>
                <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
                    <Link to="/admin/product" className="text-decoration-none text-secondary pt-2 pb-2">Product</Link>
                </li>
                <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
                    <Link to="/admin/category" className="text-decoration-none text-secondary pt-2 pb-2">Category</Link>
                </li>
                <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
                    <Link to="/admin/users-details" className="text-decoration-none text-secondary pt-2 pb-2">Users</Link>
                </li>
                <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
                    <Link to="/admin/account-details" className="text-decoration-none text-secondary pt-2 pb-2">Account Details</Link>
                </li>
                <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
                    <Link to="/admin/downloads" className="text-decoration-none text-secondary pt-2 pb-2">Downloads</Link>
                </li>
                <li className="pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
                    <Link to="/admin/address" className="text-decoration-none text-secondary pt-2 pb-2">Address</Link>
                </li>
            </ul>
        </div>
    );
}


export default AdminDashboardSidebar;