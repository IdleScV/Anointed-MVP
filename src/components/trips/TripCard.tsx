import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';
import { Trip } from '../../types/trip';
import { useTheme } from '../../hooks/useTheme';

interface TripCardProps {
  trip: Trip;
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  const theme = useTheme();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full h-full object-cover"
        />
        <span className={`absolute top-3 right-3 ${theme.colors.accent.bg.DEFAULT} text-white px-3 py-1 rounded-full text-sm font-medium`}>
          {trip.type}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {trip.title}
        </h3>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-1" />
          <span>{trip.location}</span>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-1" />
            <span>{new Date(trip.startDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock size={16} className="mr-1" />
            <span>{trip.duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users size={16} className="mr-1" />
            <span>{trip.spotsLeft} spots left</span>
          </div>
          <div className="text-sm font-semibold text-gray-900">
            ${trip.cost.toLocaleString()}
          </div>
        </div>
        <p className="text-gray-600 mb-6 line-clamp-2">
          {trip.description}
        </p>
        <Link 
          to={`/trips/${trip.id}`}
          className={`block w-full ${theme.colors.primary.bg.DEFAULT} text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium text-center`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default TripCard;