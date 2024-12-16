import React from 'react';
import MissionaryCard from './MissionaryCard';
import { Missionary } from '../../types/missionary';

interface MissionaryGridProps {
  missionaries: Missionary[];
}

const MissionaryGrid: React.FC<MissionaryGridProps> = ({ missionaries }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {missionaries.map((missionary) => (
        <MissionaryCard key={missionary.id} missionary={missionary} />
      ))}
    </div>
  );
};

export default MissionaryGrid;