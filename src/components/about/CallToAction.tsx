import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

const CallToAction = () => {
  const theme = useTheme();

  return (
    <div className="py-16">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="px-6 py-12 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're called to teach, serve, or support, there's a place for you in our 
            community. Together, we can make a lasting impact for God's kingdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className={`${theme.colors.primary.bg.DEFAULT} text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium`}
            >
              Explore Courses
            </Link>
            <Link
              to="/missionary"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors font-medium"
            >
              Support Missionaries
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction