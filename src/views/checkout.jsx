import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

import "../assets/styles/productDetails.css";
const Checkout = () => {
  const [cartList, setCartList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [shippingToDifferent, setShippingToDifferent] = useState(false);
  const [information, setInformation] = useState(true);
  const [shippingAfterInformation, setShippingAfterInformation] =
    useState(false);
  const [paymentAfterShipping, setPaymentAfterShipping] = useState(false);

  const [BillingAddressDetails, setBillingAddressDetails] = useState({
    firstname: "",
    lastname: "",
    companyname: "",
    country: "India",
    street: "",
    street1: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    email: "",
  });

  const [ShippingAddressDetails, setShippingAddress] = useState({
    firstname: "",
    lastname: "",
    companyname: "",
    country: "India",
    street: "",
    street1: "",
    city: "",
    state: "",
    pincode: "",
  });

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
        console.log("billing:", BillingAddressDetails);
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
        setShippingAddress(response.data.data);
      }
    } catch (error) {
      console.log("error in viweing the shipping Address:", error);
    }
  };

  const handleBillingAddress = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
      // const decodedUser= decode(token).payload.user._id;

      const response = await axios.post(
        "http://localhost:8000/add-billing-address",
        BillingAddressDetails,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(response);
      if (response.status == 201) {
        toast.success("add billing address successfully!!");
        setBillingAddressDetails({
          firstname: "",
          lastname: "",
          companyname: "",
          country: "India",
          street: "",
          street1: "",
          city: "",
          state: "",
          pincode: "",
          phone: "",
          email: "",
        });
        setTimeout(() => {
          window.location.href = "#/user/address";
        }, 2000);
      }
    } catch (error) {
      console.log("error to add Billing Address:", error);
      toast.error("Failed to adding the billing address!!");
    }
  };

  const handleShippingAddress = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
      const response = await axios.post(
        "http://localhost:8000/add-shipping-address",
        ShippingAddressDetails,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response);
      if (response.status == 201) {
        toast.success("added shipping address successfully!!");
        setShippingAddress({
          firstname: "",
          lastname: "",
          companyname: "",
          country: "India",
          street: "",
          street1: "",
          city: "",
          state: "",
          pincode: "",
        });
        setTimeout(() => {
          window.location.href = "#/user/address";
        }, 2000);
      }
    } catch (error) {
      console.log("error in adding the shipping address !!");
      toast.error("Failed to add the shipping Address!!");
    }
  };
  const handleInputChangeForBilling = (e) => {
    setBillingAddressDetails({
      ...BillingAddressDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleInputChangeForShipping = (e) => {
    setShippingAddress({
      ...ShippingAddressDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleShippingToDifferent = (e) => {
    setShippingToDifferent(e.target.checked);
  };

  const handleInformationButton = () => {
    setInformation(false);
    setShippingAfterInformation(true);
  };
  const handleShippingAfterInformationButton = () => {
    setShippingAfterInformation(false);
    setPaymentAfterShipping(true);
  };

  useEffect(() => {
    handleViewBillingAddress();
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
        <div className="col-7">
          {information ? (
            <div className="col-12">
              <h5 className="m-0 p-0 mb-3">Contact information</h5>
              <form
                action="/add-billing-address"
                method="post"
                onSubmit={handleBillingAddress}
              >
                <div className="row m-0 p-0">
                  <div className="m-0 p-0 mb-3 col-12 pe-0">
                    <label htmlFor="email" className="form-label">
                      Email address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="eg. hibbanrahmanhyt@gmail.com"
                      name="email"
                      value={BillingAddressDetails.email}
                      onChange={handleInputChangeForBilling}
                    />
                  </div>
                  <h5 className="m-0 p-0 mb-3">Billing details</h5>
                  <div className="mb-3 col-6 p-0">
                    <label htmlFor="first-name" className="form-label">
                      First name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="first-name"
                      placeholder="First name"
                      name="firstname"
                      value={BillingAddressDetails.firstname}
                      onChange={handleInputChangeForBilling}
                    />
                  </div>
                  <div className="mb-3 col-6 pe-0">
                    <label htmlFor="last-name" className="form-label">
                      Last name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="last-name"
                      placeholder="Last name"
                      name="lastname"
                      value={BillingAddressDetails.lastname}
                      onChange={handleInputChangeForBilling}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="company-name" className="form-label">
                    Company name (optional)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="company-name"
                    placeholder="Company name"
                    name="companyname"
                    value={BillingAddressDetails.companyname}
                    onChange={handleInputChangeForBilling}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">
                    Country / Region <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    placeholder="India"
                    name="country"
                    value={BillingAddressDetails.country}
                    onChange={handleInputChangeForBilling}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="street-address" className="form-label">
                    Street address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="street-address"
                    placeholder="House number and street name"
                    name="street"
                    value={BillingAddressDetails.street}
                    onChange={handleInputChangeForBilling}
                  />
                  <input
                    type="text"
                    className="form-control mt-3"
                    id="street-address"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    name="street1"
                    value={BillingAddressDetails.street1}
                    onChange={handleInputChangeForBilling}
                  />
                </div>
                <div className="row m-0 p-0">
                  <div className="ms-0 ps-0 mb-3 col-4">
                    <label htmlFor="city" className="form-label">
                      Town / City <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="eg. Patna, Hyderabad"
                      name="city"
                      value={BillingAddressDetails.city}
                      onChange={handleInputChangeForBilling}
                    />
                  </div>
                  <div className="mb-3 col-4">
                    <label htmlFor="state" className="form-label">
                      State <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="state"
                      placeholder="eg. Bihar, Telangana"
                      name="state"
                      value={BillingAddressDetails.state}
                      onChange={handleInputChangeForBilling}
                    />
                  </div>
                  <div className="pe-0 mb-3 col-4">
                    <label htmlFor="pincode" className="form-label">
                      PIN Code <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="pincode"
                      placeholder="eg. 847301"
                      name="pincode"
                      value={BillingAddressDetails.pincode}
                      onChange={handleInputChangeForBilling}
                    />
                  </div>
                </div>

                <div className="row m-0 p-0">
                  <div className="mb-3 col-12 p-0">
                    <label htmlFor="phone" className="form-label">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="eg. +91-9973152523"
                      name="phone"
                      value={BillingAddressDetails.phone}
                      onChange={handleInputChangeForBilling}
                    />
                  </div>
                </div>
              </form>
              <div className="row m-0 p-0">
                <input
                  type="checkbox"
                  className="w-auto"
                  onChange={handleShippingToDifferent}
                  value={shippingToDifferent}
                />
                <p className="m-0 p-0 ps-2 w-auto">
                  Ship to a different address ?
                </p>
              </div>
              {shippingToDifferent ? (
                <form
                  action="/add-shipping-address"
                  method="post"
                  onSubmit={handleShippingAddress}
                >
                  <div className="row m-0 p-0">
                    <div className="mb-3 col-6 p-0">
                      <label htmlFor="first-name" className="form-label">
                        First name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="first-name"
                        placeholder="First name"
                        name="firstname"
                        value={ShippingAddressDetails.firstname}
                        onChange={handleInputChangeForShipping}
                      />
                    </div>
                    <div className="mb-3 col-6 pe-0">
                      <label htmlFor="last-name" className="form-label">
                        Last name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="last-name"
                        placeholder="Last name"
                        name="lastname"
                        value={ShippingAddressDetails.lastname}
                        onChange={handleInputChangeForShipping}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="company-name" className="form-label">
                      Company name (optional)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="company-name"
                      placeholder="Company name"
                      name="companyname"
                      value={ShippingAddressDetails.companyname}
                      onChange={handleInputChangeForShipping}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="country" className="form-label">
                      Country / Region <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      placeholder="India"
                      name="country"
                      value={ShippingAddressDetails.country}
                      onChange={handleInputChangeForShipping}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="street-address" className="form-label">
                      Street address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="street-address"
                      placeholder="House number and street name"
                      name="street"
                      value={ShippingAddressDetails.street}
                      onChange={handleInputChangeForShipping}
                    />
                    <input
                      type="text"
                      className="form-control mt-3"
                      id="street-address"
                      placeholder="Apartment, suite, unit, etc. (optional)"
                      name="street1"
                      value={ShippingAddressDetails.street1}
                      onChange={handleInputChangeForShipping}
                    />
                  </div>
                  <div className="row m-0 p-0">
                    <div className="mb-3 col-4 ps-0">
                      <label htmlFor="city" className="form-label">
                        Town / City <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="eg. Patna, Hyderabad"
                        name="city"
                        value={ShippingAddressDetails.city}
                        onChange={handleInputChangeForShipping}
                      />
                    </div>
                    <div className="mb-3 col-4">
                      <label htmlFor="state" className="form-label">
                        State <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="state"
                        placeholder="eg. Bihar, Telangana"
                        name="state"
                        value={ShippingAddressDetails.state}
                        onChange={handleInputChangeForShipping}
                      />
                    </div>
                    <div className="mb-3 col-4 pe-0">
                      <label htmlFor="pincode" className="form-label">
                        PIN Code <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="pincode"
                        placeholder="eg. 847301"
                        name="pincode"
                        value={ShippingAddressDetails.pincode}
                        onChange={handleInputChangeForShipping}
                      />
                    </div>
                  </div>
                </form>
              ) : (
                <></>
              )}

              <div className="row m-0 p-0 justify-content-between mt-5">
                <p className="m-0 p-0 text-secondary w-auto">RETURN TO CART</p>
                <button
                  className="btn text-light w-auto"
                  onClick={handleInformationButton}
                >
                  CONTINUE TO SHIPPING
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
          {shippingAfterInformation ? (
            <div className="col-12">
              <div className=" card p-3 mb-5">
                <div className="row m-0 p-3 ps-0 pe-0 border border-1 border-top-0 border-start-0 border-end-0">
                  <div className="col-2 text-secondary m-0 p-0">Contact</div>
                  <div className="col-8 m-0 p-0">hibbanrahmandbg@gmail.com</div>
                  <div className="col-2 text-secondary text-end m-0 p-0">
                    change
                  </div>
                </div>
                <div className="row m-0 p-3 ps-0 pe-0 border border-1 border-top-0 border-start-0 border-end-0">
                  <div className="col-2 text-secondary m-0 p-0">Ship to</div>
                  <div className="col-8 m-0 p-0">
                    Gacchibowli,Boys Hostel-3,Hyderabad 500032,Telangana
                  </div>
                  <div className="col-2 text-secondary text-end m-0 p-0">
                    change
                  </div>
                </div>
                <div className="row m-0 p-3 ps-0 pe-0 ">
                  <div className="col-2 text-secondary m-0 p-0">Method</div>
                  <div className="col-8 m-0 p-0">
                    Free shipping for all Orders
                  </div>
                  <div className="col-2 text-secondary text-end m-0 p-0">
                    change
                  </div>
                </div>
              </div>

              <h5 className="m-0 p-0">Shipping Methods</h5>
              <div className="m-0 p-0 mt-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="shippingMethods"
                  placeholder=""
                  name="shippingMethods"
                  value="Free shipping for all Orders"
                  disabled
                />
              </div>
              <div className="m-0 p-0 mb-3 mt-5">
                <label htmlFor="email" className="form-label text-danger">
                  Your Watch Model Name <span className="text-danger">*</span>
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="orderNote"
                  placeholder="Example: Seiko 5 Sport SRPK29K1"
                  name="orderNote"
                  value=""
                  onChange=""
                  required
                />
                <p className="m-0 p-0 text-danger fs-6 opacity-50 ">
                  Your Watch Model Name is a required field
                </p>
              </div>

              <div className="row m-0 p-0 justify-content-between mt-5">
                <p className="m-0 p-0 text-secondary w-auto">RETURN TO CART</p>
                <button
                  className="btn text-light w-auto"
                  onClick={handleShippingAfterInformationButton}
                >
                  CONTINUE TO PAYMENT
                </button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {paymentAfterShipping ? (
            <div className="col-12">
              <div className=" card p-3 mb-5">
                <div className="row m-0 p-3 ps-0 pe-0 border border-1 border-top-0 border-start-0 border-end-0">
                  <div className="col-2 text-secondary m-0 p-0">Contact</div>
                  <div className="col-8 m-0 p-0">hibbanrahmandbg@gmail.com</div>
                  <div className="col-2 text-secondary text-end m-0 p-0">
                    change
                  </div>
                </div>
                <div className="row m-0 p-3 ps-0 pe-0 border border-1 border-top-0 border-start-0 border-end-0">
                  <div className="col-2 text-secondary m-0 p-0">Ship to</div>
                  <div className="col-8 m-0 p-0">
                    Gacchibowli,Boys Hostel-3,Hyderabad 500032,Telangana
                  </div>
                  <div className="col-2 text-secondary text-end m-0 p-0">
                    change
                  </div>
                </div>
                <div className="row m-0 p-3 ps-0 pe-0 ">
                  <div className="col-2 text-secondary m-0 p-0">Method</div>
                  <div className="col-8 m-0 p-0">
                    Free shipping for all Orders
                  </div>
                  <div className="col-2 text-secondary text-end m-0 p-0">
                    change
                  </div>
                </div>
              </div>
              <h5 className="m-0 p-0 mb-3">Payment Methods</h5>
              <p className="m-0 p-0 mb-4 mt-3">
                All transactions are secure and encrypted
              </p>

              <div className="card p-4">
                <div className="row m-0 p-0 pb-3">
                  <input type="radio" className="w-auto" />
                  <p className="m-0 p-0 w-auto ps-2">Paytm Payment Gateway</p>
                </div>
                <div className="row m-0 p-0 pt-3 border border-1 border-bottom-0 border-start-0 border-end-0">
                  <input type="radio" className="w-auto" />
                  <p className="m-0 p-0 w-auto ps-2">
                    Cash on Delivery(₹59 Rs Extra)
                  </p>
                </div>
                <p className="m-0 p-0 ps-3 pt-4">
                  Pay with cash upon delivery(₹59.00 of added fee).
                </p>
              </div>
              <p className="m-0 p-0 text-secondary mt-4">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>
              <div className="row m-0 p-0 mt-5">
                <input type="checkbox" name="" id="" className="w-auto" />
                <p className="m-0 p-0 w-auto ps-2">
                  I have read and agree to the website terms and conditions
                  <span className="text-danger ps-1">*</span>
                </p>
              </div>
              <div className="row m-0 p-0 mt-4">
                <Link to='/order-received' className="w-100 p-0 m-0">
                  <button className="btn text-light w-100">PLACE ORDER</button>
                </Link>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div className="col-5 bg-light p-5">
          {cartList ? (
            cartList.map((item) => (
              <div className="row m-0 p-0 pt-3 mt-3 align-items-center ">
                <div className="col-2">
                  <div className="w-auto product-image rounded-3">
                    <img
                      src={`http://localhost:8000/uploads/${item.productId.productImage}`}
                      alt=""
                      className="rounded-3 border border-1"
                    />
                    <span class="quantity-badge badge bg-secondary position-absolute rounded-circle">
                      {item.quantity}
                    </span>
                  </div>
                </div>
                <div className="col-6 ps-4">
                  <h6 className="w-auto m-0 p-0">{item.productId.name}</h6>
                </div>
                <div className="col-4">
                  <p className="m-0 p-0 fw-medium text-end">
                    ₹{item.productId.price * item.quantity}.00
                  </p>
                </div>
              </div>
            ))
          ) : (
            <>
              <p>Add the product first</p>
            </>
          )}

          <div className="row m-0 p-0 border border-1 border-bottom-0 border-start-0 border-end-0 pt-3 mt-3">
            <div className="row m-0 p-0 justify-content-between ">
              <p className="fw-medium m-0 p-0 w-auto">Subtotal</p>
              <p className="m-0 p-0 w-auto text-primary fw-medium fs-5">
                ₹{totalAmount}.00
              </p>
            </div>
            <div className="row m-0 p-0 justify-content-between mt-3">
              <p className="fw-medium m-0 p-0 w-auto">Shipping</p>
              <p className="m-0 p-0 w-auto">Free Shipping for all Orders</p>
            </div>
            <div className="row m-0 p-0 justify-content-between mt-4">
              <p className="fw-medium m-0 p-0 w-auto fs-5">Total</p>
              <p className="m-0 p-0 w-auto fs-4">
                ₹{totalAmount}.00
                <br /> <span className="m-0 p-0 fs-6">(includes Gst)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
