import imgCart from "../images/cart.png";
import { Link, NavLink } from "react-router-dom";

function NavBar() {

    const aStyles = {margin : "10px", color : "blue"};

    function CartWidget() {
        return (
            <img src={imgCart} alt="" />
        )
    }

    return (
        <div>
            <h1>Adopción de insectos</h1>
        <ul>
            <Link to="/" style={aStyles}>Home</Link>
            <Link to="/category/ant" style={aStyles}>Hormigas</Link>
            <Link to="/category/beetle" style={aStyles}>Escarabajos</Link>
            <Link to="/category/butterfly" style={aStyles}>Mariposas</Link>
            <CartWidget/>
        </ul>
        </div>
    )
}

export default NavBar;