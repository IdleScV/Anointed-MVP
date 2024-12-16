import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star } from 'lucide-react';
import { Course } from '../../types/course';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 right-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {course.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm text-gray-600">{course.instructor.name}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {course.title}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            <span>{course.students} students</span>
          </div>
          <div className="flex items-center">
            <Star size={16} className="mr-1 text-yellow-400" />
            <span>{course.rating}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-gray-900">${course.price}</span>
          {course.hasDiscount && course.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${course.originalPrice}
            </span>
          )}
        </div>
        <Link 
          to={`/courses/${course.id}`}
          className="block w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-center"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;