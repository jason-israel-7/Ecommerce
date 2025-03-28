import React from "react";
import "./loginstyle.css"
import { FiPhone } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa6";
import { RiAppleFill } from "react-icons/ri";

function LoginPage(){
    return(
        <>
        <div className="headline">
         <h2>ChatGPT</h2>
        </div>

        <div className="form">
            <h1>Create an Account</h1>
             <div className="input-fields">
                 <input type="email" placeholder="Email address*"/>
                 <button>Continue</button>
             </div>
             <p className="account">Already have an account? <a href="">Login</a></p>
             <h3>━━━━━━OR━━━━━━</h3>

             <div className="buttons-login">
                <button> <span><FiPhone /></span> Continue with phone</button>
                <button><span><FcGoogle /> </span>Continue with Google</button>
                <button><span><FaMicrosoft /></span> Continue with Microsoft Account</button>
                <button><span><RiAppleFill /></span> Continue with Apple</button>
             </div>
        </div>

        <p className="termspolicy"><a href="">Terms of Use</a> | <a href="">Privacy Policy</a></p>
        </>
    )
}

export default LoginPage