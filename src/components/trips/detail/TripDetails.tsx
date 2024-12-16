import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Trip } from '../../../types/trip';

interface TripDetailsProps {
  trip: Trip;
}

const TripDetails: React.FC<TripDetailsProps> = ({ trip }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Trip Details</h2>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-8">{trip.description}</p>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Activities</h3>
        <ul className="space-y-3">
          {trip.activities.map((activity, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <CheckCircle size={20} className="text-green-500 mr-2" />
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TripDetails;