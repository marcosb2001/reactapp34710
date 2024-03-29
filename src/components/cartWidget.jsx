import imgCart from "../images/cart.png";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./cartContext";

export default function CartWidget() {

    const { cart } = useContext(CartContext)

    const iconStyle = {backgroundColor: "red", textDecoration: "none", color: "white", borderRadius: "100%" }

    let totalQuantity = 0
    cart.map(item => {
        totalQuantity += item.quantity 
        return 0;
    })

    return (
        <Link to="/cart">
        <img src={imgCart} alt="" />
        {totalQuantity > 0 ?
        <icon style={iconStyle}>{totalQuantity}</icon>
        : <p></p> }
        </Link>
    )
}