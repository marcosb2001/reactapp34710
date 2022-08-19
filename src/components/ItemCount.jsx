import React, { useState } from 'react';

function ItemCount({initial, stock, onAdd, text}){
    const [items, setItems] = useState(initial);

    const handleIncrement = () => {
        if(items < stock){
            setItems(items+1);
        } else {
            setItems(items+0)
        }
    }

    const handleDecrement = () => {
        if(items > initial){
            setItems(items-1);
        } else {
            setItems(items-0)
        }
    }

    const handleClick = ()=> {
        onAdd(items)
    }


return (
    <div>
        <h3>contador de items - stock: 24</h3>
        <button onClick={ handleDecrement }>-</button>
        <span>{items}</span>
        <button onClick={ handleIncrement }>+</button>
        <button onClick={ handleClick}>{text}</button>

    </div>
)
}

export default ItemCount;