import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function AboutUs(){
    return <div className = "book_a_call">
        <Navbar />
        <img src="/img/book_a_call_background.png"></img>
        <div className="about-us">
            <h1>250 Stores</h1>
            <h1>50,000+ Users</h1>
            <h1>64 Districts</h1>
        </div>
        <Footer />
    </div>
    
}

export default AboutUs;