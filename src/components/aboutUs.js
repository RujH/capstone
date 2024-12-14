import React from 'react';
import './aboutUs.css';
import { HandThumbUpIcon, ClockIcon, CheckIcon, CameraIcon} from '@heroicons/react/24/outline'; 



function AboutUs () {
    return (
        <section className="about-us">
            <div className='content-center'>
                <div className="row">

                    <h2 className="about-title">About Us</h2>
                    
                    <p className="about-description">
                        Welcome to our website! We are a team of passionate professionals dedicated to delivering exceptional service and innovative solutions. Our goal is to create value and impact through our expertise and commitment to excellence.
                        With years of experience in the industry, we strive to stay ahead of the curve, adopting the latest technologies and methodologies to deliver outstanding results for our clients.
                    </p>
                   
                </div>

                <div className='row1'>
                    <div className="small-section">
                        <HandThumbUpIcon className="w-6 h-6 text-green-500" />
                        <p className="text">1 Year Complimentary Warranty</p>
                    </div>
                    <div className="small-section">
                        <ClockIcon className="w-6 h-6 text-green-500" />
                        <p className="text">Shipped within 24 Hours</p>
                    </div>
                    <div className="small-section">
                        <CameraIcon className="w-6 h-6 text-green-500" />
                        <p className="text">High quality pictures of all parts</p>
                    </div>
                    <div className="small-section">
                        <CheckIcon className="w-6 h-6 text-green-500" />
                        <p className="text">Satisfaction Guaranteed</p>
                    </div>
                   
                </div>

            </div>
          
        </section>
    );
};

export default AboutUs;
