import React from "react"
import Nav2 from "../navbar2";
import SPcontent from "./spContents";
import Footer from "../footer";

function StoreProduct(){
    return <div className="storeProduct">
        <Nav2 />
        <SPcontent />
        <Footer />
    </div>
}

export default StoreProduct;