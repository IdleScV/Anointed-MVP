import React from 'react';
import { Plane } from 'lucide-react';

const TripsPage = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Plane className="text-indigo-600" size={24} />
        <h1 className="text-2xl font-bold text-gray-900">Mission Trips</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <p className="text-gray-600">Your mission trips will appear here.</p>
      </div>
    </div>
  );
};

export default TripsPage;