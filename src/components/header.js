import React from 'react';
import './header.css';


function Header () {
    return (
        <header className="header">

          
            <img className="logo" src={`${process.env.PUBLIC_URL}/Logo_4.png`} alt="Logo"/>           
    
            <nav className="nav">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
