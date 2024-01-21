import Navbar from "../components/Navbar";
import HomeBanner from "../components/homeBanner";
import Items from "../components/items";
const Home = () => {
  return (
    <div className="row m-0 p-0 d-flex align-items-center justify-content-center flex-column ">
      <Navbar />
      <HomeBanner />
      <div className="container d-flex justify-content-center ">
        <div className="row m-0 p-0 overflow-hidden col-10 justify-content-center ">
      
            <Items />
            <Items />
            <Items />
            <Items />
          </div>
        
      </div>
    </div>
  );
};

export default Home;
