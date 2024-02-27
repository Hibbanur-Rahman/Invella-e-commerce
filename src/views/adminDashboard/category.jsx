import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
const Category = () => {

    const [categoryName, setCategoryName] = useState(null);
    const handleAddCategory = async (e) => {
        e.preventDefault();
        try {
            const token = Cookies.get('token');
            const response = await axios.post('http://localhost:8000/add-category', { categoryName }, {
                headers: {
                    Authorization: token
                }
            })
            console.log(response);
            if (response.status === 201) {
                toast.success('adding successfully')
            } else {
                toast.error("failed to adding");
            }
        } catch (error) {
            toast.error("Failed to adding category")
            console.log("error is: ", error);
        }
    }
    const handleInputChange = (e) => {
        setCategoryName(e.target.value)
    }
    return (
        <div className="row m-0 p-0">
            <form action="/add-category"
                method="post"
                onSubmit={handleAddCategory}
            >
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
                <button className="btn" onSubmit={handleAddCategory}>Submit</button>
            </form>
        </div>
    )
}


export default Category;