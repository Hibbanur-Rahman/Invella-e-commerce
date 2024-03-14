import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";

import "../assets/styles/productDetails.css";

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [shippingAddressDetails, setShippingAddressDetails] = useState(null);

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

  const handleIncrementQuantity = async (item) => {
    handleCartListView();
    try {
      const newQuantity = parseInt(item.quantity) + 1;
      const token = Cookies.get("token");
      const response = await axios.post(
        "http://localhost:8000/update-cart",
        { productId: item.productId._id, quantity: newQuantity },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response);
      if (response.status == 200) {
        console.log("updated successfully!!");
        handleCartListView();
      }
    } catch (error) {
      console.log("error in updating the quantity:", error);
    }
    handleCartListView();
  };

  const handleDecrementQuantity = async (item) => {
    handleCartListView();
    const token = Cookies.get("token");

    try {
      if (parseInt(item.quantity) === 1) {
        // If the quantity is already 1, remove the item from the cart
        const response = await axios.delete(
          "http://localhost:8000/delete-cart-item",
          {
            data: { productId: item.productId._id },
            headers: {
              Authorization: token,
            },
          }
        );

        if (response.status === 200) {
          toast.success("Product is removed!!");
          handleCartListView(); // Refresh cart after successful removal
        }
      } else {
        // If quantity is more than 1, decrement the quantity
        const newQuantity = parseInt(item.quantity) - 1;
        const response = await axios.post(
          "http://localhost:8000/update-cart",
          { productId: item.productId._id, quantity: newQuantity },
          {
            headers: {
              Authorization: token,
            },
          }
        );

        if (response.status === 200) {
          console.log("Updated successfully!!");
          handleCartListView(); // Refresh cart after successful update
        }
      }
    } catch (error) {
      console.log("Error:", error);
    }
    handleCartListView();
  };

  const handleDeleteItem = async (item) => {
    try {
      const token = Cookies.get("token");
      const response = await axios.delete(
        "http://localhost:8000/delete-cart-item",
        {
          data: { productId: item.productId._id },
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Product is removed!!");
        handleCartListView(); // Refresh cart after successful removal
      }
    } catch (error) {
      console.log("Something went wrong in the deleting the item!!");
    }
  };

  const handleViewShippingAddress = async (req, res) => {
    try {
      const token = Cookies.get("token");
      const response = await axios.get(
        "http://localhost:8000/view-shipping-address",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(response);
      if (response.status == 200) {
        setShippingAddressDetails(response.data.data);
      }
    } catch (error) {
      console.log("error in viweing the shipping Address:", error);
    }
  };

  useEffect(() => {
    handleCartListView();
    handleViewShippingAddress();
  }, []);

  useEffect(() => {
    let total = 0;
    cartList.forEach((item) => {
      total += item.quantity * item.productId.price;
    });
    setTotalAmount(total);
  }, [cartList]);

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
            <div
              className="row m-0 p-0 align-items-center pt-2 pb-2 border border-1 border-start-0 border-end-0"
              id={index}
            >
              <div className="d-flex col-6 align-items-center p-0">
                <i
                  class="bi bi-x-lg w-auto pe-2"
                  onClick={() => handleDeleteItem(item)}
                ></i>
                <img
                  src={`http://localhost:8000/uploads/${item.productId.productImage}`}
                  alt=""
                  style={{ height: "50px", width: "50px" }}
                />
                <p className="m-0 p-0 w-auto ps-3">{item.productId.name}</p>
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
                      <div
                        className="increment d-flex justify-content-center align-items-center border border-1 border-top-0 border-end-0 border-start-0 m-0 p-0"
                        onClick={() => handleIncrementQuantity(item)}
                      >
                        <i class="bi bi-plus-lg w-auto "></i>
                      </div>
                      <div
                        className="decrement d-flex justify-content-center align-items-center m-0 p-0"
                        onClick={() => handleDecrementQuantity(item)}
                      >
                        <i class="bi bi-dash-lg w-auto"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2 m-0 p-0">
                <p className="m-0 p-0 w-auto text-primary fs-5">
                  {item.quantity * item.productId.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-4">
          <div className="card p-4">
            <p className="m-0 p-0 fs-5">CART TOTALS</p>
            <div className="row m-0 p-0 justify-content-between mt-4 border border-1 border-top-0 border-start-0 border-end-0 pb-3">
              <p className="m-0 p-0 w-auto">Subtotal</p>
              <p className="m-0 p-0 w-auto">₹{totalAmount}</p>
            </div>
            <div className="row m-0 p-0 justify-content-between mt-3">
              <p className="m-0 p-0 w-auto">Shipping</p>
              <p className="m-0 p-0 w-auto">Free shipping for all Orders</p>
            </div>
            <div className="row m-0 p-0 justify-content-end mt-3  border border-1 border-top-0 border-start-0 border-end-0 pb-3">
              <p className="m-0 p-0  text-end">Shipping to</p>

              {shippingAddressDetails ? (
                <>
                  <p className="m-0 p-0 text-end">
                    {shippingAddressDetails.street}
                  </p>
                  <p className="m-0 p-0 text-end">
                    {" "}
                    {shippingAddressDetails.city}{" "}
                    {shippingAddressDetails.pincode}
                  </p>
                  <p className="m-0 p-0 text-end">
                    {shippingAddressDetails.state}
                  </p>
                </>
              ) : (
                <p>Adding the shipping address</p>
              )}
            </div>
            <div className="row m-0 p-0 justify-content-between mt-3 align-items-center ">
              <p className="m-0 p-0 w-auto">Total</p>
              <p className="m-0 p-0 w-auto fs-4 text-primary ">
                ₹{totalAmount}.00{" "}
                <span className="m-0 p-0 fs-6 fw-medium ">(includes</span>{" "}
              </p>
              <p className="m-0 p-0 fs-6 fw-medium text-primary text-end">
                ₹640.22 IGST)
              </p>
            </div>
            <div className="row m-0 p-0">
              <Link to="/checkout" className="w-100">
                <button className="btn btn-primary mt-5 fs-6 border border-0  w-100">
                  PROCEED TO CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
