import React from "react";
import { Link } from "react-router-dom";
const Address = () => {
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
        </div>
      </div>
    </div>
  );
};

const BillingAddress = () => {
  return (
    <div className="row m-0 p-0">
      <h1>Billing Address</h1>
      <form action="">
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
              value=""
              onChange=""
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
              value=""
              onChange=""
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
            value=""
            onChange=""
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
            value=""
            onChange=""
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
            value=""
            onChange=""
          />
          <input
            type="text"
            className="form-control mt-3"
            id="street-address"
            placeholder="Apartment, suite, unit, etc. (optional)"
            name="street"
            value=""
            onChange=""
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
            value=""
            onChange=""
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
            value=""
            onChange=""
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
            value=""
            onChange=""
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
              value=""
              onChange=""
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
              value=""
              onChange=""
            />
          </div>
        </div>

        <button className="btn text-light mt-3">SAVE ADDRESS</button>
      </form>
    </div>
  );
};

const ShippingAddress = () => {
  return (
    <div className="row m-0 p-0">
      <h1>Shipping Address</h1>
      <form action="">
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
              value=""
              onChange=""
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
              value=""
              onChange=""
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
            value=""
            onChange=""
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
            value=""
            onChange=""
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
            value=""
            onChange=""
          />
          <input
            type="text"
            className="form-control mt-3"
            id="street-address"
            placeholder="Apartment, suite, unit, etc. (optional)"
            name="street"
            value=""
            onChange=""
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
            value=""
            onChange=""
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
            value=""
            onChange=""
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
            value=""
            onChange=""
          />
        </div>
       

        <button className="btn text-light mt-3">SAVE ADDRESS</button>
      </form>
    </div>
  );
};

export { Address, BillingAddress, ShippingAddress };
