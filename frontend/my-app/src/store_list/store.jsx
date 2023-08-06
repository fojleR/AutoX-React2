import React from "react";
import Header2 from "./header2";
import Shopping_cart from "./shoping_cart2";
import { useLocation } from "react-router-dom";

function Store(){
    const location = useLocation();
    const receiveData = location.state;

    const[rcvData, setReceiveData] = React.useState({})

    React.useEffect(()=>{
        setReceiveData(receiveData);
    }, [receiveData])
    
    return <div className="Store">
        <Header2 />
        <Shopping_cart
        send = {rcvData} 
        />
    </div>
}

export default Store;
