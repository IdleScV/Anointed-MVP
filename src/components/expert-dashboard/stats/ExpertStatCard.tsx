import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatProps {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

interface ExpertStatCardProps {
  stat: StatProps;
}

export const ExpertStatCard: React.FC<ExpertStatCardProps> = ({ stat }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className={`${stat.color} text-white p-3 rounded-lg`}>
          <stat.icon size={24} />
        </div>
        <span className="text-2xl font-bold">{stat.value}</span>
      </div>
      <h3 className="text-gray-600 font-medium">{stat.label}</h3>
    </div>
  );
};