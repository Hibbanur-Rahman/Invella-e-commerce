import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
const Address = () => {
  const [billingAddressDetails, setBillingAddressDetails] = useState(null);

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

  useEffect(() => {
    handleViewBillingAddress();
  }, []);
  return (
    <div className="row m-0 p-0">
      <p>
        The following addresses will be used on the checkout page by default
      </p>
      <div className="row m-0 p-0 pt-2">
        <div className="col-6 pe-5">
          <div className="row m-0 p-0 justify-content-between ">
            <h5 className="m-0 p-0 w-auto">Billing address</h5>
            <Link to="/user/billing-address" className="w-auto">
              <button className="border border-0 w-auto badge rounded-pill bg-secondary">
                Add
              </button>
            </Link>
          </div>
          <p>You have not set up this type of address yet</p>

          {billingAddressDetails ?(
            
            <div className="row m-0 p-0">
              <p className="m-0 p-0">{billingAddressDetails.company}</p>
              <p className="m-0 p-0">
                {billingAddressDetails.firstname} {billingAddressDetails.lastname}
              </p>
              <p className="m-0 p-0">
                {billingAddressDetails.street}
              </p>
              <p className="m-0 p-0">{billingAddressDetails.street1}</p>
              <p className="m-0 p-0">{billingAddressDetails.city} {billingAddressDetails.pincode}</p>
              <p className="m-0 p-0">{billingAddressDetails.state}</p>
            </div>
          ):(
            <p>hello</p>
          )
            
          }
        </div>
        <div className="col-6 ps-5">
          <div className="row m-0 p-0 justify-content-between ">
            <h5 className="m-0 p-0 w-auto">Shipping address</h5>
            <Link to="/user/shipping-address" className="w-auto">
              <button className="border border-0 w-auto badge rounded-pill bg-secondary">
                Add
              </button>
            </Link>
          </div>
          <p>You have not set up this type of address yet</p>
          <div className="row m-0 p-0">
            <p className="m-0 p-0">Manuu</p>
            <p className="m-0 p-0">HIBBANUR RAHMAN</p>
            <p className="m-0 p-0">Gacchibowli, Hyderabad,telangana, 500032</p>
            <p className="m-0 p-0">Boys Hostel-3</p>
            <p className="m-0 p-0">Hyderabad 500032</p>
            <p className="m-0 p-0">Telangana</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BillingAddress = () => {
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
  return (
    <div className="row m-0 p-0">
      <h1>Billing Address</h1>
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
  );
};

const ShippingAddress = () => {
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
      }
    } catch (error) {
      console.log("error in adding the shipping address !!");
      toast.error("Failed to add the shipping Address!!");
    }
  };

  const handleInputChange = (e) => {
    setShippingAddress({
      ...ShippingAddressDetails,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="row m-0 p-0">
      <h1>Shipping Address</h1>
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
              value={ShippingAddressDetails.lastname}
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
            value={ShippingAddressDetails.companyname}
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
            value={ShippingAddressDetails.country}
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
            value={ShippingAddressDetails.street}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="form-control mt-3"
            id="street-address"
            placeholder="Apartment, suite, unit, etc. (optional)"
            name="street1"
            value={ShippingAddressDetails.street1}
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
            value={ShippingAddressDetails.city}
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
            value={ShippingAddressDetails.state}
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
            value={ShippingAddressDetails.pincode}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn text-light mt-3">
          SAVE ADDRESS
        </button>
      </form>
    </div>
  );
};

export { Address, BillingAddress, ShippingAddress };
