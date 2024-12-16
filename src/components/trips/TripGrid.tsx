import React from 'react';
import TripCard from './TripCard';
import { Trip } from '../../types/trip';

interface TripGridProps {
  trips: Trip[];
}

const TripGrid: React.FC<TripGridProps> = ({ trips }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
};

export default TripGrid;