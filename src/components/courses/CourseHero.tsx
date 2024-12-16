import React from 'react';
import { BookOpen } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const CourseHero = () => {
  const theme = useTheme();

  return (
    <div className={`${theme.colors.primary.bg.DEFAULT} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center justify-center mb-6">
          <BookOpen size={48} className="opacity-80" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Biblical Education for Everyone
        </h1>
        <p className="text-xl text-purple-100 text-center max-w-3xl mx-auto">
          Discover courses designed to deepen your faith and equip you for ministry
        </p>
      </div>
    </div>
  );
}

export default CourseHero;