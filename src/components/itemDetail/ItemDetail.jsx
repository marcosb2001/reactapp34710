import { useState, useContext } from "react";
import ItemCount from "../ItemCount";
import { CartContext } from "../cartContext";
import { Link } from 'react-router-dom';


function ItemDetail({id, img, name, price, desc, shipping, stock}) {

    const styles = {marginTop : "20px", backgroundColor : "lightblue"};
    const { addToCart } = useContext(CartContext)
    const [quantityInCart, setQuantityInCart] = useState(0);

    function handleAdd(items) {
        const itemToCart = { id, name, price, img, desc, shipping, stock};
        addToCart(itemToCart, items);
        setQuantityInCart(items)
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

            { quantityInCart === 0 ?
            <ItemCount initial={1} stock={stock} onAdd={handleAdd}
            text="finalizar"/>
            : <Link to="/cart"> ir a carrito</Link>
            }
        </div>
    )
}

export default ItemDetail;