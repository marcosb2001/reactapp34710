import {Link} from "react-router-dom"
import Button from "../button";
import ItemCount from "../ItemCount";

function ItemCard({id, img, name, price, stock}) {

    const cardStyles = { height : "230px", width: "200px", border : "1px solid grey", borderRadius : "10px", padding : "10px", margin : "10px 10px"};

    return (
        <div className="card" style={cardStyles}>
            <div className="card-img">
                <img src={img} alt="imagen" />
            </div>
            <div className="card-detail">
                <h2>{name}</h2>
                <p>{price}</p>
                <Link to={`/detalle/${id}`}>
                <Button  type text="ver más"></Button>
                </Link>
            </div>
        </div>
    )
}

export default ItemCard;