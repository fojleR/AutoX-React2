import React from "react"
import { Link } from "react-router-dom";
import Nav2 from "../navbar2";
import "./signUp.css"

function SignUpOption(){
    return <div className="signUpOption">
        <Nav2 />
        <div className="inner">
            <h1>Choose SignUp Option</h1>
            <ul>
                <li>
                    <Link to = "/signup">SignUp as User</Link>
                </li>
                <li>
                    <Link to = "/storeSignUp" >SignUp as Shop Owner</Link>
                </li>
            </ul>
        </div>
    </div>
}

export default SignUpOption;