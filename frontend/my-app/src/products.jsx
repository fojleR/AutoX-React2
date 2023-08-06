import React from "react";
import Navbar from "./navbar";
import Store_list from "./store_list";
import Img_box1 from "./img-box1";
import { cartList } from "./img-box1";

function Product(){
    const[isClicked, setClick] = React.useState(false);
    const[isClicked2, setClick2] = React.useState(false);
    
    // console.log(cartList);
    
    function handleClick(){
        setClick(!isClicked);
    }
    
    function handleClick2(){
        // console.log("clicked")
        setClick2(!isClicked2);
    }
    return(
        <div className="products">
            {/* <Navbar /> */}
            <div className="upper">
                {!isClicked && (<div>
                    <img onClick={handleClick} className="icon" src="./icon/filter.png"></img>
                </div>) }
                {isClicked && (<div className="sidebar">
                    <img onClick={handleClick} className="icon" src="./icon/filter.png"></img>
                    <h1>Hello Clicked</h1>
                </div>)}
            </div>
            <div className="upper">
                {!isClicked2 && (<div>
                    <img onClick={handleClick2} className="icon cart-icon" src="./icon/add-to-cart.png"></img>
                </div>) }
                {isClicked2 && (<div className="cart">
                    <img onClick={handleClick2} className="icon cart-icon" src="./icon/add-to-cart.png"></img>
                    <h1>Hello Clicked</h1>
                </div>)}
            </div>
            <div className="lower">
                {Store_list.map(store =>{
                    const storeName = store.store_name;
                    const allitems = store.items;
                    return allitems.map(item =>{
                        const id = item.id;
                        const idName = {
                                storeName: storeName,
                                pId: id
                        };
                        return <Img_box1 name = {item.name} url = {item.url} price = {item.price} id = {idName}/>
                    })
                })}
            </div> 
        </div>
    )
}

export default Product;