export interface UserCourseProgress {
  courseId: number;
  progress: number;
  lastAccessed: string;
  status: 'not_started' | 'in_progress' | 'completed';
}

export interface UserProgress {
  userId: number;
  courses: UserCourseProgress[];
}