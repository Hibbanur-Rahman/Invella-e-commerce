import "../assets/styles/style.css";

const ItemBands = (props) => {
  return (
    <div className="bands-item col-3 d-flex align-items-center justify-content-center">
      <img className="rounded-3" src={props.image} alt="" />
    </div>
  );
};

export default ItemBands;
