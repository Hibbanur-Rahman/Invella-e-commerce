import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import axios from "axios";

import '../assets/styles/productDetails.css'

const Cart = () => {
  const [cartList, setCartList] = useState([]);

  const handleCartListView = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.get("http://localhost:8000/view-cart", {
        headers: {
          Authorization: token,
        },
      });
      console.log(response);
      if (response.status === 200) {
        setCartList(response.data.data.cartItems);
      }
    } catch (error) {
      console.log("something is wrong with viewing cartList:", error);
    }
  };


  const handleIncrementQuantity=()=>{

  }

  const handleDecrementQuantity=()=>{
    
  }
  useEffect(() => {
    handleCartListView();
  }, []);



  return (
    <div className="row m-0 p-0 justify-content-center pt-5 pb-5">
      <div className="row col-10 m-0 p-0">
        <div className="col-8">
          <div className="row m-0 p-0 pb-2 border border-2 border-top-0 border-start-0 border-end-0">
            <h6 className="m-0 p-0 col-6">PRODUCT</h6>
            <h6 className="m-0 p-0 col-2">PRICE</h6>
            <h6 className="m-0 p-0 col-2">QUANTITY</h6>
            <h6 className="m-0 p-0 col-2">SUBTOTAL</h6>
          </div>
          {cartList.map((item, index) => (
            <div className="row m-0 p-0 align-items-center pt-2 pb-2 border border-1 border-start-0 border-end-0" id={index}>
              <div className="d-flex col-6 align-items-center p-0">
                <i class="bi bi-x-lg w-auto pe-2"></i>
                <img
                  src={`http://localhost:8000/uploads/${item.productId.productImage}`}
                  alt=""
                  style={{ height: "50px", width: "50px" }}
                />
                <p className="m-0 p-0 w-auto ps-3">
                  {item.productId.name}
                </p>
              </div>
              <div className="col-2 m-0 p-0 align-items-center">
                <p className="m-0 p-0 w-auto fs-5">{item.productId.price} </p>
              </div>
              <div className="col-2 m-0 p-0">
                <div className="col-8  m-0 p-0 pe-2 ">
                  <div className=" row  m-0 p-0 border border-1 rounded-2  ">
                    <div className="col-8 m-0 p-0 d-flex justify-content-center align-items-center border border-1 border-start-0 border-top-0 border-bottom-0">
                      <p className="m-0 p-0 text-center fs-4 text-secondary ">
                        {item.quantity}
                      </p>
                    </div>
                    <div className="col-4 m-0 p-0">
                      <div className="increment d-flex justify-content-center align-items-center border border-1 border-top-0 border-end-0 border-start-0 m-0 p-0" onClick={handleIncrementQuantity}>
                        <i class="bi bi-plus-lg w-auto "></i>
                      </div>
                      <div className="decrement d-flex justify-content-center align-items-center m-0 p-0" onClick={handleDecrementQuantity}>
                        <i class="bi bi-dash-lg w-auto"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2 m-0 p-0">
                <p className="m-0 p-0 w-auto text-primary fs-5">{item.quantity*item.productId.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-4">
          <div className="card p-4">
            <p className="m-0 p-0 fs-5">CART TOTALS</p>
            <div className="row m-0 p-0 justify-content-between mt-4 border border-1 border-top-0 border-start-0 border-end-0 pb-3">
              <p className="m-0 p-0 w-auto">Subtotal</p>
              <p className="m-0 p-0 w-auto">₹1,599.00</p>
            </div>
            <div className="row m-0 p-0 justify-content-between mt-3">
              <p className="m-0 p-0 w-auto">Shipping</p>
              <p className="m-0 p-0 w-auto">Free shipping for all Orders</p>
            </div>
            <div className="row m-0 p-0 justify-content-end mt-3  border border-1 border-top-0 border-start-0 border-end-0 pb-3">
              <p className="m-0 p-0  text-end">Shipping to</p>
              <p className="m-0 p-0 text-end">
                Gacchibowli,Hyderabad,telangana
              </p>
              <p className="m-0 p-0 text-end">500032,Hyderabad,500032</p>
              <p className="m-0 p-0 text-end">Telangana</p>
            </div>
            <div className="row m-0 p-0 justify-content-between mt-3 align-items-center ">
              <p className="m-0 p-0 w-auto">Total</p>
              <p className="m-0 p-0 w-auto fs-4 text-primary ">
                ₹1,599.00{" "}
                <span className="m-0 p-0 fs-6 fw-medium ">(includes</span>{" "}
              </p>
              <p className="m-0 p-0 fs-6 fw-medium text-primary text-end">
                ₹640.22 IGST)
              </p>
            </div>
            <button className="btn btn-primary mt-5 fs-6 border border-0  ">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
