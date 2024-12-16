import React from 'react';
import InstructorHero from '../components/instructors/InstructorHero';
import InstructorGrid from '../components/instructors/InstructorGrid';
import InstructorFilter from '../components/instructors/InstructorFilter';
import { useInstructors } from '../hooks/useInstructors';

const InstructorsPage = () => {
  const { instructors, selectedCategory, setSelectedCategory } = useInstructors();

  return (
    <div>
      <InstructorHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <InstructorFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <InstructorGrid instructors={instructors} />
      </div>
    </div>
  );
};

export default InstructorsPage;