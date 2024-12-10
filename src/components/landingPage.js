import React from 'react';
import './landingPage.css';



function LandingPage () {


    return (
        <div className="landing-page">
            {/* Reference the video directly from the public folder */}
            <video className="landing-video" autoPlay muted loop>
                <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay">
                <h1> Coming Soon ...</h1>
            </div>
        </div>
    );
};

export default LandingPage;
