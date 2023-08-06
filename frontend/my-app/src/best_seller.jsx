import React from "react";
import list from "./parts_list";
import Img_box1 from "./img-box1";

function Best_seller(){
    return <div>
        <div className="upper-best-seller">
            <h1>Our best Sellers</h1>
            <h2>Most Picks</h2>
        </div>
        <div className="best-seller">
            {list.map(item =>{
                return <Img_box1 name = {item.name} url = {item.url} price = {item.price}/>
            })}
        </div>
    </div>
   
}
export default Best_seller;