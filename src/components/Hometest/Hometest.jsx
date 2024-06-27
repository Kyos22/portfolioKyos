import React from "react";
import './Hometest.css';
import image1 from'../images/image1.png';
import Navbar from "../Navbar/Navbar";
import Mainpage from "../Mainpage/Mainpage";
function Hometest() {
    return(
        <div className="homepage  ">
            <Navbar/>
            <Mainpage/>
        </div>
    )
}
export default Hometest;