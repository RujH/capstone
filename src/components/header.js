import React from 'react';
import './header.css';
import {  PhoneIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline'; 
import { FaFacebook, FaInstagram, FaEbay } from "react-icons/fa";

function Header () {
    return (
        <div>  
            <header className='header1'> 

                 <div className='headerRow flex'>
                    <div className='flex space-x-5 textHeader'>
                        <div className="small-section">
                            <PhoneIcon className="w-6 h-6 text-green-500 mr-2" />
                            <p> (619) 359 0333 </p>
                        </div>
                        <div className="small-section">
                            <EnvelopeIcon className="w-6 h-6 text-green-500 mr-2" />
                            <p> Sales@capstoneautoparts.com</p>
                        </div>
                        <div className="small-section ">
                            <MapPinIcon className="w-6 h-6 text-green-500 mr-2" />
                            <p> 935 Bailey Ct, San Marcos, CA 92069</p>
                        </div>
                    </div>
                    
                   
                    <div className="flex space-x-5 space-between-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className='w-6 h-6'></FaFacebook>
                        </a>
                        
                  
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                   

                        <a href="https://www.ebay.com" target="_blank" rel="noopener noreferrer">
                            <FaEbay className="w-8 h-8" />
                        </a>

                    </div>
                   
                   
                </div>

            </header>
            
            
            <header className="header2">
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
        </div>
       
    );
};

export default Header;
