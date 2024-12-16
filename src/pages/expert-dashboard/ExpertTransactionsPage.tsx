import React from 'react';
import { Receipt } from 'lucide-react';

const ExpertTransactionsPage = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Receipt className="text-emerald-600" size={24} />
        <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <p className="text-gray-600">Your transactions will appear here.</p>
      </div>
    </div>
  );
};

export default ExpertTransactionsPage;