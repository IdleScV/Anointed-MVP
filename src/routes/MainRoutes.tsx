import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MissionaryPage from '../pages/MissionaryPage';
import MissionaryDetailPage from '../pages/MissionaryDetailPage';
import InstructorsPage from '../pages/InstructorsPage';
import InstructorDetailPage from '../pages/InstructorDetailPage';
import CoursesPage from '../pages/CoursesPage';
import CourseDetailPage from '../pages/CourseDetailPage';
import TripsPage from '../pages/TripsPage';
import TripDetailPage from '../pages/TripDetailPage';
import AboutPage from '../pages/AboutPage';
import BlogPage from '../pages/BlogPage';

export const MainRoutes = (
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/missionary" element={<MissionaryPage />} />
    <Route path="/missionary/:id" element={<MissionaryDetailPage />} />
    <Route path="/instructors" element={<InstructorsPage />} />
    <Route path="/instructors/:id" element={<InstructorDetailPage />} />
    <Route path="/courses" element={<CoursesPage />} />
    <Route path="/courses/:id" element={<CourseDetailPage />} />
    <Route path="/trips" element={<TripsPage />} />
    <Route path="/trips/:id" element={<TripDetailPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/blog" element={<BlogPage />} />
  </>
);