import React from 'react';

const categories = ['All', 'Leadership', 'Ministry', 'Missions', 'Theology', 'Language'];

interface CourseFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CourseFilter: React.FC<CourseFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CourseFilter;