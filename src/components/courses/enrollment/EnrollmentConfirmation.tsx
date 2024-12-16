
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Course } from '../../../types/course';

interface EnrollmentConfirmationProps {
  course: Course;
  onClose: () => void;
}

const EnrollmentConfirmation: React.FC<EnrollmentConfirmationProps> = ({ course, onClose }) => {
  return (
    <div className="text-center py-8">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle size={32} className="text-green-600" />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Enrollment Successful!
      </h3>
      <p className="text-gray-600 mb-6">
        You are now enrolled in {course.title}
      </p>
      <div className="space-y-4">
        <p className="text-gray-600">
          Check your email for course access details and receipt.
        </p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default EnrollmentConfirmation;
