
import React from 'react';
import { Clock, Users, Star, BookOpen, CheckCircle } from 'lucide-react';
import { Course } from '../../../types/course';

interface CoursePreviewProps {
  course: Course;
  onContinue: () => void;
}

const CoursePreview: React.FC<CoursePreviewProps> = ({ course, onContinue }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-6">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-48 rounded-lg"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center text-gray-600">
              <Clock size={20} className="mr-2" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users size={20} className="mr-2" />
              <span>{course.students} students</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Star size={20} className="mr-2" />
              <span>{course.rating} rating</span>
            </div>
            <div className="flex items-center text-gray-600">
              <BookOpen size={20} className="mr-2" />
              <span>{course.lessons} lessons</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">What you'll learn</h4>
        <ul className="grid grid-cols-2 gap-3">
          <li className="flex items-start">
            <CheckCircle size={20} className="mr-2 text-green-500 flex-shrink-0" />
            <span className="text-gray-600">Example learning objective</span>
          </li>
        </ul>
      </div>

      <div className="flex justify-end gap-4">
        <button
          onClick={onContinue}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default CoursePreview;