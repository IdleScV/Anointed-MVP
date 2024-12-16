import React from 'react';
import { Student } from '../../../types/student';

interface StudentAvatarProps {
  student: Student;
}

const StudentAvatar: React.FC<StudentAvatarProps> = ({ student }) => {
  if (student.avatar) {
    return (
      <img
        src={student.avatar}
        alt={student.name}
        className="w-10 h-10 rounded-full object-cover"
      />
    );
  }

  return (
    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
      <span className="text-emerald-600 text-sm font-medium">
        {student.name.charAt(0)}
      </span>
    </div>
  );
};

export default StudentAvatar;