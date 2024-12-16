import React from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import Carousel from '../components/Carousel';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Hero />
      <div className="mb-12">
        <SearchBar />
      </div>
      <Carousel />
    </div>
  );
};

export default HomePage;