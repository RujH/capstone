import React from 'react';
import './services.css';

function Services() {
    return (
        <section className="services">
            <h2 className="services-title merriweather-bold">What Do We Do Differently?</h2>
            <div className=" max-w-5xl mx-auto">
                <p className="text-base mb-4 text-grey-800 break-words">
                    At Capstone Auto Parts, we set ourselves apart from others in the used auto parts market through our attention to detail and commitment to provide consistency in the quality of our parts while maintaining price competitiveness.
                    Each step of our process, from cleaning to shipping, is designed to ensure the best experience for our customers.
                    Here’s how we do things differently:
                </p>
            
            </div>

            <div className="flex flex-row bg-black rounded-lg overflow-hidden max-w-screen-lg mx-auto mb-5">
                <div className="flex flex-col p-6 w-3/4">
                    <h5 className="text-2xl font-semibold text-white mb-2">
                        CLEANING
                    </h5>
                    <p className="text-base text-gray-300">
                        We fully dismantle vehicles and thoroughly clean every part before an initial inspection and the decision to list a part. It is nearly impossible to accurately inspect and inventory a part if it hasn’t been removed from the vehicle and thoroughly cleaned.
                    </p>
                </div>
                <img 
                    className="object-cover w-1/4 h-80 md:h-60" 
                    src={`${process.env.PUBLIC_URL}/carPart.png`} 
                    alt="Cleaning" 
                />
            </div>


             <div className="flex flex-row bg-black rounded-lg overflow-hidden max-w-screen-lg mx-auto mb-5">
                <div className="flex flex-col p-6 w-3/4">
                    <h5 className="text-2xl font-semibold text-white mb-2">
                        PHOTOGRAPHY
                    </h5>
                    <p className="text-base text-gray-300">
                        We believe in transparency, which is why we provide detailed, high-resolution photos of our parts. These images offer a clear and accurate representation of the item, helping our customers make informed decisions without surprises.                    
                    </p>
                </div>

                <img 
                    className="object-cover w-1/4 h-80 md:h-60" 
                    
                    src={`${process.env.PUBLIC_URL}/CarDoor.png`} 
                    alt="Cleaning" 
                />
             </div>

             <div className="flex flex-row bg-black rounded-lg overflow-hidden max-w-screen-lg mx-auto mb-5">
                <div className="flex flex-col p-6 w-3/4">
                    <h5 className="text-2xl font-semibold text-white mb-2">
                        STORAGE
                    </h5>
                    <p className="text-base text-gray-300">
                    We believe in transparency, which is why we provide detailed, high-resolution photos of our parts. These images offer a clear and accurate representation of the item, helping our customers make informed decisions without surprises.                    
                    </p>
                </div>
                <img 
                    className="object-cover w-1/4 h-80 md:h-60" 
                    src={`${process.env.PUBLIC_URL}/Storage.png`} 
                    alt="Cleaning" 
                />
             </div>


             <div className="flex flex-row bg-black rounded-lg overflow-hidden max-w-screen-lg mx-auto mb-5">
                <div className="flex flex-col p-6 w-3/4">
                    <h5 className="text-2xl font-semibold text-white mb-2">
                        SHIPPING​
                    </h5>
                    <p className="text-base text-gray-300">
                        Our shipping process is streamlined for speed and reliability. We carefully pack each part to ensure it’s protected during transit, and we work with trusted carriers to get your parts to you quickly and in perfect condition.
                    </p>
                </div>
                <img 
                    className="object-cover w-1/4 h-80 md:h-60" 
                    src={`${process.env.PUBLIC_URL}/Shipping.png`} 
                    alt="Cleaning" 
                />
             </div>


             <div className="flex flex-row bg-black rounded-lg overflow-hidden max-w-screen-lg mx-auto mb-5">
                <div className="flex flex-col p-6 w-3/4">
                    <h5 className="text-2xl font-semibold text-white mb-2">
                        WARRANTY
                    </h5>
                    <p className="text-base text-gray-300">
                        At Capstone Auto Parts, we take pride in offering top-quality used car parts that come with a standard 1-year warranty for added peace of mind in most part categories. For customers seeking even greater protection, we also provide the option to purchase up to 3 years of extended warranty, as well as labor warranties.
                    </p>
                </div>
                <img 
                    className="object-cover w-1/4 h-80 md:h-60" 
                    src={`${process.env.PUBLIC_URL}/CarLot.png`} 
                    alt="Cleaning" 
                />
             </div>


        </section>
    );
};

export default Services;
