import React, { useContext, useEffect, useState } from 'react';
import './CartList.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { AppContext } from "./AppContext";
import axios from 'axios';

function CartList({ cart }) {
  const {info} = useContext(AppContext);
  const [CART, setCART] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div className="cart-list-container">
      {CART?.map((cartItem, cartindex) => (
        <div key={cartindex} className="cart-item">
          <img src={cartItem.url} alt={cartItem.name} />
          <div className="cart-item-details">
            <span className="cart-item-name">{cartItem.name}</span>
            <div className="cart-item-quantity">
              <button
                onClick={() => {
                  const _CART = CART.map((item, index) => {
                    return cartindex === index
                      ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
                      : item;
                  });
                  setCART(_CART);
                }}
              >
                -
              </button>
              <span>{cartItem.quantity}</span>
              <button
                onClick={() => {
                  const _CART = CART.map((item, index) => {
                    return cartindex === index
                      ? { ...item, quantity: item.quantity + 1 }
                      : item;
                  });
                  setCART(_CART);
                }}
              >
                +
              </button>
            </div>
          </div>
          <span className="cart-item-price">Rs. {cartItem.price * cartItem.quantity}</span>
        </div>
      ))}

      <p className="cart-total">
        Total{' '}
        <span>
          Rs.{' '}
          {CART.map((item) => item.price * item.quantity).reduce((total, value) => total + value, 0)}
        </span>
      </p>
      <button onClick={()=>{
        // console.log(CART);
        CART.map(item =>{
          axios.post("http://localhost:5000/order",{
            customerEmail: info.email,
            productName: item.name,
            storeName: item.store_name,
            productPrice: item.price,
            quantity: item.quantity,
            productUrl: item.url
          }).then(function(res){
            // console.log(res);
          }).catch(function(err){
            console.log(err);
          });
        })
        navigate("/");
      }}>Confirm Order</button>
    </div>
  );
}

export default CartList;
