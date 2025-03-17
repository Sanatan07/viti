import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">ROHAN BUILDERS</h1>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <Link to="location" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Location</Link>
          <Link to="gallery" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Gallery</Link>
          <Link to="masterplan" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Master Plan</Link>
          <Link to="floorplan" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Floor Plan</Link>
          <Link to="specifications" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Specifications</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;