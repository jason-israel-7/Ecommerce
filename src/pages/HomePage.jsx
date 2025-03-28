import React from "react";
import { Link } from "react-router-dom";
import homeimage from './assets/homeimg.jpg'
import man2 from './assets/men-pro1.webp'
import man3 from './assets/men-pro2.webp'
import man4 from './assets/men-pro3.webp'
import man5 from './assets/men-pro4.webp'
import man6 from './assets/men-pro5.webp'
import man7 from './assets/men-pro6.webp'
import man8 from './assets/men-pro7.webp'
import man9 from './assets/men-pro8.webp'
import man10 from './assets/men-pro9.webp'
import man11 from './assets/men-pro10.webp'
import man12 from './assets/men-pro11.webp'
import man13 from './assets/men-pro12.webp'
import man14 from './assets/men-pro13.webp'
import man15 from './assets/men-pro14.webp'
import women1 from './assets/women-pro7.webp'
import women2 from './assets/women-pro8.webp'
import women3 from './assets/women-pro9.webp'
import women4 from './assets/women-pro10.webp'
import women5 from './assets/women-pro11.webp'
import women6 from './assets/women-pro12.webp'
import women7 from './assets/women-pro13.webp'
import women8 from './assets/women-pro14.webp'
import twoimg1 from './assets/twoone.jpg'
import twoimg2 from './assets/twotwo.jpg'
import { motion } from "framer-motion";




function HomePage() {
  return (
    <>
    <motion.div initial={{opacity:0, scale:0}}
    whileInView={{opacity:1,scale:1}}
    transition={{duration:1}}
    className="homepage">
      <img src={homeimage} alt="" />
      <div className="home-content">
      <h1>Welcome to Our Store</h1>
      <p>Discover the best products at amazing prices.</p>
      <Link to='/products'><button className="submit-btn">Shop Now</button></Link>
      </div>
    </motion.div>
      <h1 className="coll">Our Collections</h1>
    <div className="shopsurface">
      <h2>Shoe Collections by New Balance</h2>
      <div className="shopbysur">
           <div>
            <img src={man2} alt="" />
            <h3>574 Core</h3>
            <h4>RS-10000</h4>
           </div>
           <div>
            <img src={man3} alt="" />
            <h3>Fresh Foam X 1080v14</h3>
            <h4>RS-15000</h4>
           </div>
           <div>
            <img src={man4} alt="" />
            <h3>1960R</h3>
            <h4>RS-12000</h4>
           </div>
           <div>
            <img src={man5} alt="" />
            <h3>9060</h3>
            <h4>RS-13500</h4>
           </div>
           <div>
            <img src={man6} alt="" />
            <h3>Made in USA 990v6</h3>
            <h4>RS-14000</h4>
           </div>
           <div>
            <img src={man7} alt="" />
            <h3>1440 Running Shoes</h3>
            <h4>RS-14000</h4>
           </div>
      </div>
    </div>
    <h2 className="mens-head">Men's Collections</h2>
    <div className="category">
        <div>
          <img src={man8} alt="" />
          <h3>White Track Pants</h3>
          <h4>RS-5000</h4>
        </div>
        <div>
          <img src={man9} alt="" />
          <h3>Maroon Track Pants</h3>
          <h4>RS-5500</h4>
        </div>
        <div>
          <img src={man10} alt="" />
          <h3>Black Track Pants</h3>
          <h4>RS-6000</h4>
        </div>
        <div>
          <img src={man11} alt="" />
          <h3>RC Shorts 7"</h3>
          <h4>RS-3000</h4>
        </div>
        <div>
          <img src={man12} alt="" />
          <h3>RC Shorts 5"</h3>
          <h4>RS-2000</h4>
        </div>
        <div>
          <img src={man13} alt="" />
          <h3>RC Shorts 5"</h3>
          <h4>RS-2500</h4>
        </div>
        <div>
          <img src={man14} alt="" />
          <h3>Full sized Hoodie Blue</h3>
          <h4>RS-5000</h4>
        </div>
        <div>
          <img src={man15} alt="" />
          <h3>Logo Printed T-shirt Black</h3>
          <h4>RS-6000</h4>
        </div>
    </div>
    <h2 className="women-head">Women's Collections</h2>
    <div  className="women-cloth">
        <div>
           <img src={women1} alt="" />
           <h3>Full Sized T-shirt</h3>
           <h4>RS-5000</h4>
        </div>
        <div>
           <img src={women2} alt="" />
           <h3>Finisher Hoodie Full size</h3>
           <h4>RS-6000</h4>
        </div>
        <div>
           <img src={women3} alt="" />
           <h3>New Balance Hoodie</h3>
           <h4>RS-5000</h4>
        </div>
        <div>
           <img src={women4} alt="" />
           <h3>T-shirt Half sized</h3>
           <h4>RS-3000</h4>
        </div>
        <div>
           <img src={women5} alt="" />
           <h3>Gym Essential Hoddie</h3>
           <h4>RS-5500</h4>
        </div>
        <div>
           <img src={women6} alt="" />
           <h3>Gym Full Sized T-shirt</h3>
           <h4>RS-4000</h4>
        </div>
        <div>
           <img src={women7} alt="" />
           <h3>Half Necked Full sized shirt</h3>
           <h4>RS-5500</h4>
        </div>
        <div>
           <img src={women8} alt="" />
           <h3>New Balance Hoodie Logo Printed</h3>
           <h4>RS-7000</h4>
        </div>
    </div>
    <h1 className="best-sec">The Best 976</h1>
     <motion.div  initial={{opacity:0, scale:0}}
    whileInView={{opacity:1,scale:1}}
    transition={{duration:1}} className="twoimg">
      <div>
        <img src={twoimg1} alt=""/>
        <h3>The Fuelcell Rebel</h3>
        <button className="submit-btn">Shop men</button>
      </div>
      <div>
        <img src={twoimg2} alt=""/>
        <h3>The Custom Collections</h3>
        <button className="submit-btn">Shop Women</button>
      </div>
     </motion.div> 
    </>
  );
}

export default HomePage;
