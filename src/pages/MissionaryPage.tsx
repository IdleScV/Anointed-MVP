import React from 'react';
import MissionaryHero from '../components/missionary/MissionaryHero';
import MissionaryGrid from '../components/missionary/MissionaryGrid';
import MissionaryFilter from '../components/missionary/MissionaryFilter';
import { useMissionaries } from '../hooks/useMissionaries';

const MissionaryPage = () => {
  const { missionaries, selectedRegion, setSelectedRegion } = useMissionaries();

  return (
    <div>
      <MissionaryHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <MissionaryFilter
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
        />
        <MissionaryGrid missionaries={missionaries} />
      </div>
    </div>
  );
};

export default MissionaryPage;