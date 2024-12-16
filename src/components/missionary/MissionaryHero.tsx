import React from 'react';
import { Globe2 } from 'lucide-react';

const MissionaryHero = () => {
  return (
    <div className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center justify-center mb-6">
          <Globe2 size={48} className="opacity-80" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Our Missionaries Worldwide
        </h1>
        <p className="text-xl text-indigo-100 text-center max-w-3xl mx-auto">
          Support dedicated individuals bringing hope and transformation to communities around the globe
        </p>
      </div>
    </div>
  );
};

export default MissionaryHero;