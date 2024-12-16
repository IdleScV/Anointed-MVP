import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="max-w-2xl mx-auto w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for missionaries, projects, or trips..."
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>
    </div>
  );
};

export default SearchBar;