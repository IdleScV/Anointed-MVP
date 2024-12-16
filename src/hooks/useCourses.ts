import { useState, useMemo } from 'react';
import { Course, CourseStats, CourseFilters } from '../types/course';

const mockCourses: Course[] = [
  {
    id: 1,
    title: "Biblical Leadership Foundations",
    description: "Learn essential leadership principles from Biblical examples and modern application.",
    thumbnail: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400",
    instructor: {
      id: 1,
      name: "Dr. Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
    },
    category: "Leadership",
    level: "intermediate",
    duration: "8 weeks",
    lessons: 24,
    students: 156,
    rating: 4.8,
    status: "published",
    price: 199.99,
    hasDiscount: true,
    originalPrice: 299.99,
    createdAt: "2024-02-15T10:00:00Z",
    updatedAt: "2024-03-18T15:30:00Z"
  },
  {
    id: 2,
    title: "Cross-Cultural Communication",
    description: "Master effective communication across cultural boundaries in ministry contexts.",
    thumbnail: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=400",
    instructor: {
      id: 2,
      name: "Prof. Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
    },
    category: "Ministry",
    level: "beginner",
    duration: "6 weeks",
    lessons: 18,
    students: 89,
    rating: 4.9,
    status: "published",
    price: 149.99,
    hasDiscount: false,
    createdAt: "2024-03-01T09:00:00Z",
    updatedAt: "2024-03-17T14:20:00Z"
  },
  {
    id: 3,
    title: "Biblical Hebrew for Beginners",
    description: "Start your journey into reading and understanding the Old Testament in its original language.",
    thumbnail: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400",
    instructor: {
      id: 3,
      name: "Dr. Rachel Cohen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
    },
    category: "Language",
    level: "beginner",
    duration: "12 weeks",
    lessons: 36,
    students: 124,
    rating: 4.7,
    status: "published",
    price: 249.99,
    hasDiscount: true,
    originalPrice: 299.99,
    createdAt: "2024-01-20T08:00:00Z",
    updatedAt: "2024-03-16T11:45:00Z"
  },
  {
    id: 4,
    title: "Systematic Theology",
    description: "A comprehensive study of Christian doctrine and theological frameworks.",
    thumbnail: "https://images.unsplash.com/photo-1585858229735-cd08d8cb0e32?auto=format&fit=crop&q=80&w=400",
    instructor: {
      id: 4,
      name: "Dr. James Wilson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
    },
    category: "Theology",
    level: "advanced",
    duration: "16 weeks",
    lessons: 48,
    students: 203,
    rating: 4.9,
    status: "published",
    price: 299.99,
    hasDiscount: false,
    createdAt: "2024-02-01T10:30:00Z",
    updatedAt: "2024-03-15T16:20:00Z"
  },
  {
    id: 5,
    title: "Church Planting Strategies",
    description: "Learn effective methods for establishing and growing new church communities.",
    thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=400",
    instructor: {
      id: 5,
      name: "Rev. David Martinez",
      avatar: "https://images.unsplash.com/photo-1542178243-bc20204b769f?auto=format&fit=crop&q=80&w=100"
    },
    category: "Ministry",
    level: "intermediate",
    duration: "10 weeks",
    lessons: 30,
    students: 167,
    rating: 4.8,
    status: "published",
    price: 179.99,
    hasDiscount: true,
    originalPrice: 229.99,
    createdAt: "2024-02-10T14:00:00Z",
    updatedAt: "2024-03-14T09:15:00Z"
  },
  {
    id: 6,
    title: "Biblical Greek Essentials",
    description: "Master the fundamentals of New Testament Greek for deeper biblical study.",
    thumbnail: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=400",
    instructor: {
      id: 6,
      name: "Dr. Maria Papadopoulos",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=100"
    },
    category: "Language",
    level: "beginner",
    duration: "12 weeks",
    lessons: 36,
    students: 145,
    rating: 4.7,
    status: "published",
    price: 249.99,
    hasDiscount: false,
    createdAt: "2024-01-15T11:00:00Z",
    updatedAt: "2024-03-13T13:45:00Z"
  },
  {
    id: 7,
    title: "Youth Ministry Leadership",
    description: "Develop skills for effective youth ministry in contemporary contexts.",
    thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400",
    instructor: {
      id: 7,
      name: "Pastor Emily Turner",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100"
    },
    category: "Leadership",
    level: "intermediate",
    duration: "8 weeks",
    lessons: 24,
    students: 178,
    rating: 4.9,
    status: "published",
    price: 169.99,
    hasDiscount: true,
    originalPrice: 199.99,
    createdAt: "2024-02-20T13:30:00Z",
    updatedAt: "2024-03-12T10:20:00Z"
  },
  {
    id: 8,
    title: "Mission Field Preparation",
    description: "Comprehensive training for long-term mission work and cultural adaptation.",
    thumbnail: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400",
    instructor: {
      id: 8,
      name: "Dr. Thomas Anderson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
    },
    category: "Missions",
    level: "advanced",
    duration: "12 weeks",
    lessons: 36,
    students: 134,
    rating: 4.8,
    status: "published",
    price: 229.99,
    hasDiscount: false,
    createdAt: "2024-01-25T09:45:00Z",
    updatedAt: "2024-03-11T16:30:00Z"
  }
];

export const useCourses = () => {
  const [filters, setFilters] = useState<CourseFilters>({});
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = useMemo(() => {
    return mockCourses.filter(course => {
      const matchesSearch = 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = !filters.category || course.category === filters.category;
      const matchesLevel = !filters.level || course.level === filters.level;
      const matchesStatus = !filters.status || course.status === filters.status;
      const matchesPrice = (!filters.minPrice || course.price >= filters.minPrice) &&
                          (!filters.maxPrice || course.price <= filters.maxPrice);

      return matchesSearch && matchesCategory && matchesLevel && matchesStatus && matchesPrice;
    });
  }, [searchQuery, filters]);

  const getCourseStats = (): CourseStats => {
    const totalStudents = mockCourses.reduce((sum, course) => sum + course.students, 0);
    const totalRating = mockCourses.reduce((sum, course) => sum + (course.rating * course.students), 0);
    const totalRevenue = mockCourses.reduce((sum, course) => sum + (course.price * course.students), 0);

    return {
      totalStudents,
      averageRating: totalRating / totalStudents,
      completionRate: 75, // Mock completion rate
      totalRevenue
    };
  };

  const getRecentCourses = (limit: number = 5): Course[] => {
    return [...mockCourses]
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      .slice(0, limit);
  };

  const getPopularCourses = (limit: number = 5): Course[] => {
    return [...mockCourses]
      .sort((a, b) => b.students - a.students)
      .slice(0, limit);
  };

  const getCourseById = (id: number): Course | undefined => {
    return mockCourses.find(course => course.id === id);
  };

  return {
    courses: filteredCourses,
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    getCourseStats,
    getRecentCourses,
    getPopularCourses,
    getCourseById
  };
};