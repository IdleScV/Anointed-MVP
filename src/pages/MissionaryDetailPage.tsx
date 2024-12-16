import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Users, Heart } from 'lucide-react';
import { useMissionaries } from '../hooks/useMissionaries';
import DonationOptions from '../components/missionary/DonationOptions';

const MissionaryDetailPage = () => {
  const { id } = useParams();
  const { getMissionaryById } = useMissionaries();
  const missionary = getMissionaryById(Number(id));

  if (!missionary) {
    return <div>Missionary not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Missionary Info */}
        <div>
          <div className="relative h-96 rounded-xl overflow-hidden mb-6">
            <img
              src={missionary.image}
              alt={missionary.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{missionary.name}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <MapPin size={20} className="mr-2" />
            <span>{missionary.location}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex items-center text-indigo-600 mb-2">
                <Users size={20} className="mr-2" />
                <span className="font-semibold">People Impacted</span>
              </div>
              <p className="text-2xl font-bold text-indigo-600">
                {missionary.peopleImpacted.toLocaleString()}
              </p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <div className="flex items-center text-pink-600 mb-2">
                <Heart size={20} className="mr-2" />
                <span className="font-semibold">Current Supporters</span>
              </div>
              <p className="text-2xl font-bold text-pink-600">
                {missionary.supporters.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-4">About My Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {missionary.description}
            </p>
          </div>
        </div>

        {/* Support Options */}
        <div>
          <DonationOptions missionary={missionary} />
        </div>
      </div>
    </div>
  );
};

export default MissionaryDetailPage;