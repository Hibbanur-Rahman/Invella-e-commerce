import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import "../assets/styles/productDetails.css";
import productImage1 from "../assets/images/product-details-1.webp";
const Checkout = () => {
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

  const handleInputChange = (e) => {
    setBillingAddressDetails({
      ...BillingAddressDetails,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    handleViewBillingAddress();
  }, []);
  return (
    <div className="row m-0 p-0 justify-content-center pt-5 pb-5">
      <div className="row col-10 m-0 p-0">
        <div className="col-7">
          <h5 className="m-0 p-0">Contact information</h5>
          <form
            action="/add-billing-address"
            method="post"
            onSubmit={handleBillingAddress}
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
                  value={BillingAddressDetails.firstname}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="form-control mt-3"
                id="street-address"
                placeholder="Apartment, suite, unit, etc. (optional)"
                name="street1"
                value={BillingAddressDetails.street1}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
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
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
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
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
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
                onChange={handleInputChange}
              />
            </div>
            <div className="row m-0 p-0">
              <div className="mb-3 col-6 p-0">
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
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3 col-6 pe-0">
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
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <button className="btn text-light mt-3" type="submit">
              SAVE ADDRESS
            </button>
          </form>
        </div>
        <div className="col-5 bg-light">
          <div className="row m-0 p-0 pt-3 mt-3 align-items-center ">
            <div className="col-2">
              <div className="w-auto product-image rounded-3">
                <img src={productImage1} alt="" className="rounded-3 border border-1" />
                <span class="quantity-badge badge bg-secondary position-absolute rounded-circle">
                  1
                </span>
              </div>
            </div>
            <div className="col-6 ps-4">
              <h6 className="w-auto m-0 p-0">
                Casio G-Shock GA-110 Watch Strap with Watchcase-(Army Grey)
              </h6>
            </div>
            <div className="col-4">
                <p className="m-0 p-0 fw-medium text-end">₹1,599.00</p>
            </div>
          </div>
          <div className="row m-0 p-0 pt-3 mt-3 align-items-center ">
            <div className="col-2">
              <div className="w-auto product-image rounded-3">
                <img src={productImage1} alt="" className="rounded-3 border border-1" />
                <span class="quantity-badge badge bg-secondary position-absolute rounded-circle">
                  1
                </span>
              </div>
            </div>
            <div className="col-6 ps-4">
              <h6 className="w-auto m-0 p-0">
                Casio G-Shock GA-110 Watch Strap with Watchcase-(Army Grey)
              </h6>
            </div>
            <div className="col-4">
                <p className="m-0 p-0 fw-medium text-end">₹1,599.00</p>
            </div>
          </div>
          <div className="row m-0 p-0 pt-3 mt-3 align-items-center ">
            <div className="col-2">
              <div className="w-auto product-image rounded-3">
                <img src={productImage1} alt="" className="rounded-3 border border-1" />
                <span class="quantity-badge badge bg-secondary position-absolute rounded-circle">
                  1
                </span>
              </div>
            </div>
            <div className="col-6 ps-4">
              <h6 className="w-auto m-0 p-0">
                Casio G-Shock GA-110 Watch Strap with Watchcase-(Army Grey)
              </h6>
            </div>
            <div className="col-4">
                <p className="m-0 p-0 fw-medium text-end">₹1,599.00</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Checkout;
