import React from 'react';
import { CourseStatus as CourseStatusType } from '../../../types/course';

interface CourseStatusProps {
  status: CourseStatusType;
}

const statusStyles = {
  published: 'bg-green-100 text-green-600',
  draft: 'bg-yellow-100 text-yellow-600',
  archived: 'bg-gray-100 text-gray-600'
};

const CourseStatus: React.FC<CourseStatusProps> = ({ status }) => {
  return (
    <span className={`text-xs px-2 py-1 rounded-full ${statusStyles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default CourseStatus;