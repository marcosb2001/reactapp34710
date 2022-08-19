import React, { useEffect, useState } from "react";
import itemsData from "../data/data.js";
import ItemCard from "./itemCard/Item";
import {useParams} from "react-router-dom"


export default function ItemListContainer(props) {

    function getProducts(){
        return new Promise( (resolve) => {
        setTimeout( () => resolve(itemsData), 1000 )
        });
    }

    const listStyles = {display: 'flex', justifyContent: "space-between"}

    let [data, setData] = useState([]);

    const idCatURL = useParams().idcat;

    useEffect(() => {
        getProducts().then((respuesta) => {
            if(idCatURL === undefined) {
                setData(respuesta)
            }
            else{
                let filtro = respuesta.filter( elemento => elemento.category === idCatURL)
                setData(filtro)
        }
        });
    },  []);

return(
    <div>
        <h1>Productos:</h1>
        { 
        data.map( (singleProduct) => {
        return (
            <ItemCard style={listStyles}
            key={singleProduct.id}
            id={singleProduct.id}
            name={singleProduct.name}
            price={singleProduct.price}
            img={singleProduct.img}
            stock={singleProduct.stock}
            />
            )}
        
     )
    }
    </div>
)
    

}