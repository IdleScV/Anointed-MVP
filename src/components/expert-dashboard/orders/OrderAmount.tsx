import React from 'react';

interface OrderAmountProps {
  amount: number;
}

const OrderAmount: React.FC<OrderAmountProps> = ({ amount }) => {
  return (
    <span className="font-medium text-gray-900">
      ${amount.toFixed(2)}
    </span>
  );
};

export default OrderAmount;