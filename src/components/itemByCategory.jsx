import '../assets/styles/style.css';


const ItemsByCategory=(props)=>{
    return (
        <div className="itemsByCategory col-3 m-0 p-0">
            <img src={props.image} alt="imageByCategory" />

            <h4 className="m-0 p-0">{props.itemCategoryDetails}
            <i class="bi bi-arrow-right"></i></h4>
        </div>
    );
};


export default ItemsByCategory;