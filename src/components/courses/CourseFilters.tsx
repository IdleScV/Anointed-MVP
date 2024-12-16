import React from 'react';
import { CourseLevel, CourseFilters as FilterType } from '../../types/course';

interface CourseFiltersProps {
  filters: FilterType;
  onFilterChange: (filters: FilterType) => void;
}

const categories = ['All', 'Leadership', 'Ministry', 'Missions', 'Theology', 'Language'];
const levels: CourseLevel[] = ['beginner', 'intermediate', 'advanced'];

const CourseFilters: React.FC<CourseFiltersProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilterChange({ 
              ...filters, 
              category: category === 'All' ? undefined : category 
            })}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              (category === 'All' && !filters.category) || category === filters.category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Levels */}
      <div className="flex flex-wrap gap-2">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => onFilterChange({ 
              ...filters, 
              level: filters.level === level ? undefined : level 
            })}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              level === filters.level
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </button>
        ))}
      </div>

      {/* Price Range */}
      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder="Min $"
          value={filters.minPrice || ''}
          onChange={(e) => onFilterChange({ 
            ...filters, 
            minPrice: e.target.value ? Number(e.target.value) : undefined 
          })}
          className="w-24 px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        <span className="text-gray-500">-</span>
        <input
          type="number"
          placeholder="Max $"
          value={filters.maxPrice || ''}
          onChange={(e) => onFilterChange({ 
            ...filters, 
            maxPrice: e.target.value ? Number(e.target.value) : undefined 
          })}
          className="w-24 px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
  );
};

export default CourseFilters;