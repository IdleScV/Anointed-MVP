import React, { useState } from 'react';
import { Course } from '../../../types/course';

interface PaymentFormProps {
  course: Course;
  onBack: () => void;
  onSuccess: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ course, onBack, onSuccess }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Order Summary</h4>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Course Price</span>
          <span className="font-medium">${course.price}</span>
        </div>
        {course.hasDiscount && course.originalPrice && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-${(course.originalPrice - course.price).toFixed(2)}</span>
          </div>
        )}
        <div className="border-t mt-2 pt-2 flex justify-between font-semibold">
          <span>Total</span>
          <span>${course.price}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Number
          </label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVC
            </label>
            <input
              type="text"
              placeholder="123"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={isProcessing}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            {isProcessing ? 'Processing...' : 'Complete Payment'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;