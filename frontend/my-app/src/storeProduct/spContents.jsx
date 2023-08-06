import React, { useEffect } from "react"
import "./spContents.css"
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import { useContext } from "react";
function SPcontent(){
    const navigate = useNavigate();
    const { info } = useContext(AppContext);
    // useEffect(()=>{
    //     console.log(info);
    // },[info.storeName])
    function goToDash(){
        navigate("/dashboard");
    }

    const[PID, setPID] = React.useState(info.storeName);
    const[PName, setPName] = React.useState("");
    const[PType, setPType] = React.useState("");
    const[PBrand, setPBrend] = React.useState("");
    const[PPrice, setPPrice] = React.useState("");
    const[PImage, setPImage] = React.useState("");
    const[PSname, setPSname] = React.useState(info.storeName);
    const [imageData, setImageData] = React.useState("");
    const [description, setDescription] = React.useState("");
    function handlePID(event){
        const{name, value} = event.target;
        setPID(value);
    }

    function handlePName(event){
        const{name, value} = event.target;
        setPName(value);
    }
    function handlePType(event){
        const{name, value} = event.target;
        setPType(value);
    }
    function handlePBrand(event){
        const{name, value} = event.target;
        setPBrend(value);
    }
    function handlePPrice(event){
        const{name, value} = event.target;
        setPPrice(value);
    }
    function handlePImage(event){
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
    function handlePSname(event){
        const{name, value} = event.target;
        setPSname(value);
    }

    function handleDiscrip(event){
        const{name, value} = event.target;
        setDescription(value);
        // console.log(description);
    }

    function handleClick(){
        // console.log(PID);
        // console.log(PName);
        // console.log(PType);
        // console.log(PBrand);
        // console.log(imageData);
        axios.post("http://localhost:5000/product",{
            PID: PID,
            PName: PName,
            PType: PType,
            PBrand: PBrand,
            PPrice: PPrice,
            url: imageData,
            PSname: PSname,
            description: description
        }).then(function(res){
            console.log(res);
        }).catch(function(err){
            console.log(err);
        });
        goToDash();
    }

    return <div className="spContent">
        <div className="inner">
            <h3>Put Your Product Information</h3>
            <label>Product Id</label>
            <br></br>
            <input onChange={handlePID} type="text" placeholder="Enter the Product Id" value={PID}></input>
            <br></br>
            <label>Product Name</label>
            <br></br>
            <input onChange={handlePName} type="text" placeholder="Enter the Product Id"></input>
            <br></br>
            <label>Product Type</label>
            <br></br>
            <input onChange={handlePType} type="text" placeholder="Enter the Product Type"></input>
            <br></br>
            <label >Product Brand</label>
            <br></br>
            <input onChange={handlePBrand} type="text" placeholder="Enter the Product Brand"></input>
            <br></br>
            <label>Price</label>
            <br></br>
            <input onChange={handlePPrice} type="text" placeholder="Enter the Product Price"></input>
            <br></br>
            <label>Product Image</label>
            <br></br>
            <input onChange={handlePImage} type="file"></input>
            <br></br>
            <label>Store Name</label>
            <br></br>
            <input onChange={handlePSname} type="text" placeholder="Enter your Store Name" value={PSname}></input>
            <br></br>
            <label>Put the details about the Prouduct</label>
            <br></br>
            <textarea onChange={handleDiscrip}></textarea>
            <br></br>
            <button onClick={handleClick}>submit</button>
        </div>
    </div>
}

export default SPcontent;