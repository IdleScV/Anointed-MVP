import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const items = [
  {
    type: 'Missionary',
    title: 'Sarah Johnson',
    location: 'Kenya',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    description: 'Supporting education and healthcare initiatives'
  },
  {
    type: 'Project',
    title: 'Clean Water Initiative',
    location: 'Guatemala',
    image: 'https://images.unsplash.com/photo-1675649956688-989a93184ffc?auto=format&fit=crop&q=80&w=800',
    description: 'Providing clean water access to remote communities'
  },
  {
    type: 'Mission Trip',
    title: 'Medical Mission',
    location: 'Honduras',
    image: 'https://images.unsplash.com/photo-1612401104473-a79cb1da9351?auto=format&fit=crop&q=80&w=800',
    description: 'Two-week medical assistance program'
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl">
      <div className="relative h-[400px]">
        <img
          src={items[currentIndex].image}
          alt={items[currentIndex].title}
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-indigo-600 rounded-full">
              {items[currentIndex].type}
            </span>
            <h3 className="text-2xl font-bold mb-2">{items[currentIndex].title}</h3>
            <p className="text-lg mb-2">{items[currentIndex].location}</p>
            <p className="text-gray-200">{items[currentIndex].description}</p>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;