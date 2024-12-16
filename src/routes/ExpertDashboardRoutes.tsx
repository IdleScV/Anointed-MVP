import React from 'react';
import { Route } from 'react-router-dom';
import ExpertDashboardHome from '../pages/expert-dashboard/ExpertDashboardHome';
import ExpertCoursesPage from '../pages/expert-dashboard/ExpertCoursesPage';
import ExpertTransactionsPage from '../pages/expert-dashboard/ExpertTransactionsPage';
import ExpertWalletPage from '../pages/expert-dashboard/ExpertWalletPage';
import ExpertSettingsPage from '../pages/expert-dashboard/ExpertSettingsPage';
import ExpertAccountPage from '../pages/expert-dashboard/ExpertAccountPage';
import ExpertHelpPage from '../pages/expert-dashboard/ExpertHelpPage';

export const ExpertDashboardRoutes = (
  <>
    <Route index element={<ExpertDashboardHome />} />
    <Route path="courses" element={<ExpertCoursesPage />} />
    <Route path="transactions" element={<ExpertTransactionsPage />} />
    <Route path="wallet" element={<ExpertWalletPage />} />
    <Route path="settings" element={<ExpertSettingsPage />} />
    <Route path="account" element={<ExpertAccountPage />} />
    <Route path="help" element={<ExpertHelpPage />} />
  </>
);