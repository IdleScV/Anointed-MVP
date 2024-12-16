import React from 'react';
import { Route } from 'react-router-dom';
import DashboardHome from '../pages/dashboard/DashboardHome';
import CoursesPage from '../pages/dashboard/CoursesPage';
import TripsPage from '../pages/dashboard/TripsPage';
import SettingsPage from '../pages/dashboard/SettingsPage';

export const DashboardRoutes = (
  <>
    <Route index element={<DashboardHome />} />
    <Route path="courses" element={<CoursesPage />} />
    <Route path="trips" element={<TripsPage />} />
    <Route path="settings" element={<SettingsPage />} />
  </>
);