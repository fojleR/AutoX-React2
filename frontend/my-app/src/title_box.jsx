import React from "react";

function Title(){
    return(
        <div className="TT">
            <img className="title-img" src="./img/background.png" />
            <div className="title-box">
                <h1 className="title-name">AutoX</h1>
                <p className = "title-moto">Your Trust Our Priority</p>
            </div>
            <div className="icon-outer-box">
                <div className="icon-box">
                    <img className="icon" src="./img/fast delivery.png"></img>
                    <p>Fast Response</p>
                </div>
                <div className="icon-box">
                    <img className="icon" src="./img/support.png"></img>
                    <p>24x7 Support</p>
                </div>
                <div className="icon-box">
                    <img className="icon" src="./img/checkout.png"></img>
                    <p>Secure Checkout</p>
                </div>
                <div className="icon-box">
                    <img className="icon" src="./img/products.png"></img>
                    <p>Authentic Products</p>
                </div>
            </div>
        </div> 
    );
}
export default Title;