import React from 'react';
import { useCourses } from '../hooks/useCourses';
import CourseHero from '../components/courses/CourseHero';
import CourseSearch from '../components/courses/CourseSearch';
import CourseFilters from '../components/courses/CourseFilters';
import CourseList from '../components/courses/CourseList';

const CoursesPage = () => {
  const {
    courses,
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    getCourseStats
  } = useCourses();

  const stats = getCourseStats();

  return (
    <div>
      <CourseHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Total Students</p>
            <p className="text-2xl font-bold text-gray-900">{stats.totalStudents.toLocaleString()}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Average Rating</p>
            <p className="text-2xl font-bold text-gray-900">{stats.averageRating.toFixed(1)}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Completion Rate</p>
            <p className="text-2xl font-bold text-gray-900">{stats.completionRate}%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-900">${(stats.totalRevenue / 1000).toFixed(1)}k</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="space-y-6 mb-8">
          <CourseSearch
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          <CourseFilters
            filters={filters}
            onFilterChange={setFilters}
          />
        </div>

        {/* Course List */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Available Courses {courses.length > 0 && `(${courses.length})`}
            </h2>
            <div className="flex items-center gap-4">
              <select className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <CourseList courses={courses} />

          {courses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No courses found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;