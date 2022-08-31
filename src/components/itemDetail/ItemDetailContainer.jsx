import React, { useEffect, useState } from "react";
import itemsData from "../../data/data.js";
import ItemDetail from "./ItemDetail.jsx";
import {useParams} from "react-router-dom";

import firestoreDB from "../../services/firebase.js";
import { collection, doc, getDoc } from "firebase/firestore";


export default function ItemDetailContainer(props) {

    function getItemById(id) {
        return new Promise( (resolve, reject) => {
            const ProductsCollection =  collection(firestoreDB, "products");
            const docRef = doc(ProductsCollection, id);
            
            getDoc(docRef).then( snapshot => {
                resolve(
                    { ...snapshot.data(), id: snapshot.id}
                )
            });
        })
    }
    
    let [data, setData] = useState({}); 

    const {id} = useParams();


    useEffect(() => {
        getItemById(id).then((respuesta) => {
            setData(respuesta)
        });
    },  []);

return(
    <div>
        <h2>Detalles:</h2>
        <ItemDetail id={data.id} key={data.id} name={data.name} img={data.img} price={data.price} desc={data.desc} shipping={data.shipping} stock={data.stock}/>
    </div>
)
    

}