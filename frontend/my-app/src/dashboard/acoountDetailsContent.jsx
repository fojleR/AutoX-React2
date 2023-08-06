import React, { useContext } from "react";
import { AppContext } from "../AppContext";

function AccountDetailsContent(){
    const {info} = useContext(AppContext)
    return <div className="accountDetailsContent">
        <div>
            <p>Email: {info.email}</p>
            <p>Password: {info.password}</p>
            <p>Account Type: {info.type}</p>
            {info.type == "Shop Owner" && <p>Store Name: {info.storeName}</p>}
        </div>
        
    </div>
}

export default AccountDetailsContent;