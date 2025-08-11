import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  mainImage: string;
  imageAlt: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ mainImage, imageAlt }) => {
  // For a real implementation, this would have multiple images
  // For this demo, we'll simulate a gallery with the same image
  const images = [
    mainImage,
    // Simulating additional views of the same product with similar images
    'https://images.pexels.com/photos/4620557/pexels-photo-4620557.jpeg',
    'https://images.pexels.com/photos/4620624/pexels-photo-4620624.jpeg'
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="flex flex-col">
      {/* Main Image */}
      <div className="relative bg-neutral-100 rounded-lg overflow-hidden mb-4">
        <img
          src={images[currentImageIndex]}
          alt={imageAlt}
          className="w-full h-[500px] object-cover"
        />
        
        {/* Navigation Arrows */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 text-neutral-800 hover:bg-opacity-100 transition-all duration-200"
          onClick={handlePrevious}
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 text-neutral-800 hover:bg-opacity-100 transition-all duration-200"
          onClick={handleNext}
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Thumbnails */}
      <div className="flex space-x-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-20 h-20 rounded-md overflow-hidden ${
              index === currentImageIndex ? 'ring-2 ring-primary-500' : 'opacity-80 hover:opacity-100'
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;