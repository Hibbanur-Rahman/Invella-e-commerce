import "../assets/styles/style.css";
import turnLeftIcon from "../assets/images/turnLeftIcon.svg";
const HomeBanner = () => {
  return (
    <>
      <div className="homeBanner row m-0 p-0 d-flex align-items-center justify-content-center ">
        <div class="col-12 d-flex flex-column align-items-center justify-content-center">
          <h1 class="text-light text-center">THE BEST SELECTION OF WATCHES BANDS</h1>
          <button class="shopNow btn btn-lg text-light w-auto">Shop Now</button>
        </div>
      </div>
      <div className="homeBanner-lower row m-0 p-0">
        <div className="col-6 col-md-3 d-flex align-items-center justify-content-center">
          <i class="bi bi-bag-fill text-light fs-2 m-0 p-0 pe-2"></i>
          <p className="m-0 p-0 text-light fs-5 w-auto">
            Over 1 Million Straps Sold
          </p>
        </div>
        <div className="col-6 col-md-3 d-flex align-items-center justify-content-center">
          <i class="bi bi-headset text-light fs-2 m-0 p-0 pe-2"></i>
          <p className="m-0 p-0 text-light fs-5 w-auto">
            24/7 Customer Support
          </p>
        </div>
        <div className="col-6 col-md-3 d-flex align-items-center justify-content-center">
          <i class="bi bi-emoji-smile text-light fs-2 m-0 p-0 pe-2"></i>
          <p className="m-0 p-0 text-light fs-5 w-auto">100% Satisfaction</p>
        </div>
        <div className="col-6 col-md-3 d-flex align-items-center justify-content-center">
          <i class="bi bi-arrow-90deg-left text-light fs-2 m-0 p-0 pe-2"></i>
          <p className="m-0 p-0 text-light fs-5 w-auto">Easy Returns</p>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
