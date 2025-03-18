import React, { useState } from 'react';
import './FloorPlan.css'; // Import your CSS file for styling

const FloorPlan = () => {
  const [viewingImage, setViewingImage] = useState(null);
  
  const floorPlanImages = [
    {
      src: './src/assets/images/2bhkfloorplan.png',
      alt: '2 BHK Floor Plan',
      type: '2 BHK'
    },
    {
      src: './src/assets/images/3bhkfloorplan.png',
      alt: '3 BHK Floor Plan',
      type: '3 BHK'
    }
  ];

  return (
    <div id="floorplan" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">FLOOR PLAN</h2>
        
        <div className="space-y-6 mb-10">
          <p className="text-lg">
            Our thoughtfully designed 2 & 3 BHK apartments maximize space utilization while
            ensuring comfort and privacy. Each floor plan is crafted to allow abundant natural light
            and ventilation throughout the living spaces.
          </p>
        
          <div className="space-y-2">
            <h3 className="font-bold text-xl">Floor Plan Features:</h3>
            <ul className="list-disc pl-5">
              <li>Spacious living and dining areas</li>
              <li>Well-ventilated bedrooms</li>
              <li>Functional kitchen layouts</li>
              <li>Optimally placed bathrooms</li>
              <li>Dedicated utility areas</li>
              <li>Private balconies with panoramic views</li>
              <li>No wasted space in the layout design</li>
            </ul>
          </div>
        
          <div className="mt-8">
            <h3 className="font-bold text-xl mb-4">Available Configurations:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold">2 BHK</h4>
                <p>Area: 950 - 1150 sq.ft.</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold">3 BHK</h4>
                <p>Area: 1350 - 1550 sq.ft.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Images Below - Same layout as Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {floorPlanImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <div className="p-3 bg-white">
                <h4 className="font-semibold text-center mb-2">{image.type} Floor Plan</h4>
                <div className="overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-64 object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => setViewingImage(image)}
                  />
                </div>
                <p className="text-center text-sm mt-2 text-gray-500">Click to enlarge</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enlarged Image Modal */}
      {viewingImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-20 flex items-center justify-center p-4"
          onClick={() => setViewingImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute top-2 right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-black"
              onClick={(e) => {
                e.stopPropagation();
                setViewingImage(null);
              }}
            >
              ✕
            </button>
            <img 
              src={viewingImage.src} 
              alt={viewingImage.alt} 
              className="w-full h-auto object-contain max-h-[80vh]"
            />
            <p className="text-center text-white mt-2">{viewingImage.type} Floor Plan</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloorPlan;