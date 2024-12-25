import React from 'react';
import LandingPage from './components/landingPage';
import Services from './components/services';
import AboutUs from './components/aboutUs';
import ContactUs from './components/contactUs';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';



function App() {
  return (
    <div className='min-h-screen'>
       <Header />
       <main >
        <LandingPage />
        <Services/>
        <AboutUs />
        <ContactUs /> 
      </main>
      <Footer/>
    </div>
 
     
     



  );
}

export default App;