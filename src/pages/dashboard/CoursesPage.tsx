import React from 'react';
import { BookOpen } from 'lucide-react';
import { useCourses } from '../../hooks/useCourses';
import DashboardSearch from '../../components/dashboard/DashboardSearch';
import InProgressCourses from '../../components/dashboard/InProgressCourses';
import CourseFilter from '../../components/dashboard/CourseFilter';
import CourseGrid from '../../components/dashboard/CourseGrid';

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
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BookOpen className="text-indigo-600" size={24} />
          <h1 className="text-2xl font-bold text-gray-900">Courses</h1>
        </div>
        <DashboardSearch />
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
          <p className="text-sm text-gray-600 mb-1">Active Courses</p>
          <p className="text-2xl font-bold text-gray-900">{courses.length}</p>
        </div>
      </div>

      {/* In Progress Courses */}
      <InProgressCourses />

      {/* Course Filters and Grid */}
      <div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">All Courses</h2>
          <CourseFilter
            selectedCategory={filters.category || 'All'}
            onCategoryChange={(category) => 
              setFilters({ ...filters, category: category === 'All' ? undefined : category })
            }
          />
        </div>

        <CourseGrid courses={courses} />

        {courses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No courses found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;