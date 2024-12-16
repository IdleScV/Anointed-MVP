import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import ExpertDashboardLayout from '../layouts/ExpertDashboardLayout';
import { DashboardRoutes } from './DashboardRoutes';
import { MainRoutes } from './MainRoutes';
import { ExpertDashboardRoutes } from './ExpertDashboardRoutes';
import { AuthProvider } from '../contexts/AuthContext';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import LoginPage from '../pages/auth/LoginPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Dashboard Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route>{DashboardRoutes}</Route>
          </Route>

          {/* Protected Expert Dashboard Routes */}
          <Route
            path="/expert-dashboard"
            element={
              <ProtectedRoute>
                <ExpertDashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route>{ExpertDashboardRoutes}</Route>
          </Route>

          {/* Public Routes */}
          <Route element={<MainLayout />}>
            <Route>{MainRoutes}</Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRouter;