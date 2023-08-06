import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext"; // Import the AppContext here



function Login(){
    const{ info, setInfo } = useContext(AppContext);
    const[isLoged, setLog] = React.useState(false);
    var[User, setUser] = React.useState([]);
    const[email, setEmail] = React.useState("");
    const[password, setPassword] = React.useState("");
    const[type, setType] = React.useState("");
    var[store, setStore] = React.useState([]);
    const[selectedStore, setSelectedStore] = React.useState({});

    const navigate = useNavigate();

    const goToHome = () =>{
        navigate("/");
    }

    React.useEffect( () =>{
        const fetchName = async () => {
            try {
              const res = await axios.get("http://localhost:5000/logIn");
              setUser(res.data);
              //console.log(res.data);
              //setName(res.data[2].name);
            } catch (error) {
              console.log(error);
            }
          };
          fetchName();
    }, []);

    React.useEffect( () =>{
        const fetchName = async () => {
            try {
              const res = await axios.get("http://localhost:5000/store");
              setStore(res.data);
              //console.log(res.data);
              //setName(res.data[2].name);
            } catch (error) {
              console.log(error);
            }
          };
          fetchName();
    }, []);

    function handleType(event){
        const{name, value} = event.target;
        setType(value);
        // console.log(type);
    }

    function handleEmail(event){
        const{name, value} = event.target;
        setEmail(value);
    }
    function handlePassword(event){
        const{name, value} = event.target;
        setPassword(value);
    }

    function userLogIn(){
        const isvalid = User.filter( item =>{
            return(item.email === email && item.password === password);
        })
        if(isvalid.length){
            setLog(true);
            setInfo({ type, name: "", email, password, isLoged: true });
            // console.log(info);
            // console.log("hello")
            goToHome();
        }
        else{
            setEmail("");
            setPassword("");
            alert("Email/password is invalid.");
        }
    }

    function shopOwnerLogIn(){
        const isvalid = store.filter(item => item.email === email && item.password === password);
        if(isvalid.length){
            setLog(true);
            setInfo({ type, name: "", email, password, isLoged: true, storeName : isvalid[0].Store_name });
            // console.log(info);
            // console.log("hello")
            goToHome();
        }
        else{
            setEmail("");
            setPassword("");
            alert("Email/password is invalid.");
        }
    }

    function handleClick(){
        if(type === "User"){
            userLogIn();
        }
        else{
            shopOwnerLogIn();
        }
    }
    
    

    return <div className = "login">
        <div className = "left">
            <h1 className="name">AutoX</h1>
            <div className = "inner">
                <h1>Welcome Back!</h1>
                <p>Welcome back! Please enter your details</p>
                <label>Login As  </label>
                <select onChange={handleType}>
                    <option>Select Type</option>
                    <option>User</option>
                    <option>Shop Owner</option>
                </select>
                <br></br>
                <label>Email</label>
                <br></br>
                <input onChange={handleEmail} className="input-box" name = "email" value = {email} type="text" placeholder="Enter your email"></input>
                <br></br>
                <label>Password</label>
                <br></br>
                <input onChange={handlePassword} className="input-box" name = "password" value = {password} type="password" placeholder="Enter your password"></input>
                <div className="box1">
                    <div>
                        <input type = "checkbox"></input>
                        <p>Remember for 30 days</p>
                    </div>
                    <p>Forgot Password?</p>
                </div>
                <button onClick={handleClick} type = "submit"> Sign in</button>
                <br></br>
                <button type = "submit">Sign in with Google</button>
                <p className="sp">Don't have an account?<span>Sign Up</span></p>
                <p className="copyright">2023 Copyrights Reserved</p>
            </div>
            
        </div>
        <div className = "right">
            <div>
                <img src = "./img/login_background.png" />
            </div>
            <div className="title">
                <h1>
                    AutoX
                </h1>
                <p>Your Trust, Our Priority</p>
            </div>
        </div>
    </div>
}
export default Login;