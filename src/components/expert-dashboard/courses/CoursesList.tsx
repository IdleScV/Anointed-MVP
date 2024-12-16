import React from 'react';
import { BookOpen, Users, Star, ArrowUpRight } from 'lucide-react';
import { useCourses } from '../../../hooks/useCourses';
import CourseCard from './CourseCard';

export const CoursesList = () => {
  const { getRecentCourses } = useCourses();
  const recentCourses = getRecentCourses(2);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BookOpen className="text-emerald-600" size={20} />
          <h2 className="text-lg font-semibold">Your Courses</h2>
        </div>
        <button className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
          <span className="text-sm">View All</span>
          <ArrowUpRight size={16} />
        </button>
      </div>
      
      <div className="space-y-4">
        {recentCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};