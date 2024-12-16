import React from 'react';
import { WelcomeHeader } from '../../components/expert-dashboard/header/WelcomeHeader';
import { StudentBox } from '../../components/expert-dashboard/students/StudentBox';
import { LatestOrders } from '../../components/expert-dashboard/orders/LatestOrders';
import { CoursesList } from '../../components/expert-dashboard/courses/CoursesList';
import { ExpertStats } from '../../components/expert-dashboard/stats/ExpertStats';

const ExpertDashboardHome = () => {
  return (
    <div className="space-y-8">
      <WelcomeHeader />
      <ExpertStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <StudentBox />
          <LatestOrders />
        </div>
        <CoursesList />
      </div>
    </div>
  );
};

export default ExpertDashboardHome;