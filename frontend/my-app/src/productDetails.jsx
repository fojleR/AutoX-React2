import React from "react"
import { useLocation} from "react-router-dom";
import Nav2 from "./navbar2";
import Footer from "./footer";
import "./productDetails.css"

function ProductDetails(){
    const location = useLocation();
    const item = location.state;
    return <div className="details">
        <Nav2 />
        <div className="detailContet">
            <div className="imageBox">
                <img src={item.url}></img>
            </div>
            <div className="information">
                <p>Product Name: {item.name}</p>
                <p>Product Type: {item.type}</p>
                <p>Product Brand: {item.brand}</p>
                <p>Product Price: {item.price} /-</p>
                <p>Store Name: {item.store_name}</p>
                <p><b>More info</b> <div>{item.description}</div></p>
                <button>Add to Cart</button>
            </div>
        </div>
        <Footer />
    </div>
}

export default ProductDetails;