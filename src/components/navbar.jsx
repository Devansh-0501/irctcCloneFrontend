import React from "react";
import img1 from "../assets/logoLeft.png";
import img2 from "../assets/logoRight.png";
import "../styles/navbar.css";
import Clock from "./Clock";

const navbar = () => {
  return (
    <nav>
      <img src={img1} alt="" />
      <div className="mid-nav">
        <div className="upper-mid-nav">
          <button style={{background:"#213d77",color:"#fff", fontWeight:"700"}}>LOGIN</button>
          <button>REGISTER</button>
          <button>AGENT LOGIN</button>
          <button>CONTACT US</button>
          <button style={{color:"#ff0000" , fontWeight:"700"}}>DAILY DEALS</button>
          <button style={{backgroundColor:"#DEDEDE", color:"black" , fontWeight:"700"}}>ALERTS</button>
          <Clock/>
          <div style={{ fontWeight:"700", display:"flex", justifyContent:"space-between", alignItems:"center"}}>A{<sup>-</sup>} A A{<sup>+</sup>} हिंदी</div>

        </div>
        <div className="lower-mid-nav">
        <button style={{background:"#213d77",color:"#fff", fontWeight:"700"}}>IRCTC EXCLUSIVE</button>
        <button style={{color:"#fb792b" , fontWeight:"700"}}>TRAINS</button>
        <button>LOYALTY</button>
        <button style={{textDecoration: "underline #fb792b 3px"}}>IRCTC eWallet</button>
        <button>BUSES</button>
        <button>FLIGHTS</button>
        <button>HOTELS</button>
        <button>HOLIDAYS</button>
        <button>MEALS</button>
        <button>PROMOTIONS</button>
        <button>MORE</button>

        </div>
      </div>
      <img src={img2} alt="" />
    </nav>
  );
};

export default navbar;
