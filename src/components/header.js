import React, { useState } from 'react';
import './header.css';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaEbay } from "react-icons/fa";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // state for menu toggle

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle menu visibility
    };

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
  <nav className="container mx-auto flex items-center justify-between px-4 w-full">
    {/* Logo on the left side */}
    <div className="logo-container">
      <img
        className="h-12"
        src={`${process.env.PUBLIC_URL}/Logo_4.png`}
        alt="Logo"
      />
    </div>

    {/* Navigation Links on the right side */}
    <div className="top-nav">
      <ul className="menu">
        <li><a href="/home">Home</a></li>
        <li><a href="https://www.ebay.com/str/capstoneautoparts" target="_blank" rel="noopener noreferrer">Inventory</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#aboutUs">About</a></li>
        <li><a href="#contactUs">Contact</a></li>
      </ul>
    </div>
  </nav>
</header>

        </section>
    );
}

export default Header;
