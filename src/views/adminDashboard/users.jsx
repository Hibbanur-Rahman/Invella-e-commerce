import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net-responsive-dt/css/responsive.dataTables.css";
import $ from "jquery";
import "datatables.net";
import "datatables.net-responsive";
import axios from "axios";
import Cookies from "js-cookie";
const Users = () => {
  const [userList, setUserList] = useState([]);

  const tableRef = useRef(null);
  useEffect(() => {
    $(tableRef.current).DataTable({
      responsive: true,
    });
  }, []);

  const handleUserList = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.get("http://localhost:8000/view-Users", {
        headers: {
          Authorization: token,
        },
      });
      console.log(response);

      if (response.status === 200) {
        // console.log(response.data.data)
        setUserList(response.data.data);
        console.log(userList);
      } else {
        console.log("error in the user data models when viewing");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };
  useEffect(() => {
    handleUserList();
  }, []);
  return (
    <div className="row m-0 p-0 w-100">
      <table ref={tableRef} className="display w-100" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Status</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item, index) => (
            <tr key={index}>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>Rahman@1234</td>
              <td>
                <span className="badge bg-success">Active</span>
              </td>
              <td>crud</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
