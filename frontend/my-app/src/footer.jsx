import React from "react";

function Footer(){
    return <div>
        {/* <div className = "footer-upper">
            <h1>Supported Payment Methods</h1>
            <div>
                <img src="./img/nagad.png"/>
                <img src="./img/roket.png"/>
                <img src="./img/bkash.png"/>
            </div>
        </div> */}
        <div className = "footer">
            <div className = "middle-box">
                <div className = "inner-box1">
                    <h1>AutoX</h1>
                    <p>AutoX is a platform for Automobile Repair Workshops and Selling Stores. Our platform is one of the fastest growing trading and servicing platform in Bangladesh. Thanks for all the support! We love you!</p>
                </div>
                <div className = "inner-box2">
                    <h1>My Account</h1>
                    <ul>
                        <li>Dashboard</li>
                        <li>Cart</li>
                        <li>Order History</li>
                        <li>Redeem Codes</li>
                    </ul>
                </div>
                <div className = "inner-box3">
                <h1>Supprot</h1>
                    <ul>
                        <li>Blog</li>
                        <li>How to shop</li>
                        <li>Payment</li>
                        <li>Refund Policy</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>All RIGHTS RESERVED 2023 AUTOX</p>
            <p>DEVELOPED BY FOJLE TAWSIF MUBIN</p>
        </div>
    </div>
}

export default Footer;