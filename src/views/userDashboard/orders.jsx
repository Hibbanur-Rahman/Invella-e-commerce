import React from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const Orders = () => {

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 150,
      editable: true
    },
    {
      field: 'total',
      headerName: 'Total',
      width: 150,
      editable: true
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: true,
      renderCell: (params) => (
        <div className="btn badge bg-success">{params.value}</div>
      )
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      editable: true
    }
  ];

  const rows = [
    {
      id: '100', name: 'Hibban', date: 'May 2023', total: '1023', status: 'success', action: '..'
    }
  ];

  return (
    <div className="row m-0 p-0">
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default Orders;
