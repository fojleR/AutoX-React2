import React from "react"
import "./store_details.css"
import { useLocation } from "react-router-dom";



// {
//     "_id": {
//       "$oid": "64c7a323d8dc1515f39d5a79"
//     },
//     "Store_name": "abc_store",
//     "division": "Chittagong",
//     "district": "Chittagong",
//     "thana": "Chandgaon",
//     "url": "./img/store-1.jpg"
//   }
function StoreDetails(){
    const location = useLocation();
    const [paragraph, setParagraph] = React.useState("");

    const handleChange = (event) => {
        setParagraph(event.target.value);
    };

    const receiveData = location.state;
    return<div className = "Store-details">
        <div className="img">
            <img src={receiveData.url}></img>
            <p>{receiveData.Store_name}</p>
        </div>
        <div className="problem">
            <h1>Enter Your Problem</h1>
            <textarea
            value={paragraph}
            onChange={handleChange}
            rows={6} // Set the number of rows you want to display
            cols={40} // Set the number of columns you want to display
            />
            <p>{paragraph.length} /400</p>
            <button>Submit</button>
        </div>
    </div>
}

export default StoreDetails;