import React, { useEffect, useState } from "react";
import itemsData from "../../data/data.js";
import ItemDetail from "./ItemDetail.jsx";
import {useParams} from "react-router-dom";



export default function ItemDetailContainer(props) {
    let [data, setData] = useState([]); 

    const idURL = useParams().id;

    function getItem(){
        return new Promise( (resolve, reject) => {
            let itemRequested = itemsData.find( elemento => elemento.id == idURL );
            
            if (itemRequested === undefined)
                reject("item no encontrado")
            else
                resolve(itemRequested);
        });
    }


    useEffect(() => {
        getItem().then((respuesta) => {
            setData(respuesta)
        });
    },  []);

return(
    <div>
        <h2>Detalles:</h2>
        <ItemDetail key={data.id} name={data.name} img={data.img} price={data.price} desc={data.desc} shipping={data.shipping}/>
    </div>
)
    

}