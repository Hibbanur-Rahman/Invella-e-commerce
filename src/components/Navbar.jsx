import logo from "../assets/images/logo.png";
import '../assets/styles/style.css';
const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar-head row m-0 p-0 pt-3 pb-3 d-flex align-items-center justify-content-center ">
                <div className="col-4 ps-2">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <div className="col-4 m-0 p-0">
                    <div class="input-group m-0 p-0">
                        <input type="text" className="form-control m-0 p-2 ps-3" placeholder="search items" />
                        <span class="input-group-text" id="basic-addon2">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                    </div>
                </div>
                <div className="col-3 d-flex align-items-center m-0 p-0 ps-4">
                    <a className="text-black m-0 p-0 ms-3 me-2" href="#">
                        <i class="bi bi-person-circle fs-2"></i>
                    </a>
                    <a className="text-black m-0 p-0  ms-2 me-2" href="#">
                        <i class="bi bi-heart fs-2"></i>
                    </a>
                    <a className="text-black m-0 p-0  ms-2 me-2" href="#">
                        <i class="bi bi-cart3 fs-2"></i>
                    </a>
                </div>
            </div>
            <div class="Navbar-list row m-0 p-0 d-flex align-items-center justify-content-center">
                <div class="col-11 m-0 p-0 d-flex align-items-center justify-content-center ">
                    <div class="list-item col-2 position-relative p-3">
                        <p className="m-0 p-0 w-auto text-light fw-semibold ">Watch Strap By Size <span
                                className="m-0 p-0 w-auto ">
                                <i class="bi bi-chevron-down w-auto "></i>
                            </span>
                        </p>
                        <ul className="col-10 m-0 p-0  list-unstyled text-light bg-black position-absolute d-none flex-column ">
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a>
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">14mm Watch Strap</li>
                            </a>
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">16mm Watch Strap</li>
                            </a>
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">18mm Watch Strap</li>
                            </a> <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">20mm Watch Strap</li>
                            </a> <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">21mm Watch Strap</li>
                            </a> <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">22mm Watch Strap</li>
                            </a> <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">24mm Watch Strap</li>
                            </a>
                        </ul>

                    </div>
                    <div class="list-item col-2 position-relative p-3">
                        <p className="m-0 p-0 w-auto text-light fw-semibold ">Watch Strap By Material <span
                                className="m-0 p-0 w-auto ">
                                <i class="bi bi-chevron-down w-auto "></i>
                            </span>
                        </p>
                        <ul className="col-12 m-0 p-0  list-unstyled text-light bg-black position-absolute d-none flex-column ">
                            <a href="#" className="text-decoration-none text-light ">
                                <li className="p-3 ps-2 pe-2 text-start">Milanese Metal Watch Straps</li>
                            </a>
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3 ps-2 pe-2  text-start">Genuine Leather Watch Straps</li>
                            </a>
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3 ps-2 pe-2  text-start">Nylon Watch Straps</li>
                            </a>
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3 ps-2 pe-2  text-start">Silicon Watch Straps</li>
                            </a>
                        </ul>

                    </div>
                    <div class="list-item col-2 position-relative p-3">
                        <p className="m-0 p-0 w-auto text-light fw-semibold ">Watch Strap By Brand<span
                                className="m-0 p-0 w-auto ">
                                <i class="bi bi-chevron-down w-auto "></i>
                            </span>
                        </p>
                        <ul className="col-12 m-0 p-0  list-unstyled text-light bg-black position-absolute d-none flex-column ">
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3 text-start">Amazfit Smartwatch Straps</li>
                            </a>
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3 text-start">Apple Watch Straps</li>
                            </a>
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3 text-start">Boat Smartwatch Straps</li>
                            </a>
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3 text-start">Crossbeats watch Strap</li>
                            </a> <a href="#" className="text-decoration-none text-light">
                                <li className="p-3 text-start">Fire-Bolt Watch Straps</li>
                            </a> <a href="#" className="text-decoration-none text-light">
                                <li className="p-3 text-start">GC watch Straps</li>
                            </a> <a href="#" className="text-decoration-none text-light">
                                <li className="p-3 text-start">Fitbit Smartwatch Straps</li>
                            </a> <a href="#" className="text-decoration-none text-light">
                                <li className="p-3 text-start">Fossil Watch Straps</li>
                            </a>
                        </ul>

                    </div>

                    <div class="list-item col-2 position-relative p-3">
                        <p className="m-0 p-0 w-auto text-light fw-semibold ">Screen Protectors <span
                                className="m-0 p-0 w-auto ">
                                <i class="bi bi-chevron-down w-auto "></i>
                            </span>
                        </p>
                        <ul className="col-10 m-0 p-0  list-unstyled text-light bg-black position-absolute d-none flex-column ">
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a>
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a>
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a>
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a> <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a> <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a> <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a> <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a>
                        </ul>

                    </div>
                    <div class="list-item col-2 position-relative p-3">
                        <p className="m-0 p-0 w-auto text-light fw-semibold ">Smartwatch Case Cover <span
                                className="m-0 p-0 w-auto ">
                                <i class="bi bi-chevron-down w-auto "></i>
                            </span>
                        </p>
                        <ul className="col-10 m-0 p-0  list-unstyled text-light bg-black position-absolute d-none flex-column ">
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a>
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a>
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a>
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a> <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a> <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a> <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a> <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a>
                        </ul>

                    </div>
                    <div class="list-item col-2 position-relative p-3">
                        <p className="m-0 p-0 w-auto text-light fw-semibold ">Smartwatch Charger <span
                                className="m-0 p-0 w-auto ">
                                <i class="bi bi-chevron-down w-auto "></i>
                            </span>
                        </p>
                        <ul className="col-10 m-0 p-0  list-unstyled text-light bg-black position-absolute d-none flex-column ">
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a>
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a>
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a>
                            <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a> <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a> <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a> <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a> <a href="#" className="text-decoration-none text-light">
                                <li className="p-3">12mm Watch Strap</li>
                            </a>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;