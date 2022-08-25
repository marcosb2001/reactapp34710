import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}) {

    const [cart, setCart] = useState([]);

    function addToCart(item, quantity) {

        if (isInCart(item.id)){

        }else {
            let copyCart = [...cart];
            copyCart.push({...item, quantity: quantity})
    
            setCart(copyCart)
            console.log(copyCart)
        }

        function isInCart(id){
            return (cart.some(itemInCart => itemInCart.id == item.id))
        }
    }

    return (
        <CartContext.Provider value={ {cart, addToCart} }>
            {children}
        </CartContext.Provider>
    )
}