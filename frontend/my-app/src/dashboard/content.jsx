import React from "react";
import "./dash-content.css"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Navigate } from "react-router-dom";


function Content(){
    const navigate = useNavigate();
    const{ info, setInfo } = useContext(AppContext);
    console.log(info);

    function goToHome(){
        // console.log("home");
        navigate("/");
    }

    return<div className="dash-content">
        <div>
            <ul>
                {
                    info.type === "Shop Owner"?
                    <li>
                        <Link to = "/storeProduct">Add New Product</Link>
                    </li>
                    :
                    <li>
                        <Link to ="/userOrderList">Order</Link>
                    </li>
                }
                <li>
                    <Link to = "/accountDetails">Account Details</Link>
                </li>
                <li>
                    <Link onClick={()=>{
                        setInfo({ type: "", name: "", email:"", password:"", isLoged: false });
                        goToHome();
                    } } to = "/">LogOut</Link>
                </li>
            </ul>
        </div>
    </div>
}
export default Content;