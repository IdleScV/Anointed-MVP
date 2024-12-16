import React from 'react';
import { Award, BookOpen, Users, Star } from 'lucide-react';
import { Instructor } from '../../../types/instructor';

interface InstructorStatsProps {
  instructor: Instructor;
}

const InstructorStats: React.FC<InstructorStatsProps> = ({ instructor }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Instructor Stats</h2>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <BookOpen className="text-indigo-600" size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Courses</p>
              <p className="text-lg font-semibold">{instructor.courses}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <Users className="text-green-600" size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Students</p>
              <p className="text-lg font-semibold">{instructor.students.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Star className="text-yellow-600" size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Average Rating</p>
              <p className="text-lg font-semibold">{instructor.rating}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Award className="text-purple-600" size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Experience</p>
              <p className="text-lg font-semibold">{instructor.experience} Years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorStats;