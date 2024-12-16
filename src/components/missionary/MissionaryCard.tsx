import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Missionary } from '../../types/missionary';

interface MissionaryCardProps {
  missionary: Missionary;
}

const MissionaryCard: React.FC<MissionaryCardProps> = ({ missionary }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-64">
        <img
          src={missionary.image}
          alt={missionary.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          {missionary.name}
        </h3>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-1" />
          <span>{missionary.location}</span>
        </div>
        <p className="text-gray-600 mb-6 line-clamp-3">
          {missionary.description}
        </p>
        <Link 
          to={`/missionary/${missionary.id}`}
          className="block w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-center"
        >
          Support Me
        </Link>
      </div>
    </div>
  );
};

export default MissionaryCard;