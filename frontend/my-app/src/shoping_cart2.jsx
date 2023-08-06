import React, { useEffect, useState } from "react";
import axios from "axios";
import Header2 from "./header2";
import Product_list2 from "./product_list2";
import CartList from "./cartList";

function Shopping_cart() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    // Fetch product data from the backend
    axios.get("http://localhost:5000/product")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []); // Empty dependency array to fetch data only once on component mount

  function addToCart(data) {
    setCart([...cart, { ...data, quantity: 1 }]);
  }

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div>
      <Header2 handleShow={handleShow} count={cart.length} />
      {showCart ? (
        <CartList cart={cart}></CartList>
      ) : (
        <Product_list2
          product={product}
          addToCart={addToCart}
        ></Product_list2>
      )}
    </div>
  );
}

export default Shopping_cart;
