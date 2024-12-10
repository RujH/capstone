import React from 'react';
import LandingPage from './components/landingPage';
import Services from './components/services';
import AboutUs from './components/aboutUs';
import ContactUs from './components/contactUs';
import './App.css';
import Header from './components/header';



function App() {
  return (
 
      <main className='relative min-h-screen w-screen overflow-x-hidden'>
        <Header/>
        <LandingPage />
        <AboutUs />
        <Services/>
        <ContactUs /> 
      </main>
     



  );
}

export default App;