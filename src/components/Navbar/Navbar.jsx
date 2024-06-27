import React, { useState } from "react";
import './Navbar.css';
function Navbar(){

    const [isOpen,setisOpen] = useState(false);
    const toggleMenu = () => {
        setisOpen(!isOpen);
    }
    return(
        <div className="navbar">
            <a className="logo" href="#">KYOS</a>
            <ul className={`navbar-ul ${isOpen ? 'active' : ''}`}>
                <li className="navbar-item">About Us</li>
                <li className="navbar-item">Skill & Tech</li>
                <li className="navbar-item">Contact</li>
            </ul>
            <div class="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
    </div>
        </div>
    )
}
export default Navbar;