import React from 'react';
import './Specifications.css'; // Import a CSS file for styling

const Specifications = () => {
  return (
    <div id="specifications" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">SPECIFICATIONS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Structure */}
          <div className="bg-white p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <img src="./src/assets/images/Structure-icon.png" alt="Structure Icon" className="w-12 h-12 mr-4" />
              <h3 className="text-xl font-bold">Structure</h3>
            </div>
            <ul className="space-y-2">
              <li>• RCC structure</li>
            </ul>
          </div>
          
          {/* Toilets */}
          <div className="bg-white p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <img src="./src/assets/images/Toilets-icon.png" alt="Toilets Icon" className="w-8 h-8 mr-4" />
              <h3 className="text-xl font-bold">Toilets</h3>
            </div>
            <ul className="space-y-2">
              <li>• Ceramic flooring and dado up to 7 ft. height</li>
              <li>• Sanitarywares and CP fittings of reputed make</li>
              <li>• Shower with hot & cold water provision for all toilets</li>
              <li>• Concealed plumbing</li>
            </ul>
          </div>
          
          {/* Flooring */}
          <div className="bg-white p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <img src="./src/assets/images/Flooring-icon.png" alt="Flooring Icon" className="w-8 h-8 mr-4" />
              <h3 className="text-xl font-bold">Flooring</h3>
            </div>
            <ul className="space-y-2">
              <li>• Vitrified tiles in all rooms</li>
              <li>• Ceramic tiles in toilets, balconies, and attached terraces</li>
            </ul>
          </div>
          
          {/* Kitchen + Utility Area */}
          <div className="bg-white p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <img src="./src/assets/images/Kitchen-icon.png" alt="Kitchen Icon" className="w-8 h-8 mr-4" />
              <h3 className="text-xl font-bold">Kitchen + Utility Area</h3>
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