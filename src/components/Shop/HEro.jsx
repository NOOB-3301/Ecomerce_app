import React, { useState, useEffect } from 'react';

const Hero = () => {
  const images = [
    'https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/j/i/p/medium-manga-panel030-shinobi-19-naruto-anime-shinobi-manga-original-imagh42vugabhajc.jpeg?q=90&crop=false', // Replace with your image URL
    'https://m.media-amazon.com/images/I/91Ed-Ahj12L.jpg', // Replace with your image URL
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // Cycle through images
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <section className="relative bg-blue-100 h-96 flex items-center justify-center overflow-hidden">
      {/* Image Slider */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute h-72 object-cover transition-opacity duration-1000 ${
            currentImage === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
    </section>
  );
};

export default Hero;
