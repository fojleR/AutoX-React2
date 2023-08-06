import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Header2 from "./header2";
import Product_list2 from "./product_list2";

function Shopping_cart(props) {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  const address = props.send;

  // console.log(address);
  // console.log(product);

  const filteredProducts = useMemo(() => {
    if (product.length === 0) {
      // If product is empty, return an empty array
      return [];
    }

    return product.filter(
      (item) =>
        item.division === address.divName &&
        item.district === address.disName &&
        item.thana === address.thanaName
    );
  }, [product, address.divName, address.disName, address.thanaName]);

  useEffect(() => {
    // Fetch product data from the backend
    axios
      .get("http://localhost:5000/store")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching store data:", error);
      });
  }, []);

  function addToCart(data) {
    setCart([...cart, { ...data, quantity: 1 }]);
  }

  return (
    <div>
      <Product_list2 product={filteredProducts} addToCart={addToCart} />
    </div>
  );
}

export default Shopping_cart;
