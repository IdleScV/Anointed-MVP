import React from 'react';
import { Users, Star } from 'lucide-react';
import { Course } from '../../../types/course';
import CourseStatus from './CourseStatus';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="flex items-center gap-4">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900">{course.title}</h3>
          <CourseStatus status={course.status} />
        </div>
        <div className="flex items-center gap-4 mt-1">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Users size={14} />
            <span>{course.students} students</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Star size={14} className="text-yellow-400" />
            <span>{course.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;