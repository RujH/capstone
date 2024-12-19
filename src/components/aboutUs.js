import React from 'react';
import './aboutUs.css';
import {ShieldCheckIcon, ClockIcon, CheckIcon, CameraIcon} from '@heroicons/react/24/outline'; 



function AboutUs () {
    return (
        <section className="about-us" id="aboutUs">
            <div className='content-center'>
                <div className="row">

                    <h2 className="about-title merriweather-bold">About Us</h2>
                    
                    <p className="about-description">
                        Welcome to our website! We are a team of passionate professionals dedicated to delivering exceptional service and innovative solutions. Our goal is to create value and impact through our expertise and commitment to excellence.
                        With years of experience in the industry, we strive to stay ahead of the curve, adopting the latest technologies and methodologies to deliver outstanding results for our clients.
                    </p>
                   
                </div>

                <div className='row1'>
                    <div className="small-section">
                        <ShieldCheckIcon className="w-10 h-10 text-green-368" />
                        <p className="text">Rigorous Inspection Checks</p>
                    </div>
                    <div className="small-section">
                        <CameraIcon className="w-10 h-10 text-green-368" />
                        <p className="text">High Quality Pictures of all Parts</p>
                    </div>
                    <div className="small-section">
                        <ClockIcon className="w-10 h-10 text-green-368" />
                        <p className="text">Shipped Within 24 Hours</p>
                    </div>
                   
                    <div className="small-section">
                        <CheckIcon className="w-10 h-10 text-green-368" />
                        <p className="text">Complementary Warranty</p>
                    </div>
                   
                </div>

            </div>
          
        </section>
    );
};

export default AboutUs;
