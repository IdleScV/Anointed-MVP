import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const Vision = () => {
  const theme = useTheme();

  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto text-center">
        <span className={`${theme.colors.accent.DEFAULT} text-lg font-semibold`}>
          Our Vision
        </span>
        <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          Transforming Lives Through Faith and Education
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          At Annointed, we envision a world where every believer is equipped with the knowledge, 
          skills, and spiritual foundation needed to make a lasting impact in their communities. 
          Through our platform, we bring together expert instructors, missionaries, and learners 
          in a vibrant community dedicated to spreading God's love and truth across the globe.
        </p>
      </div>
    </div>
  );
};

export default Vision