import React from 'react';
import { Settings } from 'lucide-react';

const SettingsPage = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Settings className="text-indigo-600" size={24} />
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <p className="text-gray-600">Your settings will appear here.</p>
      </div>
    </div>
  );
};

export default SettingsPage;