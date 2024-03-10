import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../assets/styles/productDetails.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import productDetails1 from "../assets/images/product-details-1.webp";
import productDetails2 from "../assets/images/product-details-2.webp";
import productDetails3 from "../assets/images/product-details-3.webp";
import productDetails4 from "../assets/images/product-details-4.webp";
import trustBadge from "../assets/images/trust-badge.webp";
import Cookies from "js-cookie";
import axios from "axios";



const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {productId}=useParams();
  const [product,setProduct]=useState(null);

  const handleProduct=async()=>{
      try{
        console.log(productId);
        const token= Cookies.get('token');
        const response= await axios.post('http://localhost:8000/view-product-Id',{productId},{
          headers:{
            Authorization:token,
          }
        })
        console.log(response);
        if(response.status==200){
          setProduct(response.data.data);
          setLoading(false);
          console.log(response.data.data);
        }
      }catch(error){
        console.log("error in product details: ",error);
        setError(error.message);
        setLoading(false);
      }
  }

  useEffect(()=>{
    handleProduct();
  },[]);

  if(loading){
    return <div>Loading.....</div>
  }
  if(error){
    return <div>Error:{error}</div>
  }
  return (
    <>
      <div className="row m-0 p-0 justify-content-center p-lg-5 pt-5">
        <div className="col-lg-3 overflow-x-hidden pt-lg-0 pt-5 mt-lg-0 mt-5">
          {/* <img src={productDetails1} alt="" className="w-100" /> */}
          <div className="row m-0 p-0">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img src={`http://localhost:8000/uploads/${product.productImage}`} alt="" className="w-100" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={productDetails2} alt="" className="w-100" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={productDetails3} alt="" className="w-100" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={productDetails4} alt="" className="w-100" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper mt-3"
            >
              <SwiperSlide className="border border-1 rounded-2 overflow-hidden ">
                <img src={`http://localhost:8000/uploads/${product.productImage}`} alt="" className="w-100" />
              </SwiperSlide>
              <SwiperSlide className="border border-1 rounded-2 overflow-hidden ">
                <img src={productDetails2} alt="" className="w-100" />
              </SwiperSlide>
              <SwiperSlide className="border border-1 rounded-2 overflow-hidden ">
                <img src={productDetails3} alt="" className="w-100" />
              </SwiperSlide>
              <SwiperSlide className="border border-1 rounded-2 overflow-hidden ">
                <img src={productDetails4} alt="" className="w-100" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="col-lg-4 mt-lg-0 mt-4">
          <h3>{product.name}</h3>
          <div className="row m-0 p-0 align-items-center ">
            <i className="fa-solid fa-star w-auto m-0 p-0 text-warning "></i>
            <i className="fa-solid fa-star w-auto m-0 p-0 text-warning"></i>
            <i className="fa-solid fa-star w-auto m-0 p-0 text-warning"></i>
            <i className="fa-solid fa-star w-auto m-0 p-0 text-secondary "></i>
            <i className="fa-solid fa-star w-auto m-0 p-0 text-secondary "></i>
            <p className="m-0 p-0 w-auto ps-2">(1 customer review)</p>
          </div>

          <p className="m-0 p-0 text-secondary mt-3">Compatible Model:</p>
          <p className="m-0 p-0 text-secondary">GA-100/110/120/150/200/300</p>
          <p className="m-0 p-0 text-secondary">GD-100/110/120</p>
          <p className="m-0 p-0 text-secondary">G-8900/GR-8900/GW-8900</p>
          <p className="m-0 p-0 text-secondary">GLS-100/GLS-8900</p>

          <div className="row m-0 p-0 mt-5">
            <div className="row m-0 p-0 w-auto align-items-center pe-5">
              <i class="bi bi-clipboard w-auto m-0 p-0 pe-2"></i>
              <p className="m-0 p-0 fw-medium w-auto">Size Guide</p>
            </div>
            <div className="row m-0 p-0 w-auto align-items-center ">
              <i class="fa-regular fa-share-from-square w-auto m-0 p-0 pe-2"></i>
              <p className="m-0 p-0 fw-medium w-auto">Delivery & Return </p>
            </div>
          </div>
          <div className="row m-0 p-0 align-items-center mt-2">
            <i class="bi bi-share w-auto fs-5 m-0 p-0 me-3"></i>
            <p className="m-0 p-0 w-auto fw-medium fs-5 me-5 pe-3">Share</p>
            <i class="bi bi-twitter-x w-auto fs-5 m-0 p-0 pe-3"></i>
            <i class="bi bi-facebook w-auto fs-5 m-0 p-0 pe-3"></i>
            <i class="bi bi-pinterest w-auto fs-5 m-0 p-0 pe-3"></i>
            <i class="bi bi-envelope w-auto fs-5 m-0 p-0 pe-3"></i>
          </div>
          <div className="card mt-5 p-4 position-relative">
            <p className="trust-text m-0 p-0 position-absolute bg-white text-center ps-3 pe-3 fw-medium ">
              Guaranteed safe Checkout
            </p>
            <img src={trustBadge} alt="" />
          </div>
        </div>

        <div className="col-lg-3  mt-4 mt-lg-0">
          <div className="card p-4 pt-5 pb-5">
            <div className="row m-0 p-0 justify-content-center mb-3">
              <p className="m-0 p-0 w-auto text-secondary text-decoration-line-through fs-3">
                ₹{product.price}
              </p>
              <p className="m-0 p-0 w-auto ps-2 fs-3">₹{product.price}</p>
            </div>
            <div className="row m-0 p-0 justify-content-between align-items-center">
              <div className="col-3  m-0 p-0 pe-2 ">
                <div className=" row  m-0 p-0 border border-1 rounded-2  ">
                  <div className="col-8 m-0 p-0 d-flex justify-content-center align-items-center border border-1 border-start-0 border-top-0 border-bottom-0">
                    <p className="m-0 p-0 text-center fs-4 text-secondary ">
                      1
                    </p>
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

              <Link to="/cart" className="col-9">
                <button className="col-12 add-cart btn btn-primary  p-2 m-0 ps-5 pe-5">
                  ADD TO CART
                </button>
              </Link>
            </div>
            <button className=" buy col-12 btn btn-lg text-light mt-2">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <div className="row m-0 p-0 justify-content-center bg-light pt-5">
        <div className="col-10">
          <div className="row m-0 p-0 bg-white justify-content-center p-2">
            <h5 className="m-0 p-0 text-secondary w-auto pe-3 ">Description</h5>
            <h5 className="m-0 p-0 text-secondary w-auto">Reviews(1)</h5>
          </div>
          <div className="row m-0 p-0 bg-white mt-3 p-5">
            <h4 className="m-0 p-0">
             {product.description}
            </h4>

            <p className="m-0 p-0 text-secondary mt-3">Compatible Model:</p>
            <p className="m-0 p-0 text-secondary">GA-100/110/120/150/200/300</p>
            <p className="m-0 p-0 text-secondary">GD-100/110/120</p>
            <p className="m-0 p-0 text-secondary">G-8900/GR-8900/GW-8900</p>
            <p className="m-0 p-0 text-secondary">GLS-100/GLS-8900</p>

            <p className="m-0 p-0 text-secondary mt-5">
              Clasp Type: Pin Buckle
            </p>
            <p className="m-0 p-0 text-secondary mt-2">
              Band Length: 13.4cm+8.3cm
            </p>
            <p className="m-0 p-0 text-secondary mt-2">
              Band Colour: Matte black,Black,White,Red, Half Transparent
            </p>
            <p className="m-0 p-0 text-secondary mt-2">Band Weight: 20g</p>
          </div>

          <div className="row m-0 p-0 bg-white mt-3 p-5 mb-5">
            <h6 className="m-0 p-0">Based On 1 Reviews</h6>
            <div className="row m-0 p-0 align-items-baseline  mt-3">
              <h2 className="m-0 p-0 w-auto pe-2 text-success ">5.00</h2>
              <span className="m-0 p-0 w-auto">Overall</span>
            </div>

            <div className="row m-0 p-0 align-items-center mt-4 ">
              <div className="row m-0 p-0 w-auto me-5">
                <i className="fa-solid fa-star w-auto m-0 p-0 text-warning"></i>
                <i className="fa-solid fa-star w-auto m-0 p-0 text-warning"></i>
                <i className="fa-solid fa-star w-auto m-0 p-0 text-warning"></i>
                <i className="fa-solid fa-star w-auto m-0 p-0 text-warning"></i>
                <i className="fa-solid fa-star w-auto m-0 p-0 text-warning"></i>
              </div>
              <div
                className="progress  m-0 p-0 col-10"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar m-0 p-0 bg-success "
                  style={{ width: "100%" }}
                ></div>
              </div>
              <p className="m-0 p-0 w-auto text-secondary ms-2">100%</p>
            </div>
            <div className="row m-0 p-0 align-items-center mt-2">
              <div className="row m-0 p-0 w-auto me-5">
                <i className="fa-solid fa-star w-auto m-0 p-0 text-warning"></i>
                <i className="fa-solid fa-star w-auto m-0 p-0 text-warning"></i>
                <i className="fa-solid fa-star w-auto m-0 p-0 text-warning"></i>
                <i className="fa-solid fa-star w-auto m-0 p-0 text-warning"></i>
                <i className="fa-solid fa-star w-auto m-0 p-0"></i>
              </div>
              <div
                className="progress  m-0 p-0 col-10"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar m-0 p-0 bg-success "
                  style={{ width: "100%" }}
                ></div>
              </div>
              <p className="m-0 p-0 w-auto text-secondary ms-2">100%</p>
            </div>
            <div className="row m-0 p-0 align-items-center mt-2">
              <div className="row m-0 p-0 w-auto me-5">
                <i className="fa-solid fa-star w-auto m-0 p-0 text-warning"></i>
                <i className="fa-solid fa-star w-auto m-0 p-0 text-warning"></i>
                <i className="fa-solid fa-star w-auto m-0 p-0 text-warning"></i>
                <i className="fa-solid fa-star w-auto m-0 p-0"></i>
                <i className="fa-solid fa-star w-auto m-0 p-0"></i>
              </div>
              <div
                className="progress  m-0 p-0 col-10"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar m-0 p-0 bg-success "
                  style={{ width: "100%" }}
                ></div>
              </div>
              <p className="m-0 p-0 w-auto text-secondary ms-2">100%</p>
            </div>
            <div className="row m-0 p-0 align-items-center mt-2">
              <div className="row m-0 p-0 w-auto me-5">
                <i className="fa-solid fa-star w-auto m-0 p-0 text-warning"></i>
                <i className="fa-solid fa-star w-auto m-0 p-0 text-warning"></i>
                <i className="fa-solid fa-star w-auto m-0 p-0"></i>
                <i className="fa-solid fa-star w-auto m-0 p-0"></i>
                <i className="fa-solid fa-star w-auto m-0 p-0"></i>
              </div>
              <div
                className="progress  m-0 p-0 col-10"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar m-0 p-0 bg-success "
                  style={{ width: "100%" }}
                ></div>
              </div>
              <p className="m-0 p-0 w-auto text-secondary ms-2">100%</p>
            </div>
            <div className="row m-0 p-0 align-items-center mt-2">
              <div className="row m-0 p-0 w-auto me-5">
                <i className="fa-solid fa-star w-auto m-0 p-0 text-warning"></i>
                <i className="fa-solid fa-star w-auto m-0 p-0"></i>
                <i className="fa-solid fa-star w-auto m-0 p-0"></i>
                <i className="fa-solid fa-star w-auto m-0 p-0"></i>
                <i className="fa-solid fa-star w-auto m-0 p-0"></i>
              </div>
              <div
                className="progress  m-0 p-0 col-10"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar m-0 p-0 bg-success "
                  style={{ width: "100%" }}
                ></div>
              </div>
              <p className="m-0 p-0 w-auto text-secondary ms-2">100%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
