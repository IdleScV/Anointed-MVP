import React from 'react';
import { useDashboardStats } from '../../hooks/useDashboardStats';
import StatCard from '../../components/dashboard/StatCard';

const DashboardHome = () => {
  const { getStatCards, isLoading, error } = useDashboardStats();
  const statCards = getStatCards();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <StatCard
            key={index}
            label={stat.label}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {/* Activity items would go here */}
            <p className="text-gray-600">No recent activities</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {/* Event items would go here */}
            <p className="text-gray-600">No upcoming events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;