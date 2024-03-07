import React, { useEffect, useRef } from "react";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net-responsive-dt/css/responsive.dataTables.css";
import $ from "jquery";
import "datatables.net";
import "datatables.net-responsive";
const Orders = () => {
  const tableRef = useRef(null);
  useEffect(() => {
    $(tableRef.current).DataTable({
      responsive: true,
    });
  }, []);

  return (
    <div className="row m-0 p-0">
      <table ref={tableRef} className="display w-100" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#3210</td>
            <td>Cortie Gemson</td>
            <td> May 23,2021</td>
            <td>Rs 132.00</td>
            <td><button className="border border-0 w-auto badge rounded-pill bg-secondary">
                  Complteed
                </button></td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
