import React, { useEffect, useState } from "react";
import itemsData from "../data/data.js";
import ItemCard from "./itemCard/Item";

function getProducts(){
    return new Promise( (resolve) => {
    setTimeout( () => resolve(itemsData), 1000 )
    });
}

export default function ItemList() {

    

    let [data, setData] = useState([]); 

    useEffect(() => {
        getProducts().then((respuesta) => {
            setData(respuesta)
        });
    },  []);

return(
    <div>
        { 
        data.map( (singleProduct) => {
        return (
            <ItemCard
            key={singleProduct.id}
            name={singleProduct.name}
            price={singleProduct.price}
            img={singleProduct.img}
            />
            )}
        
     )
    }
    </div>
)
    

}