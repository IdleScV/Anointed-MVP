import React from 'react';
import { User2, ArrowUpRight } from 'lucide-react';
import { useStudents } from '../../../hooks/useStudents';
import StudentProgressBar from './StudentProgressBar';
import StudentAvatar from './StudentAvatar';

export const StudentBox = () => {
  const { getRecentStudents } = useStudents();
  const recentStudents = getRecentStudents(3);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <User2 className="text-emerald-600" size={20} />
          <h2 className="text-lg font-semibold">Recent Students</h2>
        </div>
        <button className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
          <span className="text-sm">View All</span>
          <ArrowUpRight size={16} />
        </button>
      </div>
      
      <div className="space-y-4">
        {recentStudents.map(student => (
          <div key={student.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <StudentAvatar student={student} />
              <div>
                <h3 className="font-medium text-gray-900">{student.name}</h3>
                <p className="text-sm text-gray-500">{student.course}</p>
              </div>
            </div>
            <StudentProgressBar progress={student.progress} />
          </div>
        ))}
      </div>
    </div>
  );
};