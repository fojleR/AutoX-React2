import React from "react";
import './Header2.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";

function Header2(props) {
  const{info, setInfo} = React.useContext(AppContext);
  const isCartEmpty = props.count === 0;
  function handleCategory(event){
    const{name, value} = event.target;
    setInfo({ ...info, productCategory: value });
  }
  return (
    <div className="flex shopping-cart">
      <div className="left">
        <div><h1><Link to = "/">AutoX</Link></h1></div>
        <div onClick={() => { props.handleShow(false) }}><h3>Shopping Cart</h3></div>
        <select onChange={handleCategory}>
          <option>Category</option>
          <option>Brake</option>
          <option>Oil</option>
          <option>Bulb</option>
        </select>
      </div>
      <div className="cart-container" onClick={() => { props.handleShow(true) }}>
        <h3>Cart</h3>
        {isCartEmpty ? null : <sub className="cart-count">{props.count}</sub>}
      </div>
    </div>
  )
}

export default Header2;
