import React from "react";
import axios from "axios";
import divisionsData from "../location_list";
import { useNavigate } from "react-router-dom";
import "./storeSignUp.css";


function StoreSignUp(){
    const[newEmail, setEmail] = React.useState("");
    const[storeName, setStoreName] = React.useState("");
    const[newPassword, setPassword] = React.useState("");
    const[newCpassword, setCpassword] = React.useState("");
    const[DList, setDList] = React.useState(["Select your District"]);
    const[TList, setTList] = React.useState(["Select your Thana"]);
    const[divName, setdivName] = React.useState("");
    const[disName, setdisName] = React.useState("");
    const[thanaName, setthanaName] = React.useState("");
    const [imageData, setImageData] = React.useState("");

    const sendData = {
        divName: divName,
        disName: disName,
        thanaName: thanaName
    };

    const navigate = useNavigate();

    const goToLogIn = () =>{
        navigate("/login");
    }

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

    function handleDivision(event){
        const dName = event.target.value;
        setdivName(dName);
        const disList = divisionsData.filter(item=>{
            if(item.division == dName){
                return item.districts;
            } 
        })
        const newDistricts = [];
        disList.forEach((item1) => {
            item1.districts.forEach((item2) => {
                newDistricts.push(item2.district);
            });
        });

        setDList(["Select your District", ...newDistricts]);
    
    }
    const newThanaList = [];
    function handleDistrict(event){
        const disName = event.target.value;
        setdisName(disName);
        divisionsData.forEach(item =>{
            if(item.division == divName){
                item.districts.forEach(item2 =>{
                    if(item2.district == disName){
                        item2.thanas.forEach(item3 =>{
                            newThanaList.push(item3);
                        })
                    }
                })
            }
            
        })
        setTList(newThanaList);
        // console.log(TList);
    }

    function handleThana(event){
        setthanaName(event.target.value);
    }

    function handleEmail(event){
        const{name, value} = event.target;
        setEmail(value);
    }

    function handleStoreName(event){
        const{name, value} = event.target;
        setStoreName(value);
        console.log(storeName);
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
        // console.log(divName);
        // console.log(disName);
        // console.log(thanaName);
        // console.log(imageData);
        axios.post("http://localhost:5000/storeSignUp",{
            email: newEmail,
            storeName: storeName,
            password: newPassword,
            division: divName,
            district: disName,
            thana: thanaName,
            url: imageData
        }).then(function(res){
            console.log(res);
        }).catch(function(err){
            console.log(err);
        });
        goToLogIn();
        // console.log(Name);
        // console.log(Email);
    }
    return <div className = "login storeSingUp">
        <div className = "left">
            <h1 className="name">AutoX</h1>
            <div className = "inner">
                <h1>Welcome!</h1>
                <p>Welcome! Please enter your details</p>
                <label>Email</label>
                <br></br>
                <input onChange={handleEmail} className="input-box" name = "email"  type="email" placeholder="Enter your email"></input>
                <label>Store Name</label>
                <br></br>
                <input onChange={handleStoreName} className="input-box" name = "storeName"  type="txt" placeholder="Enter your Store Name"></input>
                {/* <p className = "error">*this is a error</p> */}
                <label>Password</label>
                <br></br>
                <input onChange = {handlePassword} className="input-box" name = "password"  type="password" placeholder="Enter your password"></input>
                {/* <p className = "error">*this is a error</p> */}
                <label>Confirm Password</label>
                <br></br>
                <input onChange ={handleCpassword} className="input-box" name = "confirm_password" type="password" placeholder="Confirm Password"></input>
                {/* <p className = "error">*this is a error</p> */}
                <label>Store Location</label>
                <select onChange={handleDivision}>
                <option>Select Your Division</option>
                    {
                        divisionsData.map(item =>{
                            return <option>{item.division}</option>
                        })
                    }
                </select>
                <select onChange={handleDistrict}>
                    {DList.map(item =>{
                        return <option>{item}</option>
                    })}
        
                </select>

                <select onChange={handleThana}>
                    <option>Select your Thana</option>
                    {TList.map(item =>{
                        return <option>{item}</option>
                    })}
                
                </select>
                <input className="input-box" placeholder="Enter Your Area"></input><br></br>
                <label>Store Image</label>
                <input className="image-input" onChange={handleChange} type="file"></input>
                <br></br>
                
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

export default StoreSignUp;