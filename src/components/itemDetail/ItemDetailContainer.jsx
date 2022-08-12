import React, { useEffect, useState } from "react";
import itemsData from "../../data/data.js";
import ItemDetail from "./ItemDetail.jsx";

function getItem(){
    return new Promise( (resolve) => {
    setTimeout( () => resolve(itemsData[0]), 2000 )
    });
}

function ItemDetailList() {


    let [data, setData] = useState([]); 

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

export default function ItemDetailContainer(props) {
        
    return (
        <div>
            <ItemDetailList/>
        </div>
    )


}