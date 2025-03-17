import React from 'react';

const MasterPlan = () => {
  return (
    <div id="masterplan" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">MASTER PLAN</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-lg">
              VITI's masterplan is meticulously designed to offer an extraordinary living experience.
              Spanning over several acres, the development features thoughtfully placed residential towers,
              abundant green spaces, and world-class amenities.
            </p>
            
            <div className="space-y-2">
              <h3 className="font-bold text-xl">Master Plan Highlights:</h3>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Master Plan View 1" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1585546344158-e4302d79323e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Master Plan View 2" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterPlan;