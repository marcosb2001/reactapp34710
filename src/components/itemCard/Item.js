import {Link} from "react-router-dom"

function ItemCard({id, img, name, price}) {

    const cardStyles = { height : "240px", width: "180px", border : "1px solid grey", padding : "10px", flex: 'auto'};

    return (
        <div className="card" style={cardStyles}>
            <div className="card-img">
                <img src={img} alt="imagen" />
            </div>
            <div className="card-detail">
                <h2>{name}</h2>
                <p>{price}</p>
                <Link to={`/detalle/${id}`}>más info</Link>
            </div>
        </div>
    )
}

export default ItemCard;