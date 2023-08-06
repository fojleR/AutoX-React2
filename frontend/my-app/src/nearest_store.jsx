import React from "react"
import store_list from "./store_list";
import divisionsData from "./location_list";
import { useNavigate } from "react-router-dom";


function Nearest_store(){
    const[dName, setDName] = React.useState("");
    const[tName, setTName] = React.useState("");
    const[aName, setAName] = React.useState("");
    const[sp_list, setShopList] = React.useState([]);

    const[DList, setDList] = React.useState(["Select your District"]);
    const[TList, setTList] = React.useState(["Select your Thana"]);
    const[DivName, setDivname] = React.useState("");

    const sendData = {
        divName: DivName,
        disName: dName,
        thanaName: tName
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
        setDivname(dName);
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
        setDName(disName);
        divisionsData.forEach(item =>{
            if(item.division == DivName){
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
    }
    // function handleDistrict(event){
    //     //console.log(event.target.value);
    //     const{name, value} = event.target;
    //     setDName(value);
    // }
    function handleThana(event){
        //console.log(event.target.value);
        const{name, value} = event.target;
        setTName(value);
    }
    function handleArea(event){
        //console.log(event.target.value);
        const{name, value} = event.target;
        setAName(value);
        var newlist = store_list.filter(item =>{
            console.log(aName);
            return(aName === item.area)
        });
        if(newlist.length){
            setShopList(newlist);
        }
    }
    console.log(sp_list);
    return <div className = "nearest-store">
        <h1 className="nearest-store-title">Find Your Nearest Store</h1>
        <div>
            <h1 >Enter Your Division</h1>
            <select onChange={handleDivision}>
                <option>Select Your Division</option>
                {
                    divisionsData.map(item =>{
                        return <option>{item.division}</option>
                    })
                }
            </select>
            <h1 >Enter Your District</h1>
            <select onChange={handleDistrict}>
                {DList.map(item =>{
                    return <option>{item}</option>
                })}   
            </select>
                {/* <input onChange={handleDistrict} name = "district" placeholder="Enter Your District"></input> */}
                <h1>Enter Your Thana</h1>
            <select onChange={handleThana}>
                    <option>Enter Your Thana</option>
                    {TList.map(item =>{
                        return <option>{item}</option>
                    })}
                
            </select>
                {/* <input onChange={handleThana} name = "district" placeholder="Enter Your District"></input> */}
                <h1>Enter Your Area</h1>
            <input onChange={handleArea} name = "area" placeholder="Enter Your Area"></input>
            <br></br>
            <button onClick={handleClick}>Find Sotres</button>
                {/* <h1>Congratulations! You've found nearest stores</h1>
                <ul>
                    {sp_list.map(item =>{
                        return <li>{item.store_name}</li>
                    })}
                </ul>
             */}
        </div>
        
    </div>
}

export default Nearest_store;