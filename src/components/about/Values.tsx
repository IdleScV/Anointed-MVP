import React from 'react';
import { Book, Heart, Users, Globe, BookOpen, HandHeart } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const values = [
  {
    icon: Book,
    title: 'Biblical Truth',
    description: 'Grounding all our teachings in the timeless wisdom of Scripture'
  },
  {
    icon: Heart,
    title: 'Christ-Centered Love',
    description: "Demonstrating God's love in everything we do"
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Fostering meaningful connections and support networks'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Reaching across cultures to share the Gospel'
  },
  {
    icon: BookOpen,
    title: 'Excellence',
    description: 'Providing high-quality education and resources'
  },
  {
    icon: HandHeart,
    title: 'Prayer',
    description: "Seeking God's guidance in all our endeavors"
  }
];

const Values = () => {
  const theme = useTheme();

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <span className={`${theme.colors.accent.DEFAULT} text-lg font-semibold`}>
          Our Values
        </span>
        <h2 className="mt-3 text-3xl font-bold text-gray-900">
          What Guides Us
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value) => (
          <div key={value.title} className="text-center">
            <div className="flex justify-center mb-4">
              <div className={`${theme.colors.primary.bg.DEFAULT} p-3 rounded-lg`}>
                <value.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {value.title}
            </h3>
            <p className="text-gray-600">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;