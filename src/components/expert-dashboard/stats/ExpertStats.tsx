import React from 'react';
import { ExpertStatCard } from './ExpertStatCard';
import { expertStats } from '../../../config/expertStatsConfig';

export const ExpertStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {expertStats.map((stat) => (
        <ExpertStatCard key={stat.label} stat={stat} />
      ))}
    </div>
  );
};