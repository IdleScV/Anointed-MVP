import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const team = [
  {
    name: 'Rev. David Wilson',
    role: 'Founder & Executive Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    bio: 'With 20 years of ministry experience, David leads our vision to equip believers globally.'
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Director of Education',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    bio: 'Sarah brings academic excellence and pastoral heart to our educational programs.'
  },
  {
    name: 'Pastor Michael Thompson',
    role: 'Missions Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    bio: 'Michael coordinates our global missions efforts and partnership development.'
  }
];

const Team = () => {
  const theme = useTheme();

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <span className={`${theme.colors.accent.DEFAULT} text-lg font-semibold`}>
          Our Team
        </span>
        <h2 className="mt-3 text-3xl font-bold text-gray-900">
          Led by Faith and Experience
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <div className="mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className={`${theme.colors.primary.DEFAULT} font-medium mb-2`}>
              {member.role}
            </p>
            <p className="text-gray-600">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team