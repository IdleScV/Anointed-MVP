import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const types = [
  'All Types',
  'Medical',
  'Construction',
  'Education',
  'Youth',
  'Evangelism',
  'Community'
];

interface TripFilterProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

const TripFilter: React.FC<TripFilterProps> = ({
  selectedType,
  onTypeChange
}) => {
  const theme = useTheme();

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter by Type</h2>
      <div className="flex flex-wrap gap-2">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => onTypeChange(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedType === type
                ? `${theme.colors.primary.bg.DEFAULT} text-white`
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TripFilter;