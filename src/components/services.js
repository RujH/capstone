import React from 'react';
import './services.css';

const Services = () => {
    return (
        <section className="services">
            <h2 className="services-title">Our Services</h2>
            
            <div className="services-container">
                <div className="service">
                    <h3>Service One</h3>
                    <p>Description of Service One. This is where you describe what your service is about and how it helps your users.</p>
                </div>
                
                <div className="service">
                    <h3>Service Two</h3>
                    <p>Description of Service Two. This section can explain how the service works and what makes it unique.</p>
                </div>
               
                <div className="service">
                    <h3>Service Three</h3>
                    <p>Description of Service Three. Highlight the benefits and features that customers can expect from this service.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
