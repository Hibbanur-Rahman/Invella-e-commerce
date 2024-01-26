import "../assets/styles/style.css";

const ItemBands = (props) => {
  return (
    <div className="bands-item col-6 col-md-3 d-flex align-items-center justify-content-center pt-3 pt-md-0">
      <img className="rounded-3" src={props.image} alt="" />
    </div>
  );
};

export default ItemBands;
