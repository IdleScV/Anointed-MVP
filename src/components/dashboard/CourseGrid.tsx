import React from 'react';
import { Course } from '../../types/course';
import { Clock, Users } from 'lucide-react';

interface CourseGridProps {
  courses: Course[];
}

const CourseGrid: React.FC<CourseGridProps> = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
          <div className="relative h-48">
            <img 
              src={course.thumbnail} 
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
              {course.category}
            </span>
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              {course.instructor.avatar && (
                <img 
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <span className="text-sm text-gray-600">{course.instructor.name}</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center">
                <Users size={16} className="mr-1" />
                <span>{course.students} students</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseGrid;