import React from "react";
import "./Product_list2.css";
import { useNavigate } from "react-router-dom";




function Product_list2({ product, addToCart }) {
  const navigate = useNavigate();

  // console.log(product);
  return (
    <div className="flex product_list2">
      {product.map((item, productIndex) => {
        return (
          <div className="product-item-container" key={productIndex}>
            <div className="product-item">
              <img src={item.url} alt={item.name} />
              <p className="product-name">{item.Store_name}</p>
              <button onClick={()=>{
                navigate("/store-details", {state: item});
              }}> Details </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product_list2;
