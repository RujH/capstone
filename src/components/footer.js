import React from 'react';
import './footer.css';
import { FaFacebook, FaInstagram, FaEbay } from "react-icons/fa";

function Footer () {
    return (
        <section className='footer'>
            <div >  
                <div class="grid grid-cols-3 gap-10 footerText">
                    <div >
                        <img className="logo" src={`${process.env.PUBLIC_URL}/Logo_4.png`} alt="Logo"/>   
                        <p className="text-lg">
                            We sell used parts, major and minor, even the smallest ones, all rigorously inspected, cleaned, pictured and ready for shipping.  
                        </p>

                    </div>
                    <div className="text-center space-y-4">
                        <h3 className="text-xl">Get In Touch</h3>
                        <p className="text-lg">(619) 359 0333</p>
                        <p className="text-lg">935 Bailey Ct, San Marcos, CA 92069</p>
                    </div>



                    <div className="text-center">
                        <h3 className="mb-4">Follow Us</h3>

                        <div className="flex flex-col items-center space-y-4">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                                <FaFacebook className="w-6 h-6" />
                                <p className="text-white">Facebook</p>
                            </a>
                            <a href="https://www.ebay.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                                <FaEbay className="w-8 h-8" />
                                <p className="text-white">Ebay</p>
                            </a>

                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                                <FaInstagram className="w-6 h-6" />
                                <p className="text-white">Instagram</p>
                            </a>

                        
                        </div>
                    </div>


                </div>

                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                <div className="grid grid-cols-3  footerText">
                    <div>
                        © 2024 Capstone Auto LLC. All rights reserved.
                    </div> 
                    <div>
                        Design & Developed By Haan's Designs. ​
                    </div>
                    <div>
                        Warranty  | Partner Account Login ​
                    </div>
                </div>
                

           
            </div>
        </section>
       
       
    );
};

export default Footer;
