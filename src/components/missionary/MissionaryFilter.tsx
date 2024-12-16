import React from 'react';

const regions = [
  'All Regions',
  'Africa',
  'Asia',
  'Europe',
  'Latin America',
  'Middle East',
  'North America',
  'Oceania'
];

interface MissionaryFilterProps {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

const MissionaryFilter: React.FC<MissionaryFilterProps> = ({
  selectedRegion,
  onRegionChange
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter by Region</h2>
      <div className="flex flex-wrap gap-2">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => onRegionChange(region)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedRegion === region
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MissionaryFilter;