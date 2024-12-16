import React from 'react';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';
import { Trip } from '../../../types/trip';

interface TripHeroProps {
  trip: Trip;
}

const TripHero: React.FC<TripHeroProps> = ({ trip }) => {
  return (
    <div className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <img
              src={trip.image}
              alt={trip.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <span className="inline-block px-3 py-1 bg-indigo-500 rounded-full text-sm font-medium mb-4">
              {trip.type}
            </span>
            <h1 className="text-4xl font-bold mb-4">{trip.title}</h1>
            <p className="text-xl text-indigo-100 mb-6">{trip.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center">
                <MapPin className="mr-2" />
                <span>{trip.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2" />
                <span>{new Date(trip.startDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2" />
                <span>{trip.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2" />
                <span>{trip.spotsLeft} spots left</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripHero;