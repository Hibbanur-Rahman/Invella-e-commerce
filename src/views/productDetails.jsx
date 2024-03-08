import "../assets/styles/productDetails.css";

import productDetails1 from "../assets/images/product-details-1.webp";

const ProductDetails = () => {
  return (
    <div className="row m-0 p-0 justify-content-center p-5">
      <div className="col-3 overflow-x-hidden ">
        <img src={productDetails1} alt="" className="w-100" />
      </div>
      <div className="col-4">
        <h3>Casio G-Shock GA-110 Watch Strap with Watchcase -(Army Grey)</h3>
        <div className="row m-0 p-0 align-items-center ">
          <i className="fa-solid fa-star w-auto m-0 p-0"></i>
          <i className="fa-solid fa-star w-auto m-0 p-0"></i>
          <i className="fa-solid fa-star w-auto m-0 p-0"></i>
          <i className="fa-solid fa-star w-auto m-0 p-0"></i>
          <i className="fa-solid fa-star w-auto m-0 p-0"></i>
          <p className="m-0 p-0 w-auto ps-2">(1 customer review)</p>
        </div>

        <p className="m-0 p-0 text-secondary mt-3">Compatible Model:</p>
        <p className="m-0 p-0 text-secondary">GA-100/110/120/150/200/300</p>
        <p className="m-0 p-0 text-secondary">GD-100/110/120</p>
        <p className="m-0 p-0 text-secondary">G-8900/GR-8900/GW-8900</p>
        <p className="m-0 p-0 text-secondary">GLS-100/GLS-8900</p>
      </div>
      <div className="col-3">
        <div className="card p-4 pt-5 pb-5">
          <div className="row m-0 p-0 justify-content-center mb-3">
            <p className="m-0 p-0 w-auto text-secondary text-decoration-line-through fs-3">
              ₹2,499.00
            </p>
            <p className="m-0 p-0 w-auto ps-2 fs-3">₹2,499.00</p>
          </div>
          <div className="row m-0 p-0 justify-content-between ">
            <div className="col-3  m-0 p-0 pe-2 ">
              <div className=" row  m-0 p-0 border border-1 rounded-2  ">
                <div className="col-8 m-0 p-0 d-flex justify-content-center align-items-center border border-1 border-start-0 border-top-0 border-bottom-0">
                  <p className="m-0 p-0 text-center fs-4 text-secondary ">1</p>
                </div>
                <div className="col-4 m-0 p-0">
                  <div className="d-flex justify-content-center align-items-center border border-1 border-top-0 border-end-0 border-start-0 m-0 p-0">
                    <i class="bi bi-plus-lg w-auto "></i>
                  </div>
                  <div className="d-flex justify-content-center align-items-center m-0 p-0">
                    <i class="bi bi-dash-lg w-auto"></i>
                  </div>
                </div>
              </div>
            </div>
            
              <button className="col-9 add-cart btn btn-primary  p-2 m-0 ps-5 pe-5">
               
                ADD TO CART
              </button>

          </div>
          <button className=" buy col-12 btn btn-lg text-light mt-2">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
