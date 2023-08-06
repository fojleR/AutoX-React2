import React from "react";
import Store_list from "./store_list";
import Img_box1 from "./img-box1";
import { useNavigate } from "react-router-dom";
function Store_collection(){
    const navigate = useNavigate();
    return <div className = "store-collections">
        <h1>AutoX Store Collections</h1>
        <ul>
            <li><a>New Products</a></li>
            <li><a>Featured</a></li>
            <li><a>AutoX Sale</a></li>
        </ul>
        <div>
            {Store_list.map(store =>{
                const allitems = store.items;
                return allitems.map(item =>{
                    return <Img_box1 name = {item.name} url = {item.url} price = {item.price}/>
                })
            })}
        </div>
        <button onClick={()=>{
            navigate("/products")
        }}>View All</button>
    </div>
}

export default Store_collection;