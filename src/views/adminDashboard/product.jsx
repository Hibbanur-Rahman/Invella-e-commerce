import React, { useEffect, useRef } from 'react';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net-responsive-dt/css/responsive.dataTables.css';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-responsive';

const Product = () => {
    const tableRef = useRef(null);

    useEffect(() => {
        $(tableRef.current).DataTable({
            responsive: true
        });
    }, []);

    return (
        <div className="row m-0 p-0">
            <table ref={tableRef} className="display" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011-04-25</td>
                        <td>$320,800</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            
            </table>
        </div>

    );
};

export default Product;
