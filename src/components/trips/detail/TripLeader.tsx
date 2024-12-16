import React from 'react';
import { Mail, Phone } from 'lucide-react';

interface TripLeaderProps {
  leader: {
    name: string;
    role: string;
    image: string;
    bio: string;
    contact?: {
      email?: string;
      phone?: string;
    };
  };
}

const TripLeader: React.FC<TripLeaderProps> = ({ leader }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Trip Leader</h2>
      <div className="flex items-start gap-6">
        <img
          src={leader.image}
          alt={leader.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{leader.name}</h3>
          <p className="text-indigo-600 font-medium mb-3">{leader.role}</p>
          <p className="text-gray-600 mb-4">{leader.bio}</p>
          
          {leader.contact && (
            <div className="space-y-2">
              {leader.contact.email && (
                <div className="flex items-center text-gray-600">
                  <Mail size={16} className="mr-2" />
                  <a href={`mailto:${leader.contact.email}`} className="hover:text-indigo-600">
                    {leader.contact.email}
                  </a>
                </div>
              )}
              {leader.contact.phone && (
                <div className="flex items-center text-gray-600">
                  <Phone size={16} className="mr-2" />
                  <a href={`tel:${leader.contact.phone}`} className="hover:text-indigo-600">
                    {leader.contact.phone}
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripLeader;