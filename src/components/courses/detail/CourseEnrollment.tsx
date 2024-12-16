
import React, { useState } from 'react';
import { Clock, Users, Star, Shield } from 'lucide-react';
import { Course } from '../../../types/course';
import EnrollmentModal from '../enrollment/EnrollmentModal';

interface CourseEnrollmentProps {
  course: Course;
}

const CourseEnrollment: React.FC<CourseEnrollmentProps> = ({ course }) => {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-3xl font-bold text-gray-900">${course.price}</span>
            {course.hasDiscount && course.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ${course.originalPrice}
              </span>
            )}
          </div>
          {course.hasDiscount && course.originalPrice && (
            <span className="text-green-600 font-medium">
              Save ${(course.originalPrice - course.price).toFixed(2)}
            </span>
          )}
        </div>

        <button
          onClick={() => setIsEnrollmentOpen(true)}
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium mb-6"
        >
          Enroll Now
        </button>

        <div className="space-y-4 mb-6">
          <div className="flex items-center text-gray-600">
            <Clock size={20} className="mr-3" />
            <span>{course.duration} of content</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users size={20} className="mr-3" />
            <span>{course.students.toLocaleString()} students enrolled</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Star size={20} className="mr-3" />
            <span>{course.rating} course rating</span>
          </div>
        </div>

        <div className="border-t pt-6">
          <div className="flex items-center text-gray-600 mb-2">
            <Shield size={20} className="mr-2" />
            <span className="font-medium">30-Day Money-Back Guarantee</span>
          </div>
          <p className="text-sm text-gray-500">
            Not satisfied? Get a full refund within 30 days.
          </p>
        </div>
      </div>

      <EnrollmentModal
        course={course}
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
      />
    </>
  );
};

export default CourseEnrollment;