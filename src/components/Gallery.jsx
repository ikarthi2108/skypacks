import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      title: 'Modern Manufacturing Unit',
      description: 'Our state-of-the-art production facility',
      category: 'Factory'
    },
    {
      id: 2,
      title: 'Quality Control Process',
      description: 'Rigorous testing for every product',
      category: 'Process'
    },
    {
      id: 3,
      title: 'Custom Printed Bags',
      description: 'Branded packaging solutions',
      category: 'Products'
    },
    {
      id: 4,
      title: 'Packaging Solutions',
      description: 'Various sizes for textile products',
      category: 'Products'
    },
    {
      id: 5,
      title: 'Advanced Machinery',
      description: 'Latest technology for precision',
      category: 'Factory'
    },
    {
      id: 6,
      title: 'Team Excellence',
      description: 'Our skilled workforce in action',
      category: 'Team'
    },
    {
      id: 7,
      title: 'Sustainable Packaging',
      description: 'Eco-friendly solutions',
      category: 'Products'
    },
    {
      id: 8,
      title: 'Delivery Ready',
      description: 'Products prepared for shipment',
      category: 'Process'
    }
  ];

  const categories = ['All', 'Factory', 'Products', 'Process', 'Team'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our modern manufacturing facility, quality products, and dedicated team 
            through our visual journey.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="200">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => openLightbox(image, index)}
            >
              {/* Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-blue-100 dark:from-gray-700 dark:to-gray-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {image.category}
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-800 rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {image.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-gradient-to-r from-primary-500 to-blue-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Want to See More?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Schedule a visit to our factory and see our operations in person.
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              Schedule Factory Tour
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </button>

            {/* Lightbox Content */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-blue-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center relative">
                <div className="text-center">
                  <Package className="h-20 w-20 text-primary-500 dark:text-primary-400 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">Image: {selectedImage.title}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedImage.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedImage.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {currentIndex + 1} / {filteredImages.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;