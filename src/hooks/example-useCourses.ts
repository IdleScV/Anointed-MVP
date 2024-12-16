import { useState, useEffect, useMemo } from 'react';
import { Course, CourseFilters, CourseStats } from '../types/course';

// API response types
interface ApiResponse<T> {
  data: T;
  meta?: {
    total: number;
    page: number;
    pageSize: number;
  };
}

interface CourseApiError {
  message: string;
  code: string;
}

// API service for courses
const courseApi = {
  async fetchCourses(filters?: CourseFilters): Promise<ApiResponse<Course[]>> {
    try {
      const queryParams = new URLSearchParams();
      
      if (filters?.category) queryParams.append('category', filters.category);
      if (filters?.level) queryParams.append('level', filters.level);
      if (filters?.status) queryParams.append('status', filters.status);
      if (filters?.minPrice) queryParams.append('minPrice', filters.minPrice.toString());
      if (filters?.maxPrice) queryParams.append('maxPrice', filters.maxPrice.toString());

      const response = await fetch(`/api/courses?${queryParams.toString()}`);
      if (!response.ok) throw new Error('Failed to fetch courses');
      
      return response.json();
    } catch (error) {
      throw new CourseError('Failed to fetch courses', error as Error);
    }
  },

  async fetchCourseById(id: number): Promise<ApiResponse<Course>> {
    try {
      const response = await fetch(`/api/courses/${id}`);
      if (!response.ok) throw new Error('Failed to fetch course');
      
      return response.json();
    } catch (error) {
      throw new CourseError('Failed to fetch course details', error as Error);
    }
  },

  async fetchCourseStats(): Promise<ApiResponse<CourseStats>> {
    try {
      const response = await fetch('/api/courses/stats');
      if (!response.ok) throw new Error('Failed to fetch course stats');
      
      return response.json();
    } catch (error) {
      throw new CourseError('Failed to fetch course statistics', error as Error);
    }
  }
};

// Custom error class for course-related errors
class CourseError extends Error {
  constructor(message: string, public originalError?: Error) {
    super(message);
    this.name = 'CourseError';
  }
}

// Cache implementation
class CourseCache {
  private cache: Map<string, { data: any; timestamp: number }> = new Map();
  private readonly TTL = 5 * 60 * 1000; // 5 minutes

  set(key: string, data: any): void {
    this.cache.set(key, { data, timestamp: Date.now() });
  }

  get(key: string): any | null {
    const cached = this.cache.get(key);
    if (!cached) return null;
    
    if (Date.now() - cached.timestamp > this.TTL) {
      this.cache.delete(key);
      return null;
    }
    
    return cached.data;
  }

  clear(): void {
    this.cache.clear();
  }
}

// Main hook
export const useExampleCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [stats, setStats] = useState<CourseStats | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<CourseFilters>({});
  const [searchQuery, setSearchQuery] = useState('');

  const cache = useMemo(() => new CourseCache(), []);

  // Fetch courses with caching
  const fetchCourses = async (filters: CourseFilters) => {
    const cacheKey = `courses-${JSON.stringify(filters)}`;
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      setCourses(cachedData);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await courseApi.fetchCourses(filters);
      setCourses(response.data);
      cache.set(cacheKey, response.data);
    } catch (err) {
      setError(err instanceof CourseError ? err.message : 'An unexpected error occurred');
      setCourses([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch course stats
  const fetchStats = async () => {
    const cacheKey = 'course-stats';
    const cachedStats = cache.get(cacheKey);

    if (cachedStats) {
      setStats(cachedStats);
      return;
    }

    try {
      const response = await courseApi.fetchCourseStats();
      setStats(response.data);
      cache.set(cacheKey, response.data);
    } catch (err) {
      console.error('Failed to fetch course stats:', err);
      // Don't set error state for stats - treat as non-critical
    }
  };

  // Fetch data when filters change
  useEffect(() => {
    fetchCourses(filters);
  }, [filters]);

  // Fetch stats on mount
  useEffect(() => {
    fetchStats();
  }, []);

  // Filter courses by search query
  const filteredCourses = useMemo(() => {
    if (!searchQuery) return courses;

    return courses.filter(course =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [courses, searchQuery]);

  // Utility functions
  const getCourseById = async (id: number): Promise<Course | null> => {
    const cacheKey = `course-${id}`;
    const cachedCourse = cache.get(cacheKey);

    if (cachedCourse) return cachedCourse;

    try {
      const response = await courseApi.fetchCourseById(id);
      cache.set(cacheKey, response.data);
      return response.data;
    } catch (err) {
      console.error('Failed to fetch course:', err);
      return null;
    }
  };

  const refreshData = () => {
    cache.clear();
    fetchCourses(filters);
    fetchStats();
  };

  return {
    courses: filteredCourses,
    stats,
    isLoading,
    error,
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    getCourseById,
    refreshData
  };
};