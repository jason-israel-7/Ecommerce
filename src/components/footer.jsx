import React from "react";
import { BsFacebook, BsInstagram, BsPinterest, BsTwitterX, BsYoutube } from "react-icons/bs";
import { SiNewbalance } from "react-icons/si";

const FooterPage = ()=>{
    return(
        <>
        <div className="foot-header">
            <p>Be the first to know about new arrivals <button className="submit-btn">Sign Up</button></p>
        </div>
        <div className="footer">
            <div>
                <ul>
                    <li className="head"><a href="">Home</a></li>
                    <li><a href="">Contact us</a></li>
                    <li><a href="">Start a return</a></li>
                    <li><a href="">Track your order</a></li>
                    <li><a href="">Become a member</a></li>
                    <li><a href="">Save guide</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">How early access works</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="head"><a href="">Shop</a></li>
                    <li><a href="">Find a store</a></li>
                    <li><a href="">Gift cards</a></li>
                    <li><a href="">Shipping information</a></li>
                    <li><a href="">Sale exclusions</a></li>
                    <li><a href="">Custom uniforms</a></li>
                    <li><a href="">Reconsidered</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="head"><a href="">About us</a></li>
                    <li><a href="">Our Purpose</a></li>
                    <li><a href="">Responsible Leadership</a></li>
                    <li><a href="">New Balance Foundation</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">The TRACK at New Balance</a></li>
                    <li><a href="">Press box</a></li>
                    <li><a href="">Medical Plan Information</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="head"><a href="">For You</a></li>
                    <li><a href="">Special discount</a></li>
                    <li><a href="">Idea submission</a></li>
                    <li><a href="">Affiliate program</a></li>
                    <li><a href="">Counterfeit Products</a></li>
                    <li><a href="">Accessibility statement</a></li>
                </ul>
            </div>
            <div className="foot-last">
                <h2>Fearlessly Independent</h2>
                <h3><SiNewbalance/></h3>
                <p>Independent since 1906, we empower people through sport and craftsmanship to create positive change in communities around the world.</p>
                <div className="social-icons">
                    <a href=""><BsInstagram/></a>
                    <a href=""><BsFacebook/></a>
                    <a href=""><BsTwitterX/></a>
                    <a href=""><BsYoutube/></a>
                    <a href=""><BsPinterest/></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default FooterPage