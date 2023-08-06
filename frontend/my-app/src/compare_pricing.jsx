import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function ComparePricing(){
    return <div className = "book_a_call">
        <Navbar />
        <img src="/img/book_a_call_background.png"></img>
        <div className="request">
            <h1>Compare Products</h1>
            <p>Choose two products to compare</p>
            <input/>
            <br/>
            <input/>
            <br/>
            <div className="buttons">
                <button>View Comparison</button>
            </div>
        </div>
        <Footer />
    </div>
    
}

export default ComparePricing;