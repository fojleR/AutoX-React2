import React from "react"
import Nav2 from "../navbar2";
import Footer from "../footer";
import AccountDetailsContent from "./acoountDetailsContent";
import "./accout Details.css"

function AccountDetails(){
    return <div className="accountDetails">
        <Nav2 />
        <AccountDetailsContent />
        <Footer />
    </div>
}

export default AccountDetails;