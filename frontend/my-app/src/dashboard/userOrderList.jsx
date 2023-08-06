import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import axios from "axios";
import "./userOrderList.css"
import Nav2 from "../navbar2";
import Footer from "../footer";

function UserOrderList(){
    const[orderList, setOrderList] = useState([])
    const{info} = useContext(AppContext);

    React.useEffect( () =>{
        const fetchName = async () => {
            try {
              const res = await axios.get("http://localhost:5000/order");
              setOrderList(res.data);
              //console.log(res.data);
              //setName(res.data[2].name);
            } catch (error) {
              console.log(error);
            }
          };
          fetchName();
    }, []);
    

    return <div className="orderMain">
            <Nav2 />
            <div className="orderList">
                <table className="orderListContent">
                    <tr>
                        <th>Product Name</th>
                        <th>Image</th>
                        {/* <th>Store Name</th> */}
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                    {
                     orderList.map(item=>{
                            if(item.customerEmail === info.email){
                            {/* console.log(item); */}
                            return <tr>
                                <td>{item.productName}</td> 
                                <td><img src={item.productUrl}></img></td>
                                {/* <td>{item.storeName}</td>  */}
                                <td>{item.productPrice}</td>
                                <td>{item.quantity}</td>
                            </tr>
                    }
                })
                    }
                </table>
            </div>
            
        <Footer />    
    </div>
}

export default UserOrderList; 