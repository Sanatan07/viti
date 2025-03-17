import React from 'react';

const FloorPlan = () => {
  return (
    <div id="floorplan" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">FLOOR PLAN</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
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
          
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
              alt="Floor Plan" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;