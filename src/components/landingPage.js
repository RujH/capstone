import React from 'react';
import './landingPage.css';



function LandingPage () {


    return (
        <section id="home">
            <div className="landing-page container1">
                <video className="landing-video" autoPlay muted loop>
                    <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay">
                    <h1 className='merriweather-bold'> 
                        A New Approach to Auto Recycling
                        
                    </h1>
                    <p className='merriweather-light'>
                        
                        Sustainability, Affordability & Consistent Quality
                    </p>
                    

                </div>
            </div>

        </section>
        
    );
};

export default LandingPage;
