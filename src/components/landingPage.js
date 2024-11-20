import React from 'react';
import './landingPage.css';



const LandingPage = () => {


    return (
        <div className="landing-page">

             <div>
                <img className="logo" src={`${process.env.PUBLIC_URL}/Logo_4.png`} alt="Logo"  />
            </div>
            {/* Reference the video directly from the public folder */}
            <video className="landing-video" autoPlay muted loop>
                <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay">
                <h1> Coming Soon ...</h1>
                {/* <p>Your tagline goes here</p> */}
            </div>
        </div>
    );
};

export default LandingPage;
