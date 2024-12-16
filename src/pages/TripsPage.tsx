import React from 'react';
import TripHero from '../components/trips/TripHero';
import TripGrid from '../components/trips/TripGrid';
import TripFilter from '../components/trips/TripFilter';
import { useTrips } from '../hooks/useTrips';

const TripsPage = () => {
  const { trips, selectedType, setSelectedType } = useTrips();

  return (
    <div>
      <TripHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <TripFilter
          selectedType={selectedType}
          onTypeChange={setSelectedType}
        />
        <TripGrid trips={trips} />
      </div>
    </div>
  );
};

export default TripsPage;