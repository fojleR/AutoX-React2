import React from "react";
import { useEffect,useState } from "react";
import Navbar from "./navbar";
import Title from "./title_box"
import Best_seller from "./best_seller";
import Nearest_store from "./nearest_store";
import Store_collection from "./store_collection";
import Home_book_a_call from "./home_book_a_call";
import How_to_buy from "./how_to_buy";
import Footer from "./footer";
import { useLocation} from "react-router-dom";

function Home(){
    const location = useLocation();
    const [receiveData, setReceiveData] = useState({
        isLoged: false,
        email: "",
        password: "",
      });

      useEffect(() => {
        // Check if location.state is set before updating the receiveData state
        if (location.state) {
          setReceiveData(location.state);
        }
      }, [location.state]);


    return(
        <div>
            <Navbar 
            info = {receiveData}
            />
            <Title />
            <Best_seller />
            <Nearest_store />
            <Store_collection />
            <Home_book_a_call />
            <How_to_buy />
            <Footer />
        </div>
    )
}

export default Home;