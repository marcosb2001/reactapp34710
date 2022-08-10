import React, { useEffect, useState } from "react";
import ItemList from "./ItemList.js";


export default function ItemListContainer(props) {
        
    return (
        <div> 
            <h1>{props.greetingdata.greeting}</h1>
            <ItemList></ItemList>
        </div>
    )


}