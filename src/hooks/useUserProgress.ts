import { useState, useMemo } from 'react';
import { UserProgress, UserCourseProgress } from '../types/userProgress';
import { useCourses } from './useCourses';

const mockUserProgress: UserProgress = {
  userId: 1,
  courses: [
    {
      courseId: 1,
      progress: 65,
      lastAccessed: '2024-03-16T10:30:00Z',
      status: 'in_progress'
    },
    {
      courseId: 2,
      progress: 30,
      lastAccessed: '2024-03-13T15:45:00Z',
      status: 'in_progress'
    }
  ]
};

export const useUserProgress = () => {
  const { getCourseById } = useCourses();
  const [userProgress] = useState<UserProgress>(mockUserProgress);

  const inProgressCourses = useMemo(() => {
    return userProgress.courses
      .filter(progress => progress.status === 'in_progress')
      .map(progress => {
        const course = getCourseById(progress.courseId);
        return {
          ...course,
          progress: progress.progress,
          lastAccessed: progress.lastAccessed
        };
      })
      .filter(course => course !== undefined);
  }, [userProgress, getCourseById]);

  const getTimeAgo = (date: string): string => {
    const now = new Date();
    const accessDate = new Date(date);
    const diffInDays = Math.floor((now.getTime() - accessDate.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'today';
    if (diffInDays === 1) return 'yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    return `${Math.floor(diffInDays / 7)} weeks ago`;
  };

  return {
    inProgressCourses,
    getTimeAgo
  };
};