
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { EnrollmentStep } from './EnrollmentModal';

interface EnrollmentStepsProps {
  currentStep: EnrollmentStep;
}

const steps = [
  { id: 'preview', label: 'Course Preview' },
  { id: 'payment', label: 'Payment' },
  { id: 'confirmation', label: 'Confirmation' }
];

const EnrollmentSteps: React.FC<EnrollmentStepsProps> = ({ currentStep }) => {
  const getCurrentStepIndex = () => steps.findIndex(step => step.id === currentStep);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                index <= getCurrentStepIndex() ? 'bg-indigo-600' : 'bg-gray-200'
              }`}>
                {index < getCurrentStepIndex() ? (
                  <CheckCircle className="w-5 h-5 text-white" />
                ) : (
                  <span className={`text-sm font-medium ${
                    index <= getCurrentStepIndex() ? 'text-white' : 'text-gray-500'
                  }`}>
                    {index + 1}
                  </span>
                )}
              </div>
              <span className={`ml-2 text-sm font-medium ${
                index <= getCurrentStepIndex() ? 'text-indigo-600' : 'text-gray-500'
              }`}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-16 h-1 mx-2 ${
                index < getCurrentStepIndex() ? 'bg-indigo-600' : 'bg-gray-200'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default EnrollmentSteps;
