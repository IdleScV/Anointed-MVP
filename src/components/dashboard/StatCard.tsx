import React from 'react';
import { ArrowUp, ArrowDown, LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  change?: {
    value: number;
    trend: 'up' | 'down';
  };
  icon: LucideIcon;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  change,
  icon: Icon,
  color
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className={`${color} text-white p-3 rounded-lg`}>
          <Icon size={24} />
        </div>
        {change && (
          <div className={`flex items-center ${
            change.trend === 'up' ? 'text-green-600' : 'text-red-600'
          }`}>
            {change.trend === 'up' ? (
              <ArrowUp size={20} className="mr-1" />
            ) : (
              <ArrowDown size={20} className="mr-1" />
            )}
            <span className="text-sm font-medium">{change.value}%</span>
          </div>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="text-gray-600 font-medium">{label}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;