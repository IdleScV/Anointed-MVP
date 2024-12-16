import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Star, Users } from 'lucide-react';
import { Instructor } from '../../types/instructor';
import { useTheme } from '../../hooks/useTheme';

interface InstructorCardProps {
  instructor: Instructor;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  const theme = useTheme();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-64">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          {instructor.name}
        </h3>
        <p className={`${theme.colors.primary.DEFAULT} font-medium mb-4`}>
          {instructor.title}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
          <div className="flex items-center">
            <BookOpen size={16} className="mr-1" />
            <span>{instructor.courses} Courses</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            <span>{instructor.students} Students</span>
          </div>
          <div className="flex items-center">
            <Star size={16} className="mr-1 text-yellow-400" />
            <span>{instructor.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-6 line-clamp-3">
          {instructor.bio}
        </p>
        <Link 
          to={`/instructors/${instructor.id}`}
          className={`block w-full ${theme.colors.primary.bg.DEFAULT} text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium text-center`}
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default InstructorCard;