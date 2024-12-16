import React from 'react';
import { useParams } from 'react-router-dom';
import { useInstructors } from '../hooks/useInstructors';
import InstructorHero from '../components/instructors/detail/InstructorHero';
import InstructorCourses from '../components/instructors/detail/InstructorCourses';
import InstructorStats from '../components/instructors/detail/InstructorStats';
import InstructorBio from '../components/instructors/detail/InstructorBio';

const InstructorDetailPage = () => {
  const { id } = useParams();
  const { getInstructorById } = useInstructors();
  const instructor = getInstructorById(Number(id));

  if (!instructor) {
    return <div>Instructor not found</div>;
  }

  return (
    <div>
      <InstructorHero instructor={instructor} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <InstructorBio instructor={instructor} />
            <InstructorCourses instructorId={instructor.id} />
          </div>
          <div>
            <InstructorStats instructor={instructor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetailPage;