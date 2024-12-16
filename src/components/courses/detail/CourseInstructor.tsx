import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users } from 'lucide-react';

interface CourseInstructorProps {
  instructor: {
    id: number;
    name: string;
    avatar?: string;
  };
}

const CourseInstructor: React.FC<CourseInstructorProps> = ({ instructor }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Instructor</h2>
      <div className="flex items-center gap-4">
        {instructor.avatar && (
          <img
            src={instructor.avatar}
            alt={instructor.name}
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{instructor.name}</h3>
          <Link
            to={`/instructors/${instructor.id}`}
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructor;