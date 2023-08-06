import {useEffect, useState,useContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./home";
import SignUp from "./signUp/signUp";
import Login from "./login";
import Product from "./products";
import Shopping_cart from "./shoping_cart2";
import Product_list2 from "./product_list2";
import BookACall from "./book_a_call";
import ComparePricing from "./compare pricing/comparePricing";
import StoreLocator from "./store_locator";
import AboutUs from "./about_us";
import Store from "./store_list/store";
import StoreDetails from "./store_list/store_details";
import Practice from "./practice";
import Dashboard from "./dashboard/dashboard";
import StoreSignUp from "./storeSignUp/storeSignUp";
import StoreProduct from "./storeProduct/storeproducts";
import AppProvider from "./AppContext";
import SignUpOption from "./signUp/signUpOption";
import ProductDetails from "./productDetails";
import ComparePage from "./compare pricing/comparePage";
import UserOrderList from "./dashboard/userOrderList";
import AccountDetails from "./dashboard/account Details";

function App(){
    return (
        <AppProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<Shopping_cart />} />
              <Route path="/bookacall" element={<BookACall />} />
              <Route path="/comparepricing" element={<ComparePricing />} />
              <Route path="/storelocator" element={<StoreLocator />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/store" element={<Store />} />
              <Route path="/store-details" element={<StoreDetails />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/storeSignUp" element={<StoreSignUp />} />
              <Route path="/storeProduct" element={<StoreProduct />} />
              <Route path="/signUpOption" element={<SignUpOption />} />
              <Route path="/productDetails" element={<ProductDetails />} />
              <Route path="/comparePage" element={<ComparePage />} />
              <Route path="/userOrderList" element={<UserOrderList/>} />
              <Route path="/accountDetails" element = {<AccountDetails/>}/>
            </Routes>
          </BrowserRouter>
        </AppProvider>
      );
}

export default App;