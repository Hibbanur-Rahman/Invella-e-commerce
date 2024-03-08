import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import Cookies from "js-cookie";

const Users = () => {
  const [userList, setUserList] = useState([]);

  const columns = [
    {
      field: 'username',
      headerName: 'Name',
      width: 150
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: () => (
        <div className="btn badge bg-success">success</div>
      )
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: () => (
        <div className="">...</div>
      )
    }
  ];

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
        const userData = response.data.data.map(user => ({
          ...user,
          id: user._id // Use _id as the unique identifier for each row
        }));
        setUserList(userData);
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
