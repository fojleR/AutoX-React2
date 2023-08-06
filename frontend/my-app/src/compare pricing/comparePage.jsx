import React from "react"
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav2 from "../navbar2";
import Footer from "../footer";
import "./compareContent.css"

function ComparePage(){
    const location = useLocation();
    const type = location.state;
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
      
    return <div>
    <Nav2 />
    <div className="comparePage">
        {
            product.map(item =>{
                if(item.type == type){
                    return <div className = "comapreBox">
                        <img src={item.url}></img>
                        <p>{item.name}</p>
                        <p>{item.price} /-</p>
                    </div>
                }
            })
        }
    </div>
    <Footer></Footer>
    </div>
    
}

export default ComparePage;