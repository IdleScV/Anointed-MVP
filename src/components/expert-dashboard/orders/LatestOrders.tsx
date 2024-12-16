import React from 'react';
import { Receipt, ArrowUpRight } from 'lucide-react';
import { useOrders } from '../../../hooks/useOrders';
import OrderStatus from './OrderStatus';
import OrderAmount from './OrderAmount';
import StudentAvatar from '../students/StudentAvatar';

export const LatestOrders = () => {
  const { getRecentOrders } = useOrders();
  const recentOrders = getRecentOrders(3);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mt-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Receipt className="text-emerald-600" size={20} />
          <h2 className="text-lg font-semibold">Latest Orders</h2>
        </div>
        <button className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
          <span className="text-sm">View All</span>
          <ArrowUpRight size={16} />
        </button>
      </div>
      
      <div className="space-y-4">
        {recentOrders.map(order => (
          <div key={order.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {order.studentAvatar && (
                <img
                  src={order.studentAvatar}
                  alt={order.studentName}
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <div>
                <h3 className="font-medium text-gray-900">{order.studentName}</h3>
                <p className="text-sm text-gray-500">{order.courseName}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <OrderAmount amount={order.amount} />
              <OrderStatus status={order.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};