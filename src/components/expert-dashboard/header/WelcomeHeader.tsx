import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';

export const WelcomeHeader = () => {
  const { user } = useAuth();
  
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-600 mt-1">Here's what's happening with your courses today.</p>
      </div>
      <div className="flex items-center space-x-4">
        {user?.avatar ? (
          <img
            src={user.avatar}
            alt={user.name}
            className="w-12 h-12 rounded-full border-2 border-emerald-500"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
            <span className="text-emerald-600 text-lg font-medium">
              {user?.name?.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};