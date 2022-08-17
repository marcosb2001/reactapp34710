import { useParams } from "react-router-dom";

function ItemDetail({id, img, name, price, desc, shipping}) {

    const styles = {marginTop : "20px", backgroundColor : "darkgray"};

    return (
        <div style={styles} className="card">
            <div className="card-img">
                <img src={img} alt="imagen" />
            </div>
            <div className="card-detail">
                <h1>{name}</h1>
                <h3>{price}</h3>
                <h5>descripción:</h5>
                <p>{desc}</p>
                <p>Envío: {shipping}</p>
            </div>
        </div>
    )
}

export default ItemDetail;