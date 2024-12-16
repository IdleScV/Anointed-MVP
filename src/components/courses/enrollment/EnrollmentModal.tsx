import React, { useState } from 'react';
import { X } from 'lucide-react';
import EnrollmentSteps from './EnrollmentSteps';
import CoursePreview from './CoursePreview';
import PaymentForm from './PaymentForm';
import EnrollmentConfirmation from './EnrollmentConfirmation';
import { Course } from '../../../types/course';

interface EnrollmentModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
}

export type EnrollmentStep = 'preview' | 'payment' | 'confirmation';

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ course, isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState<EnrollmentStep>('preview');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose} />

        <div className="inline-block w-full max-w-3xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Enroll in Course</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="px-6 py-4">
            <EnrollmentSteps currentStep={currentStep} />

            {currentStep === 'preview' && (
              <CoursePreview
                course={course}
                onContinue={() => setCurrentStep('payment')}
              />
            )}

            {currentStep === 'payment' && (
              <PaymentForm
                course={course}
                onBack={() => setCurrentStep('preview')}
                onSuccess={() => setCurrentStep('confirmation')}
              />
            )}

            {currentStep === 'confirmation' && (
              <EnrollmentConfirmation
                course={course}
                onClose={onClose}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentModal;