import imgCart from "../images/cart.png"

function NavBar() {

    const aStyles = {margin : "10px", color : "blue"};

    function CartWidget() {
        return (
            <img src={imgCart} alt="" />
        )
    }

    return (
        <ul>
            <h1>Adopción de insectos</h1>
            <a href="" style={aStyles}>Hormigas</a>
            <a href="" style={aStyles}>Escarabajos</a>
            <a href="" style={aStyles}>Mariposas</a>
            <a href="" style={aStyles}>Herramientas y artículos</a>
            <a href="" style={aStyles}>Blog</a>
            <CartWidget/>
        </ul>
    )
}

export default NavBar;