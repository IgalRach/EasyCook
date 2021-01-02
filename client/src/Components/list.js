import { response } from "express";
import React from "react";
import Item from './Item'

export default function List(){

const [items,setItems]=React.useState([]);

React.useEffect(()=>{
fetch ('http://localhost:8081/movie')
.then((response)=>response.json())
.then((data)=>setItems(data));
},[q]); // calling once for function from Mongo


if (items.length<1)
return "";

    return(
        <div className="row">
            {
                items.map((data,key)=>{
                    return <Item name={data.title} ingredient={data.length} key={key}/>
                })
            }
        {/* <Item name=" recepie 1" ingredient="kind of food"/>
        <Item name ="recepie 2" ingredient="kind of food"/> 
        <Item name ="recepie 3" ingredient="kind of food"/>
        <Item name ="recepie 4" ingredient="kind of food"/>
        <Item name ="recepie 5" ingredient="kind of food"/>
        <Item  name ="recepie 6" ingredient="kind of food"/>  
            
             */}
            
            </div>
    );
}