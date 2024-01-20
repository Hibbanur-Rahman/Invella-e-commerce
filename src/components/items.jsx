import itemImage from "../assets/images/item-image.webp";
const Items = () => {
  return (
    <div className="col-4 item">
      <div className="item-img">
        <div className="item-discount m-0 p-0 w-auto">
          <p className="m-0 p-0">-45%</p>
        </div>
        <img className="image-fluid" src={itemImage} alt="Item Image" />
      </div>
      <div className="item-desc row m-0 p-0">
        <p className="m-0 p-0">
          invella 22mm Jubilee Style Curved Bracelet Watch Strap
        </p>
        <div className="rating row m-0 p-0 ">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className='fa-solid fa-star'></i>
        </div>
        <div className="price row m-0 p-0">
            <p className="text-decoration-line-through text-secondary w-auto m-0 p-0"><span>₹</span>3,999.00</p>
            <p className="fs-5"><span>₹</span>2,199.00</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
