export type CourseStatus = 'draft' | 'published' | 'archived';
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Course {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  instructor: {
    id: number;
    name: string;
    avatar?: string;
  };
  category: string;
  level: CourseLevel;
  duration: string;
  lessons: number;
  students: number;
  rating: number;
  status: CourseStatus;
  price: number;
  hasDiscount: boolean;
  originalPrice?: number;
  createdAt: string;
  updatedAt: string;
}

export interface CourseStats {
  totalStudents: number;
  averageRating: number;
  completionRate: number;
  totalRevenue: number;
}

export interface CourseFilters {
  category?: string;
  level?: CourseLevel;
  status?: CourseStatus;
  minPrice?: number;
  maxPrice?: number;
}