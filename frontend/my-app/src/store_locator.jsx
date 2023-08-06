import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import divisionsData from "./location_list";
import { useNavigate } from "react-router-dom";

// console.log(divisionsData)


function StoreLocator(){

    const[DList, setDList] = React.useState(["Select your District"]);
    const[TList, setTList] = React.useState(["Select your Thana"]);
    const[divName, setdivName] = React.useState("");
    const[disName, setdisName] = React.useState("");
    const[thanaName, setthanaName] = React.useState("");

    const sendData = {
        divName: divName,
        disName: disName,
        thanaName: thanaName
    };

    const navigate = useNavigate();
    const goToStore = () =>{
        navigate("/store", {state: sendData});
    }

    function handleClick(){
        // console.log("clicked");
        // console.log(thanaName);
        goToStore();
    }

    
    // const[TList, setTList] = React.useState([]);
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

    return <div className = "book_a_call">
        <Navbar />
        <img src="/img/book_a_call_background.png"></img>
        <div className="request">
            <h1>Store Locator</h1>
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
            
            <br/>
            <input placeholder="Enter your Area"/>
            <br/>
            <div className="buttons">
                <button onClick={handleClick}>Search Store</button>
            </div>
        </div>
        <Footer />
    </div>
    
}

export default StoreLocator;