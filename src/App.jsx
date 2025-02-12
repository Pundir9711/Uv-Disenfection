import React from 'react'
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import HVACSection from './component/HVACSection';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-[#f5f3ed]">
      <Header/>
      <HeroSection/>
      <HVACSection/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default App;