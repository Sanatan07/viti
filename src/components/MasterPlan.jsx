import React, { useState } from 'react';
import './MasterPlan.css'; // Import your CSS file for styling

const MasterPlan = () => {
  const [showEnlarged, setShowEnlarged] = useState(false);
  
  // Placeholder image path - replace with your actual master plan image
  const masterPlanImage = "./src/assets/images/masterplan.webp";
  
  const handleImageClick = () => {
    // Only trigger on desktop
    if (window.innerWidth >= 768) {
      setShowEnlarged(true);
    }
  };

  return (
    <div id="masterplan" className="py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12">MASTER PLAN</h2>
        
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Image Container - Will be first on mobile/tablet */}
          <div className="order-1 md:order-none mt-4 md:mt-6">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={masterPlanImage} 
                alt="VITI Master Plan" 
                className="w-full h-auto md:cursor-pointer"
                onClick={handleImageClick}
              />
            </div>
          </div>
          
          {/* Text Container - Will be second on mobile/tablet */}
          <div className="order-2 md:order-none space-y-4 md:space-y-6">
            <p className="text-base md:text-lg text-justify md:text-left">
              VITI's masterplan is meticulously designed to offer an extraordinary living experience.
              Spanning over several acres, the development features thoughtfully placed residential towers,
              abundant green spaces, and world-class amenities.
            </p>
            
            <div className="space-y-2">
              <h3 className="font-bold text-lg md:text-xl">Master Plan Highlights:</h3>
              <ul className="list-disc pl-5">
                <li>70% open space with lush landscaping</li>
                <li>Multiple themed gardens and recreation areas</li>
                <li>Strategically placed towers for maximum privacy</li>
                <li>Well-designed internal roads and pathways</li>
                <li>Centralized clubhouse and amenities zone</li>
                <li>Ample visitor parking spaces</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Enlarged image modal - only for desktop */}
      {showEnlarged && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowEnlarged(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img 
              src={masterPlanImage} 
              alt="VITI Master Plan" 
              className="max-w-full max-h-[85vh] object-contain"
            />
            <button 
              className="absolute -top-10 -right-10 bg-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
              onClick={(e) => {
                e.stopPropagation();
                setShowEnlarged(false);
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MasterPlan;