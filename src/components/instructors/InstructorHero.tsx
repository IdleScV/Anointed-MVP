import React from 'react';
import { Users } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const InstructorHero = () => {
  const theme = useTheme();

  return (
    <div className={`${theme.colors.primary.bg.DEFAULT} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center justify-center mb-6">
          <Users size={48} className="opacity-80" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Learn from Expert Instructors
        </h1>
        <p className="text-xl text-purple-100 text-center max-w-3xl mx-auto">
          Join our community of experienced Christian educators and ministry leaders dedicated to equipping the next generation
        </p>
      </div>
    </div>
  );
}

export default InstructorHero;