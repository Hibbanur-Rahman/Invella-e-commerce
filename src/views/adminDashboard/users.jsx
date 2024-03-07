import React, { useEffect, useRef, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import Cookies from "js-cookie";
const Users = () => {
  const [userList, setUserList] = useState([]);

  const columns=[
    {
      field:'username',
      headerName:'Name',
      width:90
    },
    {
      field:'email',
      headerName:'Email',
      width:150
    },
    {
      field:'status',
      headerName:'Status',
      width: 150,
      renderCell: (params) => (
        <div className="btn badge">{params.value}</div>
      )
    },
    {
      field:'action',
      headerName:'Action',
      width:150
    }
  ]


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
      {/* <table ref={tableRef} className="display w-100" style={{ width: "100%" }}>
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
      </table> */}
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={userList}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default Users;
