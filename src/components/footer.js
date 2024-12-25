import React from 'react';
import { FaFacebook, FaInstagram, FaEbay } from "react-icons/fa";

function Footer () {
    return (
        <footer className="bg-black items-center p-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-white">
                {/* First Grid: Logo and Description */}
                <div className="flex flex-col items-center">
                    <img className="h-12" src={`${process.env.PUBLIC_URL}/Logo_4.png`} alt="Logo" />
                    <p className="text-lg max-w-xs break-words text-center">
                        We sell used parts, major and minor, even the smallest ones, all rigorously inspected, cleaned, pictured, and ready for shipping.
                    </p>
                </div>

                {/* Second Grid: Get In Touch */}
                <div className="text-center space-y-4">
                    <p className="text-xl font-semibold">Get In Touch</p>
                    <p className="text-lg">Text us at (619) 359-0333</p>
                    <p className="text-lg">Info@capstoneautoparts.com</p>

                    <a href="https://www.google.com/maps/search/?api=1&query=935+Bailey+Ct,+San+Marcos,+CA+92069" target="_blank" rel="noopener noreferrer">
                        <p className="text-lg py-4">935 Bailey Ct, San Marcos, CA 92069</p>
                    </a>
                </div>

                {/* Third Grid: Social Media Links */}
                <div className="flex flex-col items-center space-y-4">
                    <p className="mb-1 text-xl font-semibold">Follow Us</p>
                    <div className="flex flex-col items-center space-y-4">
                        <a href="https://www.ebay.com/str/capstoneautoparts" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                            <FaEbay className="w-10 h-9" />
                            <p className="text-white">Ebay</p>
                        </a>

                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                            <FaFacebook className="w-6 h-6" />
                            <p className="text-white">Facebook</p>
                        </a>

                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                            <FaInstagram className="w-6 h-6" />
                            <p className="text-white">Instagram</p>
                        </a>
                    </div>
                </div>
            </div>

            {/* Horizontal Line */}
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            {/* Second Grid: Footer Text */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-white text-sm">
                <div className="text-center">© 2024 Capstone Auto Parts Inc. All rights reserved.</div>
                <div className="text-center">Design & Developed By Haan's Designs.</div>
                <div className="text-center">Warranty | Partner Account Login</div>
            </div>
        </footer>
    );
}

export default Footer;
