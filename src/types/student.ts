export interface Student {
  id: number;
  name: string;
  course: string;
  progress: number;
  avatar?: string;
  enrollmentDate: string;
  lastActive: string;
  email: string;
  status: 'active' | 'inactive' | 'completed';
}

export interface StudentProgress {
  courseId: number;
  courseName: string;
  progress: number;
  lastAccessed: string;
  status: 'in_progress' | 'completed' | 'not_started';
}

export interface StudentStats {
  totalCourses: number;
  completedCourses: number;
  averageProgress: number;
  lastActiveDate: string;
}