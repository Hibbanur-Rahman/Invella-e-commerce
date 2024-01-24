import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";
import "../assets/styles/style.css";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = 100;

      setIsFixed(scrollPosition > offset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="Navbar d-none d-md-flex flex-column m-0 p-0">
        <div className="Navbar-head row m-0 p-0 pt-3 pb-3 d-flex align-items-center justify-content-center ">
          <div className="col-2 ps-2">
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="col-4 m-0 p-0">
            <div className="input-group m-0 p-0">
              <input
                type="text"
                className="form-control m-0 p-2 ps-3"
                placeholder="search items"
              />
              <span className="input-group-text" id="basic-addon2">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
          </div>
          <div className="col-2 d-flex align-items-center m-0 p-0 ps-4">
            <Link className="text-black m-0 p-0 ms-3 me-2" to="/login">
              <i className="bi bi-person-circle fs-2"></i>
            </Link>
            <Link className="text-black m-0 p-0  ms-2 me-2" to="#">
              <i className="bi bi-heart fs-2"></i>
            </Link>
            <Link className="text-black m-0 p-0  ms-2 me-2" to="#">
              <i className="bi bi-cart3 fs-2"></i>
            </Link>
          </div>
        </div>
        <div
          className={`Navbar-list row m-0 p-0 d-flex align-items-center justify-content-center ${isFixed ? "fixed" : ""} `}
        >
          <div className="col-11 m-0 p-0 d-flex align-items-center justify-content-center ">
            <div className="list-item col-2 position-relative p-3">
              <p className="m-0 p-0 w-auto text-light fw-semibold ">
                Watch Strap By Size
                <span className="m-0 p-0 w-auto ">
                  <i className="bi bi-chevron-down w-auto "></i>
                </span>
              </p>
              <ul className="col-10 m-0 p-0  list-unstyled text-light bg-black position-absolute d-none flex-column ">
                <Link
                  to="/watchStrapBySize"
                  className="text-decoration-none text-light"
                >
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">14mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">16mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">18mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">20mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">21mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">22mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">24mm Watch Strap</li>
                </Link>
              </ul>
            </div>
            <div className="list-item col-2 position-relative p-3">
              <p className="m-0 p-0 w-auto text-light fw-semibold ">
                Watch Strap By Material
                <span className="m-0 p-0 w-auto ">
                  <i className="bi bi-chevron-down w-auto "></i>
                </span>
              </p>
              <ul className="col-12 m-0 p-0  list-unstyled text-light bg-black position-absolute d-none flex-column ">
                <Link to="#" className="text-decoration-none text-light ">
                  <li className="p-3 ps-2 pe-2 text-start">
                    Milanese Metal Watch Straps
                  </li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3 ps-2 pe-2  text-start">
                    Genuine Leather Watch Straps
                  </li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3 ps-2 pe-2  text-start">
                    Nylon Watch Straps
                  </li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3 ps-2 pe-2  text-start">
                    Silicon Watch Straps
                  </li>
                </Link>
              </ul>
            </div>
            <div className="list-item col-2 position-relative p-3">
              <p className="m-0 p-0 w-auto text-light fw-semibold ">
                Watch Strap By Brand
                <span className="m-0 p-0 w-auto ">
                  <i className="bi bi-chevron-down w-auto "></i>
                </span>
              </p>
              <ul className="col-12 m-0 p-0  list-unstyled text-light bg-black position-absolute d-none flex-column ">
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3 text-start">Amazfit Smartwatch Straps</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3 text-start">Apple Watch Straps</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3 text-start">Boat Smartwatch Straps</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3 text-start">Crossbeats watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3 text-start">Fire-Bolt Watch Straps</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3 text-start">GC watch Straps</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3 text-start">Fitbit Smartwatch Straps</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3 text-start">Fossil Watch Straps</li>
                </Link>
              </ul>
            </div>

            <div className="list-item col-2 position-relative p-3">
              <p className="m-0 p-0 w-auto text-light fw-semibold ">
                Screen Protectors
                <span className="m-0 p-0 w-auto ">
                  <i className="bi bi-chevron-down w-auto "></i>
                </span>
              </p>
              <ul className="col-10 m-0 p-0  list-unstyled text-light bg-black position-absolute d-none flex-column ">
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
              </ul>
            </div>
            <div className="list-item col-2 position-relative p-3">
              <p className="m-0 p-0 w-auto text-light fw-semibold ">
                Smartwatch Case Cover
                <span className="m-0 p-0 w-auto ">
                  <i className="bi bi-chevron-down w-auto "></i>
                </span>
              </p>
              <ul className="col-10 m-0 p-0  list-unstyled text-light bg-black position-absolute d-none flex-column ">
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
              </ul>
            </div>
            <div className="list-item col-2 position-relative p-3">
              <p className="m-0 p-0 w-auto text-light fw-semibold ">
                Smartwatch Charger
                <span className="m-0 p-0 w-auto ">
                  <i className="bi bi-chevron-down w-auto "></i>
                </span>
              </p>
              <ul className="col-10 m-0 p-0  list-unstyled text-light bg-black position-absolute d-none flex-column ">
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
                <Link to="#" className="text-decoration-none text-light">
                  <li className="p-3">12mm Watch Strap</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="Navbar-res d-flex d-md-none row m-0 p-0 bg-body-secondary pb-2 fixed">
        <div className="row m-0 p-0 pt-2 d-flex align-items-center  justify-content-between ">
          <div className="col-2">
            <img className="logo" src={logo} alt="" />
          </div>
          <div
            className="col-2"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <i className="fa-solid fa-bars fa-2x"></i>
          </div>
        </div>
        <div className="row m-0 p-0 pt-3 d-flex align-items-center  justify-content-center ">
          <div className="col-11 m-0 p-0">
            <div className="input-group m-0 p-0">
              <input
                type="text"
                className="form-control m-0 p-2 ps-3"
                placeholder="search items"
              />
              <span className="input-group-text" id="basic-addon2">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
          </div>
        </div>
        <div
          className="offcanvas offcanvas-end bg-black"
          tabindex="2"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              class="border-0 closeNav bg-transparent "
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i class="fa-solid fa-xmark fa-2x text-light"></i>
            </button>
          </div>
          <div className="offcanvas-body m-0 p-0">
            <div className="row m-0 p-0 d-flex justify-content-around ">
              <div className="col-6 m-0 p-2">
                <button className="btn btn-lg border border-2 text-light d-flex align-items-center justify-content-around  w-100">
                  <i class="fa-solid fa-cart-shopping w-auto"></i>
                  <p className="m-0 p-0 w-auto">CART</p>
                </button>
              </div>
              <div className="col-6 m-0 p-2">
                <button className="btn btn-lg border border-2 text-light d-flex align-items-center justify-content-around w-100 ">
                  <i class="fa-solid fa-user"></i>
                  <p className="m-0 p-0 w-auto ps-2">ACCOUNT</p>
                </button>
              </div>
            </div>
            <div className="nav-list-items row m-0 p-0 mt-5 pt-3">
              <div className="col-12   ">
                <Link
                  class="text-decoration-none text-light"
                  data-bs-toggle="collapse"
                  to="#strapBySize"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <p className="m-0 p-0 pb-2 pt-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                    Watch Strap By Size
                  </p>
                </Link>
                <div class="collapse" id="strapBySize">
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      12mm Watch Strap
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      14mm Watch Strap
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      16mm Watch Strap
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      18mm Watch Strap
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      19mm Watch Strap
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      20mm Watch Strap
                    </p>
                  </Link>
                </div>
              </div>
              <div className="col-12   ">
                <Link
                  class="text-decoration-none text-light"
                  data-bs-toggle="collapse"
                  to="#strapByMaterial"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <p className="m-0 p-0 pb-2 pt-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                    Watch Strap By Material
                  </p>
                </Link>
                <div class="collapse" id="strapByMaterial">
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      Milanesa Metal Watch Straps
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      Genuine Leather Watch Straps
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      Nylon Watch Straps
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      Silicon Watch Straps
                    </p>
                  </Link>
                </div>
              </div>
              <div className="col-12   ">
                <Link
                  class="text-decoration-none text-light"
                  data-bs-toggle="collapse"
                  to="#strapByBrand"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <p className="m-0 p-0 pb-2 pt-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                    Watch Strap By Brand
                  </p>
                </Link>
                <div class="collapse" id="strapByBrand">
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      Amazfit Smartwatch Straps
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      Apple Watch Straps
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      Boat Smartwatch Straps
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      Crossbeats watch strap
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      Fitbit Smartwatch straps
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      Fire-Bolt watch straps
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      GC watch straps
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      Fossil watch straps
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      Garmin watch straps
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      G-Shock watch straps
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      Gionee Smartwatch straps
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      Honor Watch/Band straps
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      Realme watch straps
                    </p>
                  </Link>
                </div>
              </div>
              <div className="col-12   ">
                <Link
                  class="text-decoration-none text-light"
                  data-bs-toggle="collapse"
                  to="#screenProtector"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <p className="m-0 p-0 pb-2 pt-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                    Screen Protectors
                  </p>
                </Link>
                <div class="collapse" id="screenProtector">
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      12mm Watch Strap
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      12mm Watch Strap
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      12mm Watch Strap
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      12mm Watch Strap
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      12mm Watch Strap
                    </p>
                  </Link>
                </div>
              </div>
              <div className="col-12   ">
                <Link
                  class="text-decoration-none text-light"
                  data-bs-toggle="collapse"
                  to="#screenCase"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <p className="m-0 p-0 pb-2 pt-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                    Smart Case Cover
                  </p>
                </Link>
                <div class="collapse" id="screenCase">
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      12mm Watch Strap
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      12mm Watch Strap
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      12mm Watch Strap
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      12mm Watch Strap
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      12mm Watch Strap
                    </p>
                  </Link>
                </div>
              </div>
              <div className="col-12   ">
                <Link
                  class="text-decoration-none text-light"
                  data-bs-toggle="collapse"
                  to="#smartCharger"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <p className="m-0 p-0 pb-2 pt-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                    Smartwatch Charger
                  </p>
                </Link>
                <div class="collapse" id="smartCharger">
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      12mm Watch Strap
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      12mm Watch Strap
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      12mm Watch Strap
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      12mm Watch Strap
                    </p>
                  </Link>
                  <Link class="text-decoration-none text-light" to="#">
                    <p className="m-0 p-0 pb-2 pt-2 ps-2 border border-2 border-top-0 border-start-0 border-end-0 text-start fs-4">
                      12mm Watch Strap
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div class="row m-0 p-0 mt-5 justify-content-center ">
              <button className="btn btn-lg border border-2 text-light d-flex align-items-center justify-content-around  w-auto">
                <p className="m-0 p-0 w-auto">CUSTOMER SUPPORT</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
