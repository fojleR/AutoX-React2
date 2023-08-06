import React from "react";
import './Header2.css';
import { Link } from "react-router-dom";
function Header2(props) {
  return (
    <div className="flex shopping-cart">
      <div className="left">
        <div><h1><Link to = "/">AutoX</Link></h1></div>
      </div>
      <div className="cart-container">
        <h3>Store_list</h3>
      </div>
    </div>
  )
}

export default Header2;
