import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";

const Category = () => {
    const [categoryName, setCategoryName] = useState("");

    const handleAddCategory = async (e) => {
        e.preventDefault();
        try {
            const token = Cookies.get('token');
            const response = await axios.post('http://localhost:8000/add-category', { categoryName }, {
                headers: {
                    Authorization: token
                }
            });
            console.log(response);
            if (response.status === 201) {
                toast.success('Adding successfully');
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
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    );
};

export default Category;
