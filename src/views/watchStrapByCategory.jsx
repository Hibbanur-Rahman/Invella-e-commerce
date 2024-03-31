import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/banner";
import Items from "../components/items";
import Cookies from "js-cookie";
import axios from "axios";

const WatchStrapByCategory = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { categoryName } = useParams();

  const handleProductList = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.post("http://54.86.160.111:8000/view-product-category", { categoryName }, {
        headers: {
          Authorization: token,
        },
      });
      console.log(response);
      if (response.status === 200) {
        setProductList(response.data.data);
        setLoading(false);
        setError(false)
        console.log(response.data.data);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log("error:", error);
    }
  };

  useEffect(() => {
    handleProductList();
  }, [categoryName]); // Fetch products whenever categoryName changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <>
      <Banner head="WATCH STRAP BY SIZES" path="Home / Watch Straps By Size" />
      <div className="row m-0 p-0 mt-5">
        {productList.map((element, index) => (
          <Items
            key={index} // Add key prop for list rendering
            productId={element._id}
            price={element.price}
            description={element.description}
            discountPercent={"-43%"}
            image={`http://54.86.160.111:8000/uploads/${element.productImage}`}
          />
        ))}
      </div>
    </>
  );
};

export default WatchStrapByCategory;
