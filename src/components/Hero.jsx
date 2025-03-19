import React, { useState, useEffect } from 'react';
import hero1 from '../../public/images/viti-main1.webp';
import hero2 from '../../public/images/viti-main2.webp';
import hero3 from '../../public/images/viti-main3.webp'
import './Hero.css'; // Import your CSS file for styling

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    hero1,
    hero2, 
    hero3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Slideshow section - Full height */}
      <div className="relative h-screen overflow-hidden">
        {/* Hero images */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="VITI Apartments"
              className={`w-full h-full object-cover hero-image ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        {/* Only the titles on the slideshow */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">VITI</h1>
        </div>
      </div>

      {/* Content section below the slideshow */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start">
            {/* Left side - Main heading */}
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold">VITI</h2>
              <h3 className="text-xl">WAKAD</h3>
            </div>
            
            {/* Right side - Description */}
            <div className="w-full md:w-3/4">
              <p className="text-lg mb-8">
                Built to usher in as much natural light as possible, Rohan Viti fully utilizes the 
                abundant sunlight Pune is blessed with all through the year. And the advantages of 
                living with natural light are plentiful - it makes every room warm and inviting, and 
                gives you a sense of well being thanks to our body clock being in sync with the 
                environment around. And the plentiful natural light also saves you electricity, and 
                makes your plants grow better too.
              </p>
              
              {/* Apartment information box */}
              <div className="flex items-center mt-8">
                <div className="mr-4">
                  <img 
                    src="/src/assets/images/building-icon.png" 
                    alt="Building Icon" 
                    className="w-16 h-16"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='4' y='2' width='16' height='20' rx='2' ry='2'%3E%3C/rect%3E%3Cpath d='M9 22v-4h6v4'%3E%3C/path%3E%3Cpath d='M8 6h.01'%3E%3C/path%3E%3Cpath d='M16 6h.01'%3E%3C/path%3E%3Cpath d='M8 10h.01'%3E%3C/path%3E%3Cpath d='M16 10h.01'%3E%3C/path%3E%3Cpath d='M8 14h.01'%3E%3C/path%3E%3Cpath d='M16 14h.01'%3E%3C/path%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">2 & 3 BHK Apartments</h3>
                  <p className="text-gray-700">RERA Regn. No: P52100046719</p>
                  <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">https://maharera.mahaonline.gov.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;