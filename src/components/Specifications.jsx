import React from 'react';
import './Specifications.css'; // Import a CSS file for styling
import spec1 from "../../public/images/Structure-icon.png";
import spec2 from "../../public/images/Toilets-icon.png";
import spec3 from "../../public/images/Flooring-icon.png";
import spec4 from "../../public/images/Kitchen-icon.png";

const Specifications = () => {
  return (
    <div id="specifications" className="py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12">SPECIFICATIONS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {/* Structure */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <img src={spec1} alt="Structure Icon" className="w-10 md:w-12 h-10 md:h-12 mr-4" />
              <h3 className="text-lg md:text-xl font-bold">Structure</h3>
            </div>
            <ul className="space-y-2">
              <li>• RCC structure</li>
            </ul>
          </div>
          
          {/* Toilets */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <img src={spec2} alt="Toilets Icon" className="w-8 h-8 mr-4" />
              <h3 className="text-lg md:text-xl font-bold">Toilets</h3>
            </div>
            <ul className="space-y-2">
              <li>• Ceramic flooring and dado up to 7 ft. height</li>
              <li>• Sanitarywares and CP fittings of reputed make</li>
              <li>• Shower with hot & cold water provision for all toilets</li>
              <li>• Concealed plumbing</li>
            </ul>
          </div>
          
          {/* Flooring */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <img src={spec3} alt="Flooring Icon" className="w-8 h-8 mr-4" />
              <h3 className="text-lg md:text-xl font-bold">Flooring</h3>
            </div>
            <ul className="space-y-2">
              <li>• Vitrified tiles in all rooms</li>
              <li>• Ceramic tiles in toilets, balconies, and attached terraces</li>
            </ul>
          </div>
          
          {/* Kitchen + Utility Area */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <img src={spec4} alt="Kitchen Icon" className="w-8 h-8 mr-4" />
              <h3 className="text-lg md:text-xl font-bold">Kitchen + Utility Area</h3>
            </div>
            <ul className="space-y-2">
              <li>• Granite platform with SS Sink</li>
              <li>• Glazed/Ceramic tile dado up to 2 ft. height above platform</li>
              <li>• Provision for water purifier</li>
              <li>• Provision for duct less wall hung chimney</li>
              <li>• Inlet/outlet provision for washing machine</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;