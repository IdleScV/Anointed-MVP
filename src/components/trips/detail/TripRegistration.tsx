import React from 'react';
import { Calendar, Users, Clock, Shield } from 'lucide-react';
import { Trip } from '../../../types/trip';

interface TripRegistrationProps {
  trip: Trip;
}

const TripRegistration: React.FC<TripRegistrationProps> = ({ trip }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
      <div className="mb-6">
        <span className="text-3xl font-bold text-gray-900">${trip.cost}</span>
        <p className="text-gray-500 mt-1">per person</p>
      </div>

      <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium mb-6">
        Register Now
      </button>

      <div className="space-y-4 mb-6">
        <div className="flex items-center text-gray-600">
          <Calendar size={20} className="mr-3" />
          <span>Starts {new Date(trip.startDate).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock size={20} className="mr-3" />
          <span>{trip.duration}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users size={20} className="mr-3" />
          <span>{trip.spotsLeft} spots remaining</span>
        </div>
      </div>

      <div className="border-t pt-6">
        <div className="flex items-center text-gray-600 mb-2">
          <Shield size={20} className="mr-2" />
          <span className="font-medium">Trip Insurance Available</span>
        </div>
        <p className="text-sm text-gray-500">
          Protect your trip investment with our comprehensive insurance options.
        </p>
      </div>
    </div>
  );
};

export default TripRegistration;