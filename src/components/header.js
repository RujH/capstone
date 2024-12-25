import React, { useState } from 'react';
import './header.css';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaEbay } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
   
    const [nav, setNav] = useState(false);
    

    return (
        <section>
           <header className="header1">
                <div className="flex justify-between items-center w-full mx-auto px-4">
                    {/* Left Side: Contact Information */}
                    <div className="flex space-x-8">
                        <div className="flex items-center">
                            <PhoneIcon className="w-6 h-6 text-green-368 mr-2" />
                            <p className="text-sm sm:text-base">(619) 359-0333</p>
                        </div>
                        <div className="flex items-center">
                            <EnvelopeIcon className="w-6 h-6 text-green-368 mr-2" />
                            <p className="text-sm sm:text-base">Sales@capstoneautoparts.com</p>
                        </div>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=935+Bailey+Ct,+San+Marcos,+CA+92069"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                        >
                            <MapPinIcon className="w-6 h-6 text-green-368 mr-2" />
                            <p className="text-sm sm:text-base">935 Bailey Ct, San Marcos, CA 92069</p>
                        </a>
                    </div>

                    {/* Right Side: eBay Section */}
                    <div className="flex items-center">
                        <p className="text-sm sm:text-base mr-2 whitespace-nowrap">Find Us On</p>
                        <a href="https://www.ebay.com/str/capstoneautoparts" target="_blank" rel="noopener noreferrer">
                            <FaEbay className="w-10 h-10" />
                        </a>
                    </div>
                </div>
            </header>

            <header className="header2">

                <nav className="container mx-auto flex flex-col sm:flex-row justify-between px-4 w-full">
                    <div className="py-1 flex justify-start">
                        <img className="h-12" src={`${process.env.PUBLIC_URL}/Logo_4.png`} alt="Logo" />
                    </div>
                    
                    <div className="flex flex-wrap  max-w-screen-lg">
                

                        <div
                        
                            className={`flex-col md:flex md:flex-row justify-between gap-4' items-center w-full md:w-auto md:order-2 transition-all duration-300 ${
                            nav
                            
                                ? "absolute top-14 left-0 w-full bg-gray-800 text-white shadow-md p-4 md:relative md:top-0 md:w-auto md:bg-transparent md:shadow-none"
                                : "hidden md:flex gap-6"
                            }`}
                        >
                            <ul className="flex flex-col md:flex-row md:gap-8 gap-0 md:ml-auto">
                            <li>
                                <a
                                href="/home"
                                className="block py-2 pr-4 pl-3 text-whiterounded md:bg-transparent md:text-primary-700 md:p-0 dark:text-white"
                                >Home</a>
                            </li>
                            <li>
                                <a
                                href="https://www.ebay.com/str/capstoneautoparts"
                                className="block py-2 pr-4 pl-3 text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                > Inventory</a>
                            </li>
                            <li>
                                <a
                                href="/services"
                                className="block py-2 pr-4 pl-3 text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                > Services</a>
                            </li>
                            <li>
                                <a
                                href="/aboutUs"
                                className="block py-2 pr-4 pl-3 text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >About</a>
                            </li>
                            <li>
                                <a
                                href="/contactUs"
                                className="block py-2 pr-4 pl-3 text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >Contact</a>
                            </li>
                            </ul>
                            
                        </div>

                        <div className="md:hidden flex items-center lg:order-1">
                            <button
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 "
                            aria-controls="mobile-menu"
                            aria-expanded={nav}
                            onClick={() => setNav(!nav)}
                            >
                                {nav ? (
                                    <GrClose className="w-6 h-6" />
                                ) : (
                                    <GiHamburgerMenu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </nav>

            
            </header>

        </section>
    );
}

export default Header;
