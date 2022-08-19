import { useParams } from "react-router-dom";
import { useState } from "react";
import ItemCount from "../ItemCount"

function ItemDetail({id, img, name, price, desc, shipping, stock}) {

    const styles = {marginTop : "20px", backgroundColor : "darkgray"};


    const [estado, setEstado] = useState(0);

    function handleAdd(items) {
        console.log('agreagar carrito', items);
        setEstado(items)

    }

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

            { estado === 0 ?
            <ItemCount initial={1} stock={stock} onAdd={handleAdd}
            text="finalizar"/>
            : <a href="/cart"> ir a carrito</a>
            }
        </div>
    )
}

export default ItemDetail;