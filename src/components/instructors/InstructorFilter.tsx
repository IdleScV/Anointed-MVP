import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { InstructorExpertise } from '../../types/instructor';

const expertiseCategories: ('All' | InstructorExpertise)[] = [
  'All',
  'Biblical Studies',
  'Leadership',
  'Ministry',
  'Missions',
  'Theology',
  'Hebrew',
  'Greek',
  'Church Planting',
  'Pastoral Care'
];

interface InstructorFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const InstructorFilter: React.FC<InstructorFilterProps> = ({
  selectedCategory,
  onCategoryChange
}) => {
  const theme = useTheme();

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter by Expertise</h2>
      <div className="flex flex-wrap gap-2">
        {expertiseCategories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? `${theme.colors.primary.bg.DEFAULT} text-white`
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InstructorFilter;