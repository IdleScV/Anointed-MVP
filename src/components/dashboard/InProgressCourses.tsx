import React from 'react';
import { useUserProgress } from '../../hooks/useUserProgress';
import CourseProgressCard from './courses/CourseProgressCard';

const InProgressCourses = () => {
  const { inProgressCourses, getTimeAgo } = useUserProgress();

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Continue Learning</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {inProgressCourses.map((course) => (
          <CourseProgressCard
            key={course.id}
            title={course.title}
            thumbnail={course.thumbnail}
            progress={course.progress}
            lastAccessed={course.lastAccessed}
            timeAgo={getTimeAgo(course.lastAccessed)}
          />
        ))}
      </div>
    </div>
  );
};

export default InProgressCourses;