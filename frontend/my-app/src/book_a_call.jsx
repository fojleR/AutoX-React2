import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function BookACall(){
    return <div className = "book_a_call">
        <Navbar />
        <img src="/img/book_a_call_background.png"></img>
        <div className="request">
            <h1>Request a service now</h1>
            <input/>
            <br/>
            <input/>
            <br/>
            <div className="buttons">
                <button>Request now</button>
                <button>Schedule for later</button>
            </div>
        </div>
        <Footer />
    </div>
    
}

export default BookACall;