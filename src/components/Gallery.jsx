import React from 'react';

const Gallery = () => {
  // Image URLs
  const images = [
    './src/assets/images/gallary1.webp',
    './src/assets/images/gallary2.webp',
    './src/assets/images/gallary4.webp',
    './src/assets/images/gallary5.webp',
  ];

  // YouTube video information
  const videos = [
    {
      id: 'EL0PERaVjpg',
      title: 'Project Walkthrough',
      description: 'A walkthrough of the project'
    },
    {
      id: 'hF7Z8TfZmUY',
      title: 'Project Details',
      description: 'Detailed information about the project'
    },
    {
      id: 'FXeuue-UVTY',
      title: '3 BHK Home Tour',
      description: 'Tour of the 3 BHK apartment'
    },
    {
      id: 'Fc4JV69MJao',
      title: '2 BHK Home Tour',
      description: 'Tour of the 2 BHK apartment'
    }
  ];

  return (
    <div id="gallery" className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12">GALLERY</h2>
        
        {/* Images Section - 1 column on mobile/tablet, 2x2 grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        {/* Video Section - 1 column on mobile/tablet, 2x2 grid on desktop */}
        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8">Video Tours</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="flex flex-col items-center">
                <div className="overflow-hidden rounded-lg shadow-lg w-full">
                  <div className="relative pb-[56.25%] h-0">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
                <p className="mt-3 font-medium text-center">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;