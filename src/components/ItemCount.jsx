import React, { useState } from 'react';

function ItemCount(props){
    const [items, setItems] = useState(props.initial);

    const handleIncrement = () => {
        if(items < (props.stock)){
            setItems(items+1);
        } else {
            setItems(items+0)
        }
    }

    const handleDecrement = () => {
        if(items > (props.initial)){
            setItems(items-1);
        } else {
            setItems(items-0)
        }
    }

return (
    <div>
        <h3>contador de items - stock: 20</h3>
        <button onClick={ handleIncrement }>Sumar objeto</button>
        <p>items: {items}</p>
        <button onClick={ handleDecrement }>Restar objeto</button>

    </div>
)
}

export default ItemCount;