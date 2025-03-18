import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import '../components/Location.css'

// Fix for marker icons in Leaflet with React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const Location = () => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  
  // Set this to your actual location
  const center = {
    lat: 18.5918, // Example coordinates for Pune
    lng: 73.7407
  };

  useEffect(() => {
    // Fix for default marker icon in Leaflet when used with webpack
    if (!L.Icon.Default.prototype._getIconUrl) {
      L.Icon.Default.mergeOptions({
        iconUrl: icon,
        iconRetinaUrl: icon,
        shadowUrl: iconShadow
      });
    }

    // Initialize the map if it hasn't been initialized yet
    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([center.lat, center.lng], 14);
      
      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);
      
      // Add marker at the specified position
      L.marker([center.lat, center.lng]).addTo(mapRef.current)
        .bindPopup('VITI Apartments')
        .openPopup();
    }

    // Handle map resize on window resize
    const handleResize = () => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to run when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [center.lat, center.lng]);

  return (
    <div id="location" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">LOCATION</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map container - placed on the left */}
          <div className="h-96">
            <div 
              ref={mapContainerRef} 
              style={{ width: '100%', height: '100%' }}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          {/* Text content - placed on the right */}
          <div className="space-y-6">
            <p className="text-lg text-justify">
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
        </div>
      </div>
    </div>
  );
};

export default Location;