import React, { useEffect, useState } from "react";
import ItemCard from "./itemCard/Item";
import {useParams} from "react-router-dom"
import firestoreDB from "../services/firebase";
import { getDocs, collection, snapshotEqual, query, where } from "firebase/firestore";


export default function ItemListContainer(props) {

    

    const idCatURL = useParams().idcat;

    const itemListContainerStyle = {display : "flex", flexWrap : "wrap", justifyContent : "center"}

    const getProducts = () => {
        return new Promise( (resolve) => {
            const ProductsCollection = collection(firestoreDB, "products");

            getDocs(ProductsCollection).then( snapshot => {
                const docsData = snapshot.docs.map( doc =>{ 
                    return{ ...doc.data(), id: doc.id}
                });
                resolve(docsData)
            })

        });
    }

    const getProductsByCat = (idCatURL) => {
        return new Promise( (resolve) => {
            const ProductsCollection = collection(firestoreDB, "products");
    
            const q = query(ProductsCollection, where("category", "==", idCatURL))

            getDocs(q).then( snapshot => {
                const docsData = snapshot.docs.map( doc =>{ 
                    return{ ...doc.data(), id: doc.id}
                });
                resolve(docsData)
            })

        });
    }

    

    

    let [data, setData] = useState([]);

    useEffect(() => {
        getProducts().then((respuesta) => {
            if(idCatURL === undefined) {
                setData(respuesta)
            }
            else{
            getProductsByCat(idCatURL).then((respuesta) => {
                setData(respuesta)
            })
        }
        });
    },  []);

return(
    <div>
        <h1>Productos:</h1>
        <div style={itemListContainerStyle}>
        { 
        data.map( (singleProduct) => {
        return (
            <ItemCard
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
    </div>
)
    

}