import React from "react"
import { useState,useEffect } from "react";
import "./practice.css"
import axios from "axios";

function Practice(){

    const [imageData, setImageData] = React.useState("");
    const [product, setProduct] = useState([]);

    function handleClick(event){
         console.log("clicked")
        //  console.log(imageData);

         axios.post("http://localhost:5000/practice",{
            name: "image-1",
            url: imageData
        }).then(function(res){
            console.log(res);
        }).catch(function(err){
            console.log(err);
        });
    }

    useEffect(() => {
        // Fetch product data from the backend
        axios
          .get("http://localhost:5000/practice")
          .then((response) => {
            setProduct(response.data);
            console.log(product);
          })
          .catch((error) => {
            console.error("Error fetching store data:", error);
          });
      }, []);
    
    function handleChange(event) {
        const file = event.target.files[0];
        if (file && file instanceof Blob) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64String = reader.result;
            setImageData(base64String);
          };
          reader.readAsDataURL(file);
        }
    }
    return <div className = "practice">
        <div className="img">
            <img src={imageData}></img>
        </div>
        <br></br>
        <input onChange={handleChange} type="file"></input>
        <br></br>
        <button onClick={handleClick}>Submit</button>
        <div className="all-images">
            {product.map(item =>{
                return <img src={item.url}></img>
            })}
        </div>
    </div>
}

export default Practice;