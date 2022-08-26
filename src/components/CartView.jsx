import { useContext } from "react"
import { CartContext } from "./cartContext"
import CartItem from "./CartItem"

export default function CartView() {

    const {cart} = useContext(CartContext)

    return (
        <CartContext.Provider value={{
            cart,
        }}>
    <div>
        <h1>carrito(cartview)</h1>
        { 
        cart.map(cartProduct => {
            <CartItem
            id={cartProduct.id}
            key={cartProduct.key}
            name={cartProduct.name}
            price={cartProduct.price}
            desc={cartProduct.desc}
            />
            }
        
     )
    }
    </div>
    </CartContext.Provider>
    )
}