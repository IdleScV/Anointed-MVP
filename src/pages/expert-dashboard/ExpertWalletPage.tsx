import React from 'react';
import { Wallet } from 'lucide-react';

const ExpertWalletPage = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Wallet className="text-emerald-600" size={24} />
        <h1 className="text-2xl font-bold text-gray-900">Wallet</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <p className="text-gray-600">Your wallet information will appear here.</p>
      </div>
    </div>
  );
};

export default ExpertWalletPage;