import React from "react";

const AccountDetails = () => {
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
              value="Hibbanur"
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
              name="firstname"
              value="Rahman"
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
              name="firstname"
              value="Hibbanur Rahman"
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
              name="firstname"
              value="hibbanrahmanhyt@gmail.com"
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
