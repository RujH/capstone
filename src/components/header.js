import React from 'react';
import './header.css';
import {  PhoneIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline'; 
import { FaEbay } from "react-icons/fa";

function Header () {
    return (
        <section>
            {/* First Header (Contact Information) */}
            <header className="bg-white h-auto flex items-center py-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full mx-auto px-4">
                    <div className="flex items-center justify-center text-center">
                        <PhoneIcon className="w-6 h-6 text-green-368 mr-2" />
                        <p className="text-sm sm:text-base">(619) 359 0333</p>
                    </div>

                    <div className="flex items-center justify-center text-center">
                        <EnvelopeIcon className="w-6 h-6 text-green-368 mr-2" />
                        <p className="text-sm sm:text-base">Sales@capstoneautoparts.com</p>
                    </div>

                    <a
                        href="https://www.google.com/maps/search/?api=1&query=935+Bailey+Ct,+San+Marcos,+CA+92069"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex items-center justify-start cursor-pointer hover:bg-gray-100 p-2 rounded">
                            <MapPinIcon className="w-6 h-6 text-green-368 mr-2" />
                            <p className="text-sm sm:text-base">935 Bailey Ct, San Marcos, CA 92069</p>
                        </div>
                    </a>

                    <div className="flex items-center justify-center text-center">
                        <p className="text-sm sm:text-base mr-2 whitespace-nowrap">Find Us On</p>
                        <a href="https://www.ebay.com/str/capstoneautoparts" target="_blank" rel="noopener noreferrer">
                            <FaEbay className="w-10 h-10" />
                        </a>
                    </div>
                </div>
            </header>

            {/* Second Header (Navigation) */}
            <header className="bg-black h-auto flex items-center py-4">
                <nav className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 w-full">
                    <div className="py-1 flex items-center justify-center sm:justify-start">
                        <img
                            className="h-12" 
                            src={`${process.env.PUBLIC_URL}/Logo_4.png`}
                            alt="Logo"
                        />
                    </div>

                    {/* Mobile Navigation (Hidden on larger screens) */}
                    <ul className="sm:hidden flex flex-col items-center w-full gap-4 text-white uppercase text-sm">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>

                    {/* Desktop Navigation */}
                    <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-white uppercase text-sm">
                        <li><a href="#home">Home</a></li>
                        <li><a href="https://www.ebay.com/str/capstoneautoparts" target="_blank" rel="noopener noreferrer">Inventory</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#aboutUs">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </section>
    );
}



export default Header;
