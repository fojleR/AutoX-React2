import React from "react";
import Nav2 from "../navbar2";
import Footer from "../footer";
import "./dashboard.css"
import Content from "./content";

function Dashboard(){
    return<div className="dashboard">
        <Nav2/>
        <Content />
        <Footer />
    </div>
}

export default Dashboard;