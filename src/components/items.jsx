const Items = (props) => {
  return (
    <div className="col-6 col-sm-6 col-md-3 item">
      <a
        href="#"
        className="text-decoration-none text-black"
      >
        <div className="item-img position-relative ">
          <div className="item-discount m-0 p-0 w-auto position-absolute rounded-1">
            <p className="m-0 p-2 pt-0 pb-0" style={{ fontSize: "14px" }}>
              {props.discountPercent}
            </p>
          </div>
          <img className="image-fluid" src={props.image} alt="item" />
        </div>
        <div className="item-desc row m-0 p-0 pt-2">
          <p className="m-0 p-0 text-secondary ">{props.description}</p>
          <div className="rating row m-0 p-0 pt-2">
            <i className="fa-solid fa-star w-auto m-0 p-0"></i>
            <i className="fa-solid fa-star w-auto m-0 p-0"></i>
            <i className="fa-solid fa-star w-auto m-0 p-0"></i>
            <i className="fa-solid fa-star w-auto m-0 p-0"></i>
            <i className="fa-solid fa-star w-auto m-0 p-0"></i>
          </div>
          <div className="price row m-0 p-0 align-items-center pt-2">
            <p className="text-decoration-line-through text-secondary w-auto m-0 p-0">
              <span>₹</span>3,999.00
            </p>
            <p className="fs-6 w-auto m-0 p-0 ps-2">
              <span>₹</span>
              {props.price}.00
            </p>
          </div>
        </div>

        <div className="row m-0 p-0 pt-4">
          <button className="btn btn-lg addCart text-light">Add to cart</button>
        </div>
      </a>
    </div>
  );
};

export default Items;
