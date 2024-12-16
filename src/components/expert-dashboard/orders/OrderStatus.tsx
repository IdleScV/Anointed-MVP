import React from 'react';
import { OrderStatus as OrderStatusType } from '../../../types/order';

interface OrderStatusProps {
  status: OrderStatusType;
}

const statusStyles = {
  completed: 'bg-green-100 text-green-600',
  pending: 'bg-yellow-100 text-yellow-600',
  cancelled: 'bg-red-100 text-red-600',
  refunded: 'bg-gray-100 text-gray-600'
};

const OrderStatus: React.FC<OrderStatusProps> = ({ status }) => {
  return (
    <span className={`text-sm px-2 py-1 rounded-full ${statusStyles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default OrderStatus;