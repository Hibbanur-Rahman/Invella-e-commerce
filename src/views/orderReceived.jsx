import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "../assets/styles/productDetails.css";
const OrderReceived = () => {
  const [billingAddressDetails, setBillingAddressDetails] = useState(null);
  const [shippingAddressDetails, setShippingAddressDetails] = useState(null);

  const handleViewBillingAddress = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.get(
        "http://localhost:8000/view-billing-address",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response);
      if (response.status == 200) {
        setBillingAddressDetails(response.data.data);
        console.log("billing:", billingAddressDetails);
      }
    } catch (error) {
      console.log("error in viewing BillingAddress:", error);
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
    handleViewBillingAddress();
    handleViewShippingAddress();
  }, []);
  return (
    <div className=" order-received row m-0 p-0 justify-content-center pt-5 pb-5">
      <div className="row col-9 m-0 p-0">
        <p className="m-0 p-0 text-center text-success thank-text fs-5 mb-4">
          Thank you. Your order has been received
        </p>
        <div className="card p-3 d-fle x flex-row">
          <div className="col-3 m-0 pb-4 d-flex flex-column  align-items-center justify-content-center border border-1 border-start-0 border-top-0 border-bottom-0 ">
            <p className="m-0 p-0 w-auto text-secondary">Order Number</p>
            <p className="m-0 p-0 w-auto fw-medium">2389378</p>
          </div>
          <div className="col-3 m-0 pb-4 d-flex flex-column  align-items-center justify-content-center border border-1 border-start-0 border-top-0 border-bottom-0 ">
            <p className="m-0 p-0 w-auto text-secondary">Date</p>
            <p className="m-0 p-0 w-auto fw-medium">March 15, 2024</p>
          </div>
          <div className="col-3 m-0 pb-4 d-flex flex-column  align-items-center justify-content-center border border-1 border-start-0 border-top-0 border-bottom-0 ">
            <p className="m-0 p-0 w-auto text-secondary">Total</p>
            <p className="m-0 p-0 w-auto fw-medium">₹458.00</p>
          </div>
          <div className="col-3 m-0 pb-4 d-flex flex-column  align-items-center justify-content-center ">
            <p className="m-0 p-0 w-auto text-secondary">Payment Method</p>
            <p className="m-0 p-0 w-auto fw-medium">
              Cash on delivery(59Rs Extra)
            </p>
          </div>
        </div>
        <p className="m-0 p-0 text-secondary mt-3">
          You will pay to the courier upon delivery of the order
        </p>
        <h3 className="m-0 p-0 text-center mt-5 mb-4">Order Details</h3>
        <div className="row m-0 p-0 border border-1 rounded-2 overflow-hidden ">
          <div className="row m-0 p-0 justify-content-between p-3">
            <p className="m-0 p-0 w-auto">
              invella Strap for Samsung Galaxy Fit SM-R370x1
            </p>
            <p className="m-0 p-0 w-auto">₹399.00</p>
          </div>
          <div className="row m-0 p-0 bg-light border border-1 border-start-0 border-end-0  border-bottom-0">
            <div className="row m-0 p-2 justify-content-between ps-3 pe-3">
              <p className="m-0 p-0 w-auto fw-medium ">Subtotal:</p>
              <p className="m-0 p-0 w-auto">₹399.00</p>
            </div>
            <div className="row m-0 p-2 justify-content-between ps-3 pe-3">
              <p className="m-0 p-0 w-auto fw-medium ">Shipping:</p>
              <p className="m-0 p-0 w-auto">Free shipping for all Orders</p>
            </div>
            <div className="row m-0 p-2 justify-content-between ps-3 pe-3">
              <p className="m-0 p-0 w-auto fw-medium ">
                Cash on delivery fee (ex.VAT):
              </p>
              <p className="m-0 p-0 w-auto">₹59.00</p>
            </div>
            <div className="row m-0 p-2 justify-content-between ps-3 pe-3">
              <p className="m-0 p-0 w-auto fw-medium ">Payment method:</p>
              <p className="m-0 p-0 w-auto">
                cash on Delivery ( Rs 59.00 Extra)
              </p>
            </div>
            <div className="row m-0 p-2 justify-content-between ps-3 pe-3">
              <p className="m-0 p-0 w-auto fw-medium ">Total:</p>
              <p className="m-0 p-0 w-auto fw-medium fs-5">
                ₹458.00{" "}
                <span className="fs-6 fw-light ">(includes ₹60.86 IGST )</span>
              </p>
            </div>
            <div className="row m-0 p-2 justify-content-between ps-3 pe-3  border border-1 border-start-0 border-end-0 border-bottom-0 ">
              <p className="m-0 p-0 w-auto fw-medium fs-5">NOTE:</p>
              <p className="m-0 p-0 w-auto ">
                invella Strap for Samsung Galaxy Fit SM-R370
              </p>
            </div>
          </div>
        </div>

        <div className="row m-0 p-0 pt-4">
          <div className="col-6  p-0 pe-5">
            <div className="row m-0 p-0 justify-content-between ">
              <h5 className="m-0 p-0 w-auto mb-3">Billing address</h5>
            </div>

            {billingAddressDetails ? (
              <div className="row m-0 p-0">
                <p className="m-0 p-0">{billingAddressDetails.companyname}</p>
                <p className="m-0 p-0">
                  {billingAddressDetails.firstname}{" "}
                  {billingAddressDetails.lastname}
                </p>
                <p className="m-0 p-0">{billingAddressDetails.street}</p>
                <p className="m-0 p-0">{billingAddressDetails.street1}</p>
                <p className="m-0 p-0">
                  {billingAddressDetails.city} {billingAddressDetails.pincode}
                </p>
                <p className="m-0 p-0">{billingAddressDetails.state}</p>
              </div>
            ) : (
              <p>You have not set up this type of address yet</p>
            )}
          </div>
          <div className="col-6 ps-5">
            <div className="row m-0 p-0 justify-content-between ">
              <h5 className="m-0 p-0 w-auto mb-3">Shipping address</h5>
            </div>

            {shippingAddressDetails ? (
              <div className="row m-0 p-0">
                <p className="m-0 p-0">{shippingAddressDetails.companyname}</p>
                <p className="m-0 p-0">
                  {shippingAddressDetails.firstname}{" "}
                  {shippingAddressDetails.lastname}
                </p>
                <p className="m-0 p-0">{shippingAddressDetails.street}</p>
                <p className="m-0 p-0">{shippingAddressDetails.street1}</p>
                <p className="m-0 p-0">
                  {shippingAddressDetails.city} {shippingAddressDetails.pincode}
                </p>
                <p className="m-0 p-0">{shippingAddressDetails.state}</p>
              </div>
            ) : (
              <p>You have not set up this type of address yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReceived;
