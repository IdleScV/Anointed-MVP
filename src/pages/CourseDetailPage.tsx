import React from 'react';
import { useParams } from 'react-router-dom';
import { useCourses } from '../hooks/useCourses';
import CourseHero from '../components/courses/detail/CourseHero';
import CourseContent from '../components/courses/detail/CourseContent';
import CourseInstructor from '../components/courses/detail/CourseInstructor';
import CourseEnrollment from '../components/courses/detail/CourseEnrollment';

const CourseDetailPage = () => {
  const { id } = useParams();
  const { getCourseById } = useCourses();
  const course = getCourseById(Number(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <CourseHero course={course} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CourseContent course={course} />
            <CourseInstructor instructor={course.instructor} />
          </div>
          <div>
            <CourseEnrollment course={course} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;