import React from 'react';
import { useParams } from 'react-router-dom';
import { useTrips } from '../hooks/useTrips';
import TripHero from '../components/trips/detail/TripHero';
import TripDetails from '../components/trips/detail/TripDetails';
import TripRegistration from '../components/trips/detail/TripRegistration';
import TripLeader from '../components/trips/detail/TripLeader';

const TripDetailPage = () => {
  const { id } = useParams();
  const { getTripById } = useTrips();
  const trip = getTripById(Number(id));

  if (!trip) {
    return <div>Trip not found</div>;
  }

  return (
    <div>
      <TripHero trip={trip} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <TripDetails trip={trip} />
            <TripLeader leader={trip.leader} />
          </div>
          <div>
            <TripRegistration trip={trip} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetailPage;