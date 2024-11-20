import React from 'react';
import LandingPage from './components/landingPage';
import Services from './components/services';
import AboutUs from './components/aboutUs';
import ContactUs from './components/contactUs';
import './App.css';



function App() {
  return (
    <div className="app">
      <LandingPage />
      <AboutUs />
      <Services/>
      <ContactUs />


  </div>
  );
}

export default App;
