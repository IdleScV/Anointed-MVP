import React from 'react';
import { Cross } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const AboutHero = () => {
  const theme = useTheme();

  return (
    <div className={`${theme.colors.primary.bg.DEFAULT} text-white py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-6">
          <Cross size={48} className="opacity-80" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Our Mission & Vision
        </h1>
        <p className="text-xl text-purple-100 text-center max-w-3xl mx-auto">
          Empowering believers to transform communities through Christ-centered education and outreach
        </p>
      </div>
    </div>
  );
}

export default AboutHero