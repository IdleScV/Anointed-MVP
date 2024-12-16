import React from 'react';
import { Search } from 'lucide-react';

const DashboardSearch = () => {
  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        placeholder="Explore courses..."
        className="w-full px-4 py-3 pl-12 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
    </div>
  );
};

export default DashboardSearch;