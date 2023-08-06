import React, { useEffect } from "react";
import "./Product_list2.css";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { Navigate, useNavigate } from "react-router-dom";

function Product_list2({ product, addToCart }) {
  const navigate = useNavigate();
  const{info, setInfo} = useContext(AppContext);
  const[products, setProducts] = React.useState(product);
  function goToLogIn(){
    navigate("/login");
  }

  useEffect(() =>{
    setProducts(product);
  }, [product])

  useEffect(()=>{
    if(info.productCategory && info.productCategory != "Category"){
      const newProducts = product.filter(item =>{
        return item.type === info.productCategory;
      })
      setProducts(newProducts);
    }
    else{
      setProducts(product);
    }
  },[info])

  return (
    <div className="flex product_list2">
      {products.map((productItem, productIndex) => {
        return (
          <div className="product-item-container" key={productIndex}>
            <div className="product-item">
              <img src={productItem.url} alt={productItem.name} />
              <p className="product-name">{productItem.name} | {productItem.category}</p>
              <p className="product-price">Rs. {productItem.price} /-</p>

              <button  onClick={() =>{
                navigate("/productDetails", {state:productItem});
              } }>Details</button>
              <br></br>
              <button  onClick={() =>{
                info.type === "User"?addToCart(productItem): goToLogIn();
              } }>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product_list2;
