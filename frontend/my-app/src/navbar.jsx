import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext"; // Import the AppContext here
import { Navigate } from "react-router-dom";

function Nav() {
  // const[isLoged, setLoged] = React.useState(false)
  // console.log(props.info);
  // React.useEffect(()=>{
  //   setLoged(props.info.isLoged);
  // },[props.info.isLoged])
  const navigate = useNavigate();
  function goToHome(){
    navigate("/")
  }
  const { info } = useContext(AppContext); // Access the info state from AppContext
  // console.log(info);

  return (
    <div className="navbar">
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

export default Nav;
