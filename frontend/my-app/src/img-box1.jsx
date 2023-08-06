import React from "react";

const imgStyle = {
    height: "200px",
    weight: "200px",
}
const divStyle = {
    borderStyle: "solid",
    height: "400px",
    weight: "400px"
}
const ib = {
    display: "inline-block"
}

var cartList = [];

function Img_box1(props){
    function handleClick(event, id) {
        cartList.push({storeName: id.storeName, id: id.pId});
        // console.log("Button ID:", id.storeName); // Log the props.id object
        // console.log("Button Name:", id.pId); // Access specific properties from props.id
    }
    return <div className = "img-box1">
        <img style = {imgStyle} src = {props.url} alt = "img"/>
        <p>{props.name}</p>
        <p>{props.price}</p>
        {/* <button key="2" onClick={(event) => handleClick(event, props.id)}>Add To Cart</button> */}
    </div>
}
export default Img_box1; 
export {cartList};