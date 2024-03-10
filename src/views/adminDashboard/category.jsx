import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const Category = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryList, setCategoryList] = useState([]);

  const handleViewCategoryList = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.get("http://localhost:8000/view-category", {
        headers: {
          Authorization: token,
        },
      });

      if (response.status == 200) {
        const list = response.data.data.map((listElement) => ({
          ...listElement,
          id: listElement._id,
        }));
        setCategoryList(list);
        console.log(categoryList);
      } else {
        console.log(
          "something wrong in the view category or response from backend"
        );
      }
    } catch (error) {
      console.log("error in the viewing category:", error);
    }
  };
  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
      const response = await axios.post(
        "http://localhost:8000/add-category",
        { categoryName },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response);
      if (response.status === 201) {
        toast.success("Adding successfully");
        setCategoryName("");
        handleViewCategoryList();
      } else {
        toast.error("Failed to add");
      }
    } catch (error) {
      toast.error("Failed to add category");
      console.log("Error: ", error);
    }
  };

  const handleInputChange = (e) => {
    setCategoryName(e.target.value);
  };

  useEffect(() => {
    handleViewCategoryList();
  }, []);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "values",
      headerName: "Values",
      width: 150,
      renderCell: () => (
        <div className="">4</div>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: () => <div className="">...</div>,
    },
  ];
  return (
    <div className="row m-0 p-0">
      <form onSubmit={handleAddCategory}>
        <div className="mb-3">
          <label htmlFor="add-category" className="form-label">
            Add Category
          </label>
          <input
            type="text"
            className="form-control"
            id="addCategory"
            name="categoryName"
            value={categoryName}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>

      <div className="row m-0 p-0">
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={categoryList}
            columns={columns}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
      </div>
    </div>
  );
};

export default Category;
