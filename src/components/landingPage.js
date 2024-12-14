import React from 'react';
import './landingPage.css';



function LandingPage () {


    return (
        <div className="landing-page">
            <video className="landing-video" autoPlay muted loop>
                <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay">
                <h1> A New Approach to Auto Recycling
                    Where
                    Sustainability, Affordability and Consistent Quality 
                    are our beacon of future
                </h1>
            </div>
        </div>
    );
};

export default LandingPage;
