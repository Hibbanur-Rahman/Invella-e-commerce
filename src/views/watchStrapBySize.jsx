import React, { useEffect, useState } from "react";
import Banner from "../components/banner";
import Items from "../components/items";
import Cookies from "js-cookie";
import axios from "axios";

const WatchStrapBySize = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleProductList = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.get("http://localhost:8000/view-product", {
        headers: {
          Authorization: token,
        },
      });
      console.log(response);
      if (response.status == 200) {
        setProductList(response.data.data);
        setLoading(false);
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
  }, []);
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
            productId={element._id}
            price={element.price}
            description={element.description}
            discountPercent={"-43%"}
            image={`http://localhost:8000/uploads/${element.productImage}`}
          />
        ))}
      </div>
    </>
  );
};

export default WatchStrapBySize;
