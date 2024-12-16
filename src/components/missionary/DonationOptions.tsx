import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Missionary } from '../../types/missionary';

interface DonationOptionsProps {
  missionary: Missionary;
}

const donationAmounts = [25, 50, 100, 250, 500];

const DonationOptions: React.FC<DonationOptionsProps> = ({ missionary }) => {
  const [donationType, setDonationType] = useState<'once' | 'monthly'>('once');
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');

  const handleDonate = () => {
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;
    // Implement donation logic here
    console.log(`Donating $${amount} ${donationType === 'monthly' ? 'monthly' : 'once'}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Support {missionary.name}</h2>
      
      {/* Donation Type Toggle */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setDonationType('once')}
          className={`flex-1 py-3 px-4 rounded-lg font-medium ${
            donationType === 'once'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Give Once
        </button>
        <button
          onClick={() => setDonationType('monthly')}
          className={`flex-1 py-3 px-4 rounded-lg font-medium ${
            donationType === 'monthly'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Give Monthly
        </button>
      </div>

      {/* Preset Amounts */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {donationAmounts.map((amount) => (
          <button
            key={amount}
            onClick={() => {
              setSelectedAmount(amount);
              setCustomAmount('');
            }}
            className={`py-3 px-4 rounded-lg font-medium ${
              selectedAmount === amount && !customAmount
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            ${amount}
          </button>
        ))}
        <input
          type="number"
          placeholder="Custom"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setSelectedAmount(0);
          }}
          className="py-3 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Donate Button */}
      <button
        onClick={handleDonate}
        className="w-full bg-indigo-600 text-white py-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center"
      >
        <Heart size={20} className="mr-2" />
        {donationType === 'monthly' ? 'Start Monthly Support' : 'Give Now'}
      </button>

      {/* Additional Info */}
      <p className="text-sm text-gray-500 mt-4 text-center">
        Your donation helps support {missionary.name}'s mission work in {missionary.location}.
      </p>
    </div>
  );
};

export default DonationOptions;