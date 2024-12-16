import React from 'react';
import InstructorCard from './InstructorCard';
import { Instructor } from '../../types/instructor';

interface InstructorGridProps {
  instructors: Instructor[];
}

const InstructorGrid: React.FC<InstructorGridProps> = ({ instructors }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {instructors.map((instructor) => (
        <InstructorCard key={instructor.id} instructor={instructor} />
      ))}
    </div>
  );
};

export default InstructorGrid;