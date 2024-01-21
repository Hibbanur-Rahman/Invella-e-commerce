import Navbar from "../components/Navbar";
import HomeBanner from "../components/homeBanner";
import Items from "../components/items";
const Home = () => {
  return (
    <div className="row m-0 p-0 d-flex align-items-center justify-content-center flex-column ">
      <Navbar />
      <HomeBanner />
      <div className="latest-arrival container pt-5 d-flex align-items-center  justify-content-center  flex-column ">
        <div className="row m-0 p-0 pb-5 pt-5 justify-content-center align-items-center w-100">
          <div className="col-3 line"></div>
          <h3 className="m-0 p-0 w-auto ps-3 pe-3">LATEST ARRIVALS</h3>
          <div className="col-3 line"></div>
        </div>
        <div className="row m-0 p-0 overflow-hidden col-10 justify-content-center">
          <Items
            price={1001}
            description={
              "Invella 22mm Jubilee Style Curved Bracelet Watch Strap"
            }
            discountPercent={"-45%"}
          />
          <Items
            price={1999}
            description={"Invella 22mm Premium Leather Watch Strap"}
            discountPercent={"-40%"}
          />
          <Items
            price={2999}
            description={
              "Casio G-Shock GA-100 Watch Strap with Watchcase - Grey"
            }
            discountPercent={"-43%"}
          />
          <Items
            price={3999}
            description={
              "Casio G-Shock GA-100 Watch Strap with Watchcase - Grey"
            }
            discountPercent={"-49%"}
          />
        </div>
      </div>

      <div className="latest-arrival container pt-5 d-flex align-items-center  justify-content-center  flex-column ">
        <div className="row m-0 p-0 pb-5 pt-5 justify-content-center align-items-center w-100">
          <div className="col-3 line"></div>
          <h3 className="m-0 p-0 w-auto ps-3 pe-3">WATCH BANDS</h3>
          <div className="col-3 line"></div>
        </div>
        <div className="row m-0 p-0 overflow-hidden col-10 justify-content-center">
            
        </div>
      </div>
    </div>
  );
};

export default Home;
