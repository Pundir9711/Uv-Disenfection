import React from 'react';
import virusImage from '../assets/Virus.svg';

const HeroSection = () => {
    return (
      <div className="relative h-96">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-blue-900 opacity-90">
        <img 
          src={virusImage} 
          alt="Virus Background" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
      </div>
        
        {/* Content */}
        <div className="relative container top-40 mx-auto py-16 ">
          <div className="flex flex-col py-10 px-20 bg-white max-w-4xl">
            <div className="text-gray-600 mb-2 ">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span>UV Products</span>
            </div>
            <h1 className="text-5xl font-semibold text-black mb-6">
            UV Disinfection Products
           </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
            As part of our UV-C disinfection upper air device series, this wall-mounted solution is designed for the disinfection of air across various applications. Optimized for low ceiling heights, the UV-C rays are distributed at device level and above, allowing for effective air disinfection while maintaining safety for ongoing business activities below.
            </p>
            <button className="bg-white text-orange-500 px-8 py-3 border rounded-full mt-8 hover:bg-orange-500 hover:text-white  transition-colors w-fit cursor-pointer">
              FREE UV CONSULTATION
            </button>
          </div>
        </div>
      </div>
    );
  };
  export default HeroSection