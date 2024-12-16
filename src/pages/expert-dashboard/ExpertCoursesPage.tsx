import React from 'react';
import { BookOpen } from 'lucide-react';

const ExpertCoursesPage = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="text-emerald-600" size={24} />
        <h1 className="text-2xl font-bold text-gray-900">Courses</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <p className="text-gray-600">Your courses will appear here.</p>
      </div>
    </div>
  );
};

export default ExpertCoursesPage;