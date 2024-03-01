import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { decode } from "jwt-js-decode";
const AccountDetails = () => {
  const [userDetails,setUserDetails]= useState({
    email:'',
    firstName:'',
    lastName:'',
    username:'',
  })
  const handleUserDetails= ()=>{
    const token= Cookies.get('token')
    const jwtDecode= decode(token);
    const userName= jwtDecode.payload.user.username.split(' ');
    setUserDetails({
      email:jwtDecode.payload.user.email,
      username:jwtDecode.payload.user.username,
      firstName:userName[0],
      lastName:userName[userName.length-1]
    })
  }
  useEffect(()=>{
    handleUserDetails()
  },[]);
  return (
    <div className="row m-0 p-0">
      <form action="">
        <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor="first-name" className="form-label">
              First name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="first-name"
              name="firstname"
              value={userDetails.firstName}
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="last-name" className="form-label">
              Last name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="last-name"
              name="lastname"
              value={userDetails.lastName}
            />
          </div>
        </div>
        <div className="mb-3">
            <label htmlFor="display-name" className="form-label">
              Display name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="display-name"
              name="username"
              value={userDetails.username}
            />
             <div id="loginEmailHelp" className="form-text">
                This will be how your name will be displayed in the account section and in reviews.
              </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={userDetails.email}
            />
            
          </div>
          <h5 className="mt-5">Password change</h5>
          <div className="mb-3">
            <label htmlFor="current-password" className="form-label">
              Current password (leave blank to leave unchanged)
            </label>
            <input
              type="text"
              className="form-control"
              id="current-password"
              name="firstname"
              value=""
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="new-password" className="form-label">
              New password (leave blank to leave unchanged)
            </label>
            <input
              type="text"
              className="form-control"
              id="new-password"
              name="firstname"
              value=""
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="confirm-new-password" className="form-label">
              Confirm new password <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="confirm-new-password"
              name="firstname"
              value=""
            />
            
          </div>

          <button className="btn btn-lg text-light mt-3"> Save changes</button>
      </form>
    </div>
  );
};

export default AccountDetails;
