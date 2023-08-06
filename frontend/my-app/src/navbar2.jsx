import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext"; 


function Nav2() {
  const navigate = useNavigate();
  function goToHome(){
    navigate("/")
  }
  const { info } = useContext(AppContext);
  return (
    <div className="navbar2">
      <div className="box-1">
        {" "}
        <h1><a onClick={goToHome}>AutoX</a></h1>{" "}
      </div>
      <div>
      <ul className="nav-links">
          <li>
            <Link to = "/products">Products</Link>
          </li>
          {/* <li>
            <Link to = "/bookacall">Book a call</Link>
          </li> */}
          <li>
            <Link to = "/comparepricing">Compare Pricing</Link>
          </li>
          <li>
            <Link to = "/storelocator">Store Locator</Link>
          </li>
          <li>
            <Link to = "/about">About us</Link>
          </li>
          {info.isLoged === true ?
          <li>
            <Link to = "/dashboard">My profile</Link>
          </li> : 
          <li>
            <Link to = "/login">Login</Link>
          </li>}
          <li>
            <Link to = "/signUpOption">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav2;
