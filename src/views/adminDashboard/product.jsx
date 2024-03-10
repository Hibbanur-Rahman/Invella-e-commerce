import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";

const Product = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [productDetails, setProductDetails] = useState({
    productName: "",
    price: "",
    stock: "",
    category: "",
    description: "",
    productImage: "",
  });

  const productDetailsFormData = new FormData();

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
      productDetailsFormData.append(
        "productImage",
        productDetails.productImage
      );
      productDetailsFormData.append("productName", productDetails.productName);
      productDetailsFormData.append("price", productDetails.price);
      productDetailsFormData.append("stock", productDetails.stock);
      productDetailsFormData.append("category", productDetails.category);
      productDetailsFormData.append("description", productDetails.description);
      const response = await axios.post(
        "http://localhost:8000/add-product",
        productDetailsFormData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response.status === 201) {
        setProductDetails({
          productName: "",
          price: "",
          stock: "",
          category: "",
          description: "",
          productImage: "",
        });

        handleProductsList();
        toast.success("Product added successfully !!");
      } else {
        toast.error("Failed to add the product!!");
      }
    } catch (error) {
      toast.error("Failed to add the product");
      console.log("Error:", error);
    }
  };

  const handleCategoryList = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.get("http://localhost:8000/view-category", {
        headers: {
          Authorization: token,
        },
      });
      console.log(response);

      if (response.status === 200) {
        console.log("Category viewed successfully");
        setCategoryList(response.data.data);
        console.log(response.data.data);
      } else {
        console.log("Category view failed");
      }
    } catch (error) {
      console.log("Error in category list:", error);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name === "productImage") {
      setProductDetails({ ...productDetails, productImage: e.target.files[0] });
    } else {
      setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    }
  };

  const handleProductsList = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.get("http://localhost:8000/view-product", {
        headers: {
          Authorization: token,
        },
      });

      if (response.status === 200) {
        // Map over the data and add an id property using the _id property
        const productListWithId = response.data.data.map((item) => ({
          ...item,
          id: item._id,
        }));
        setProductList(productListWithId);
        console.log(productListWithId);

        console.log(response.data.data);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    handleProductsList();
  }, []);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 200,
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
    },
    {
      field: "productImage",
      headerName: "Image",
      width: 180,
      renderCell: (params) => (
        <img
          src={`http://localhost:8000/uploads/${params.value}`}
          alt={"productImage"}
          style={{ width: "140px", height: "70px" }}
          className="rounded-3"
        />
      ),
    },
    {
      field: "category",
      headerName: "Category",
      width: 100,
    },
    {
      field: "reviews",
      headerName: "Reviews",
      width: 50,
      renderCell: () => <div>4</div>,
    },
    {
      field: "description",
      headerName: "Description",
      width: 200,
    },
    {
      field: "stock",
      headerName: "Stock Count",
      width: 50,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: () => <div className="btn badge bg-success">Instock</div>,
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: () => <div>...</div>,
    },
  ];
  return (
    <div className="product-table row m-0 p-0 w-100">
      <div className="row justify-content-end ">
        <button
          className="add-product btn bg-transparent  border border-2 rounded-2 w-auto p-3 pt-0 pb-0 btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          type="button"
          onClick={handleCategoryList}
        >
          <p className="p-0 m-0 fs-6">+ Add</p>
        </button>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add Product
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                action="/add-product"
                method="post"
                onSubmit={handleAddProduct}
                enctype="multipart/form-data"
              >
                <div className="mb-3">
                  <label htmlFor="product-name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="product-name"
                    name="productName"
                    value={productDetails.productName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="row m-0 p-0">
                  <div className="mb-3 col-6 ps-0">
                    <label htmlFor="price" className="form-label">
                      Price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="price"
                      name="price"
                      value={productDetails.price}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3 col-6 pe-0">
                    <label htmlFor="stock" className="form-label">
                      Stock
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="stock"
                      name="stock"
                      value={productDetails.stock}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3 ps-0">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <select
                    className="form-select form-select-md"
                    aria-label="Large select example"
                    id="category"
                    name="category"
                    value={productDetails.category}
                    onChange={handleInputChange}
                  >
                    <option value="">Select category</option>
                    {categoryList.map((item, index) => (
                      <option value={item._id} key={index}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3 ps-0">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="description"
                    name="description"
                    value={productDetails.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="formFileMultiple" className="form-label">
                    Product Image
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    accept="image/*"
                    id="formFileMultiple"
                    name="productImage"
                    // value={productDetails.productImage}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-secondary">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*========================== Product Table ============================ */}
     
      <div className="row m-0 p-0 w-100">
        <Box sx={{ height: 500, width: "100%" }}>
          <DataGrid
            rows={productList}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
      </div>
    </div>
  );
};

export default Product;
