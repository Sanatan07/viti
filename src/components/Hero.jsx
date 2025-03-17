// import React, { useState, useEffect } from 'react';
// import './Hero.css'; // Import your CSS file for styling

// const Hero = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [
//     'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//     'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//     'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
//   ]; // Replace with your actual images

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         (prevIndex + 1) % images.length
//       );
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative h-screen">
//       {/* Hero image */}
//       <div className="absolute inset-0">
//         <img
//           src={images[currentImageIndex]}
//           alt="VITI Apartments"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black opacity-40"></div>
//       </div>

//       {/* Hero content */}
//       <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
//         <h1 className="text-5xl md:text-7xl font-bold mb-4">VITI</h1>
//         <h2 className="text-xl md:text-2xl mb-8">WAKAD</h2>
//         <p className="text-center max-w-2xl mb-8">
//           Built to usher in as much natural light as possible, Rohan Viti fully utilizes the 
//           abundant sunlight Pune is blessed with all through the year. And the advantages of 
//           living with natural light are plentiful - it makes every room warm and inviting, and 
//           gives you a sense of well being thanks to our body clock being in sync with the 
//           environment around. And the plentiful natural light also saves you electricity, and 
//           makes your plants grow better too.
//         </p>
//         <div className="bg-white p-4 rounded-md text-black">
//           <h3 className="text-lg font-bold">2 & 3 BHK Apartments</h3>
//           <p>RERA Regn. No: P52100046719</p>
//           <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer">https://maharera.mahaonline.gov.in</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from 'react';
import './Hero.css'; // Import your CSS file for styling

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    './src/assets/images/viti-main1.webp',
     './src/assets/images/viti-main2.webp',
     './src/assets/images/viti-main3.webp'
  ]; // Replace with your actual images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen">
      {/* Hero image */}
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

      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">VITI</h1>
        <h2 className="text-xl md:text-2xl mb-8">WAKAD</h2>
        <p className="text-center max-w-2xl mb-8">
          Built to usher in as much natural light as possible, Rohan Viti fully utilizes the 
          abundant sunlight Pune is blessed with all through the year. And the advantages of 
          living with natural light are plentiful - it makes every room warm and inviting, and 
          gives you a sense of well being thanks to our body clock being in sync with the 
          environment around. And the plentiful natural light also saves you electricity, and 
          makes your plants grow better too.
        </p>
        <div className="bg-white p-4 rounded-md text-black">
          <h3 className="text-lg font-bold">2 & 3 BHK Apartments</h3>
          <p>RERA Regn. No: P52100046719</p>
          <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer">https://maharera.mahaonline.gov.in</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;