import React from 'react';
import { useCourses } from '../../../hooks/useCourses';
import CourseCard from '../../courses/CourseCard';

interface InstructorCoursesProps {
  instructorId: number;
}

const InstructorCourses: React.FC<InstructorCoursesProps> = ({ instructorId }) => {
  const { courses } = useCourses();
  const instructorCourses = courses.filter(course => course.instructor.id === instructorId);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Courses ({instructorCourses.length})</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {instructorCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default InstructorCourses;