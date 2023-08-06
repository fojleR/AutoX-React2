import React from "react";
import "./compareContent.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CompareContent(){
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        // Fetch product data from the backend
        axios.get("http://localhost:5000/product")
          .then((response) => {
            setProduct(response.data);
          })
          .catch((error) => {
            console.error("Error fetching product data:", error);
          });
      }, []);

    return <div className="compareContent">
        {product.map(item =>{
            return<div className = "comapreBox">
                <img src={item.url}></img>
                <p>{item.name}</p>
                <p>{item.price} /-</p>
                <button onClick={() =>{
                    navigate("/comparePage", {state: item.type});
                }}>Compare Pricing</button>
            </div>
        })}
    </div>
}

export default CompareContent;