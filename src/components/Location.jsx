import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Location = () => {
  // You'll need to use your actual Google Maps API key
  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };
  
  // Set this to your actual location
  const center = {
    lat: 18.5918, // Example coordinates for Pune
    lng: 73.7407
  };

  return (
    <div id="location" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">LOCATION</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-lg">
              Strategically located in Wakad, VITI offers the perfect blend of connectivity and serenity.
              With easy access to major IT hubs, educational institutions, and entertainment venues, 
              this location ensures you're never far from what matters.
            </p>
            
            <div className="space-y-2">
              <h3 className="font-bold text-xl">Nearby Landmarks:</h3>
              <ul className="list-disc pl-5">
                <li>2 km from Hinjewadi IT Park</li>
                <li>5 minutes to Mumbai-Pune Expressway</li>
                <li>15 minutes to Aundh and Baner</li>
                <li>Close proximity to schools, hospitals, and shopping malls</li>
                <li>Excellent connectivity to public transportation</li>
              </ul>
            </div>
          </div>
          
          <div className="h-96">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={14}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;