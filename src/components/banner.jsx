import "../assets/styles/style.css";
const Banner = (props) => {
  return (
    <div className="banner mt-5 mt-md-0 row m-0 p-0 align-items-center justify-content-center">
      <div className="inner-elements row m-0 p-0 align-items-center justify-content-center h-100 ">
        <div className="row m-0 p-0">
          <h2 className="text-light text-center">{props.head}</h2>
          <p className="text-light text-center">{props.path}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
