import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net-responsive-dt/css/responsive.dataTables.css";
import $ from "jquery";
import "datatables.net";
import "datatables.net-responsive";

const Category = () => {
  const tableRef = useRef(null);
  const [categoryName, setCategoryName] = useState("");
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    if (!$.fn.DataTable.isDataTable(tableRef.current)) {
      // Initialize DataTable only if it hasn't been initialized yet
      $(tableRef.current).DataTable({
        responsive: true,
      });
    }
  }, [categoryList]);
  const handleViewCategoryList = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.get("http://localhost:8000/view-category", {
        headers: {
          Authorization: token,
        },
      });

      if (response.status == 200) {
        setCategoryList(response.data.data);
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
        setCategoryName('');
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
      <table ref={tableRef} className="display w-100" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>values</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {categoryList.map((item, index) => (
            <tr className="pt-3 pb-3" key={item._id}>
              <td>{item.name}</td>
              <td>4</td>
              <td>
                <span className="badge bg-success">Instock</span>
              </td>
            </tr>
          ))}

          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Category;
