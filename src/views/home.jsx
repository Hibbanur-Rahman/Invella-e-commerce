import React from "react";
import HomeBanner from "../components/homeBanner";
import Items from "../components/items";
import ItemBands from "../components/itemBands";
import NewsItem from "../components/news_Item";

import LatestImage4 from "../assets/images/item-image-4.webp";
import LatestImage3 from "../assets/images/item-image-3.webp";
import LatestImage2 from "../assets/images/item-image-2.webp";
import LatestImage1 from "../assets/images/item-image-1.webp";

import BandsImage1 from "../assets/images/brands-5.webp";
import BandsImage2 from "../assets/images/brands-6.webp";
import BandsImage3 from "../assets/images/brands-7.webp";
import BandsImage4 from "../assets/images/brands-8.webp";

import BestSellerImage1 from "../assets/images/best-seller-1.webp";
import BestSellerImage2 from "../assets/images/best-seller-2.webp";
import BestSellerImage3 from "../assets/images/best-seller-3.webp";
import BestSellerImage4 from "../assets/images/best-seller-4.webp";

import SmartWatchCaseImage1 from "../assets/images/charger-1.webp";
import SmartWatchCaseImage2 from "../assets/images/charger-2.webp";
import SmartWatchCaseImage3 from "../assets/images/charger-3.webp";
import SmartWatchCaseImage4 from "../assets/images/charger-4.webp";


import LatestNewsImage1 from "../assets/images/news-1.webp";
import LatestNewsImage2 from "../assets/images/news-2.webp";
import LatestNewsImage3 from "../assets/images/news-3.webp";
import LatestNewsImage4 from "../assets/images/news-4.jpg";

const Home = () => {
  return (
    <div className="row m-0 p-0 d-flex align-items-center justify-content-center flex-column ">
      {/* =============== Home Banner  ============= */}
      <HomeBanner />

      {/* =============== Latest-arrival ============= */}
      <div className="latest-arrival container p-0 pt-5 d-flex align-items-center  justify-content-center  flex-column ">
        <div className="row m-0 p-0 pb-5 pt-5 justify-content-center align-items-center w-100">
          <div className="col-3 line"></div>
          <h3 className="m-0 p-0 w-auto ps-3 pe-3">LATEST ARRIVALS</h3>
          <div className="col-3 line"></div>
        </div>
        <div className="row m-0 p-0 overflow-hidden col-12 col-md-10 justify-content-center">
          <Items
            price={1001}
            description={
              "Invella 22mm Jubilee Style Curved Bracelet Watch Strap"
            }
            discountPercent={"-45%"}
            image={LatestImage4}
          />
          <Items
            price={1999}
            description={"Invella 22mm Premium Leather Watch Strap"}
            discountPercent={"-40%"}
            image={LatestImage1}
          />
          <Items
            price={2999}
            description={
              "Casio G-Shock GA-100 Watch Strap with Watchcase - Grey"
            }
            discountPercent={"-43%"}
            image={LatestImage2}
          />
          <Items
            price={3999}
            description={
              "Casio G-Shock GA-100 Watch Strap with Watchcase - Grey"
            }
            discountPercent={"-49%"}
            image={LatestImage3}
          />
        </div>
      </div>

      {/* =============== Watch Bands ============= */}
      <div className="Watch-bands container p-0 pt-5 d-flex align-items-center  justify-content-center  flex-column ">
        <div className="row m-0 p-0 pb-5 pt-5 justify-content-center align-items-center w-100">
          <div className="col-3 line"></div>
          <h3 className="m-0 p-0 w-auto ps-3 pe-3">WATCH BANDS</h3>
          <div className="col-3 line"></div>
        </div>
        <div className="row m-0 p-0 overflow-hidden col-12 col-md-10 justify-content-center p-2">
          <ItemBands image={BandsImage1} />
          <ItemBands image={BandsImage2} />
          <ItemBands image={BandsImage3} />
          <ItemBands image={BandsImage4} />
        </div>
        <button className="btn btn-lg text-light p-1 ps-3 pe-3 mt-4 rounded-2  fs-6">
          Shop All Bands
        </button>
      </div>

      {/* =============== Best-seller ============= */}
      <div className="Best-seller container p-0 pt-5 d-flex align-items-center  justify-content-center  flex-column ">
        <div className="row m-0 p-0 pb-5 pt-5 justify-content-center align-items-center w-100">
          <div className="col-3 line"></div>
          <h3 className="m-0 p-0 w-auto ps-3 pe-3">BEST SELLER</h3>
          <div className="col-3 line"></div>
        </div>
        <div className="row m-0 p-0 overflow-hidden col-12 col-md-10 justify-content-center p-2">
          <Items
            price={349}
            description={"Invella Strap for Honor Band 3 (Silicon)"}
            discountPercent={"-56%"}
            image={BestSellerImage1}
          />
          <Items
            price={249}
            description={"Invella Strap for Samsung Fit E Band SM-R375(BLACK)"}
            discountPercent={"-69%"}
            image={BestSellerImage2}
          />
          <Items
            price={399}
            description={"Invella Strap for Samsung Galaxy Fit SM-R370"}
            discountPercent={"-50%"}
            image={BestSellerImage3}
          />
          <Items
            price={329}
            description={"Invella Strap for Huawei Band 2 Pro (Black)"}
            discountPercent={"-59%"}
            image={BestSellerImage4}
          />
        </div>
      </div>

      {/* =============== Watch-quote ============= */}
      <div className="Watch-quote row m-0 p-0 align-items-center justify-content-center">
        <div className="inner-elements row m-0 p-0 align-items-center justify-content-center h-100 ">
          <div className="col-12 col-md-8 d-flex flex-column align-items-center  ">
            <h3 className="text-center text-light">
              YOUR NO: 1 DESTINATION FOR WATCH BANDS
            </h3>
            <p className="m-0 p-0 text-center text-light mb-4">
              Enjoy the best selections of classic watch and smartwatch bands.
              Finding the style you desire is made easier with Invella massive
              collection of watch bands. Browse genuine leather bands, metal
              straps, one-piece, rubber, vintage, and more. We offer stylish,
              versatile, and premium straps for all types of watches. Choose
              your style now.
            </p>
            <button className="btn btn-lg text-light w-auto fs-6 rounded-2 ps-5 pe-5">
              Buy Your Bands
            </button>
          </div>
        </div>
      </div>

      {/* =============== SmartWatch Case Cover ============= */}
      <div className="case-cover container p-0 pt-5 d-flex align-items-center  justify-content-center  flex-column ">
        <div className="row m-0 p-0 pb-5 pt-5 justify-content-center align-items-center w-100">
          <div className="col-3 line"></div>
          <h3 className="m-0 p-0 w-auto ps-3 pe-3">SMARTWATCH CASE COVER</h3>
          <div className="col-3 line"></div>
        </div>
        <div className="row m-0 p-0 overflow-hidden col-12 col-md-10 justify-content-center p-2">
          <Items
            price={199}
            description={"Amazfit GTS Smartwatch Case Cover -Black"}
            discountPercent={"-60%"}
            image={SmartWatchCaseImage1}
          />
          <Items
            price={249}
            description={"Invella TPU Case Cover for Amazfit T-Rex Smartwatch"}
            discountPercent={"-50%"}
            image={SmartWatchCaseImage2}
          />
          <Items
            price={249}
            description={"Amazfit GTS 2 Mini/ BIP watch Case (Black)"}
            discountPercent={"-50%"}
            image={SmartWatchCaseImage3}
          />
          <Items
            price={329}
            description={"Amazfit GTS 2/GTS 2e watch Case (Black)"}
            discountPercent={"-59%"}
            image={SmartWatchCaseImage4}
          />
        </div>
      </div>

      {/* =============== LATEST NEWS ============= */}
      <div className="watch-charger container p-0 pt-5 d-flex align-items-center  justify-content-center  flex-column ">
        <div className="row m-0 p-0 pb-5 pt-5 justify-content-center align-items-center w-100">
          <div className="col-3 line"></div>
          <h3 className="m-0 p-0 w-auto ps-3 pe-3">LATEST NEWS</h3>
          <div className="col-3 line"></div>
        </div>
        <div className="row m-0 p-0 overflow-hidden col-12 col-md-10 justify-content-center p-2">
          <NewsItem
            image={LatestNewsImage1}
            heading="THE BOLD AND TIMELESS LUMINOX MEN’S 3051 EVO NAVY SEAL COLORMARK WATCH"
            date="June 29, 2023"
            NoComments="No"
            description="Luminox Men’s 3051 EVO Navy SEAL Colormark Watch | Watches have always been more than just timekeeping devices; they express personal style, a statement of"
          />
          <NewsItem
            image={LatestNewsImage2}
            heading="THE BOLD AND TIMELESS LUMINOX MEN’S 3051 EVO NAVY SEAL COLORMARK WATCH"
            date="June 29, 2023"
            NoComments="No"
            description="Luminox Men’s 3051 EVO Navy SEAL Colormark Watch | Watches have always been more than just timekeeping devices; they express personal style, a statement of"
          />
          <NewsItem
            image={LatestNewsImage3}
            heading="THE BOLD AND TIMELESS LUMINOX MEN’S 3051 EVO NAVY SEAL COLORMARK WATCH"
            date="June 29, 2023"
            NoComments="No"
            description="Luminox Men’s 3051 EVO Navy SEAL Colormark Watch | Watches have always been more than just timekeeping devices; they express personal style, a statement of"
          />
          <NewsItem
            image={LatestNewsImage4}
            heading="THE BOLD AND TIMELESS LUMINOX MEN’S 3051 EVO NAVY SEAL COLORMARK WATCH"
            date="June 29, 2023"
            NoComments="No"
            description="Luminox Men’s 3051 EVO Navy SEAL Colormark Watch | Watches have always been more than just timekeeping devices; they express personal style, a statement of"
          />
        </div>

        <button className="btn btn-lg fs-5 text-white ps-5 pe-5 pt-1 pb-1 mt-5 mb-5">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Home;
