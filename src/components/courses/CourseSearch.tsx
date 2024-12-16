import React from 'react';
import { Search } from 'lucide-react';

interface CourseSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const CourseSearch: React.FC<CourseSearchProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search courses..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
    </div>
  );
};

export default CourseSearch;