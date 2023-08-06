import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function SignUp(){
    const[newEmail, setEmail] = React.useState("");
    const[newPassword, setPassword] = React.useState("");
    const[newCpassword, setCpassword] = React.useState("");

    const navigate = useNavigate();

    const goToLogIn = () =>{
        navigate("/login");
    }

    function handleEmail(event){
        const{name, value} = event.target;
        setEmail(value);
    }
    function handlePassword(event){
        const{name, value} = event.target;
        setPassword(value);
    }
    function handleCpassword(event){
        const{name,value} = event.target;
        setCpassword(value);
    }
    function handleClick(event){
        // console.log(newEmail);
        // console.log(newPassword);
        // console.log(newCpassword);
        axios.post("http://localhost:5000/signUp",{
            email: newEmail,
            password: newPassword
        }).then(function(res){
            // console.log(res);
        }).catch(function(err){
            console.log(err);
        });
        goToLogIn();
        // console.log(Name);
        // console.log(Email);
    }
    return <div className = "login">
        <div className = "left">
            <h1 className="name">AutoX</h1>
            <div className = "inner">
                <h1>Welcome!</h1>
                <p>Welcome! Please enter your details</p>
                <label>Email</label>
                <br></br>
                <input onChange={handleEmail} className="input-box" name = "email"  type="email" placeholder="Enter your email"></input>
                {/* <p className = "error">*this is a error</p> */}
                <label>Password</label>
                <br></br>
                <input onChange = {handlePassword} className="input-box" name = "password"  type="password" placeholder="Enter your password"></input>
                {/* <p className = "error">*this is a error</p> */}
                <label>Confirm Password</label>
                <br></br>
                <input onChange ={handleCpassword} className="input-box" name = "confirm_password" type="password" placeholder="Confirm Password"></input>
                {/* <p className = "error">*this is a error</p> */}
                <button onClick={handleClick} type = "submit"> Sign Up</button>
                <br></br>
                <button  type = "submit">Sign Up with Google</button>
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

export default SignUp;