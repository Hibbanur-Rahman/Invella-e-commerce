import React from "react";
const Address=()=>{
    return (
        <div className="row m-0 p-0">
            <p>The following addresses will be used on the checkout page by default</p>
            <div className="row m-0 p-0 pt-2">
                <div className="col-6 pe-5">
                    <div className="row m-0 p-0 justify-content-between ">
                        <h5 className="m-0 p-0 w-auto">Billing address</h5>
                        <button className="border border-0 w-auto badge rounded-pill bg-secondary">Add</button>
                    </div>
                    <p>You have not set up this type of address yet</p>
                </div>
                <div className="col-6 ps-5">
                    <div className="row m-0 p-0 justify-content-between ">
                        <h5 className="m-0 p-0 w-auto">Shipping address</h5>
                        <button className="border border-0 w-auto badge rounded-pill bg-secondary">Add</button>
                    </div>
                    <p>You have not set up this type of address yet</p>
                </div>

            </div>
        </div>
    );
};

export default Address;