import { useContext } from "react"
import { CartContext } from "./cartContext"


const CartItem = ({id, name, desc, price, quantity, total}) => {

    const cartStyle = {height : "140px", width: "20%", border : "1px solid grey", borderRadius : "10px", padding : "10px", margin : "10px 10px"}
    const {deleteFromCart} = useContext(CartContext)

    return (
        <div style={cartStyle}>
            <button onClick={() => { deleteFromCart(id) }}>x</button>
            <h3>{name}</h3>
            <p>cantidad: {quantity}</p>
            <p>{desc}</p>
            <p>precio: {total}</p>
        </div>
    )
}

export default CartItem