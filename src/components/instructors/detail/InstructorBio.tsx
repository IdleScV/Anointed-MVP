import React from 'react';
import { Instructor } from '../../../types/instructor';

interface InstructorBioProps {
  instructor: Instructor;
}

const InstructorBio: React.FC<InstructorBioProps> = ({ instructor }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
      <p className="text-gray-600 leading-relaxed mb-6">{instructor.bio}</p>
      <div className="border-t border-gray-100 pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Areas of Expertise</h3>
        <div className="flex flex-wrap gap-2">
          {instructor.expertise.map((skill) => (
            <span
              key={skill}
              className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorBio;