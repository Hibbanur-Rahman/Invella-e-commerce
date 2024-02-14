import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboardSidebar = () => {
    return (
        <div className="col-3 m-0 p-0">
            <ul className="list-unstyled">
                <li><Link to="/user/dashboard">Dashboard</Link></li>
                <li><Link to="/user/orders">Orders</Link></li>
                <li><Link to="/user/account-details">Account Details</Link></li>
                <li><Link to="/user/downloads">Downloads</Link></li>
                <li><Link to="/user/address">Address</Link></li>
            </ul>
        </div>
    );
}

export default UserDashboardSidebar;
