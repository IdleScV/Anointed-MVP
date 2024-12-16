import React from 'react';
import { Clock, Users, Star, BookOpen } from 'lucide-react';
import { Course } from '../../../types/course';

interface CourseHeroProps {
  course: Course;
}

const CourseHero: React.FC<CourseHeroProps> = ({ course }) => {
  return (
    <div className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <span className="inline-block px-3 py-1 bg-indigo-500 rounded-full text-sm font-medium mb-4">
              {course.category}
            </span>
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-indigo-100 mb-6">{course.description}</p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Clock className="mr-2" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2" />
                <span>{course.students.toLocaleString()} Students</span>
              </div>
              <div className="flex items-center">
                <Star className="mr-2 text-yellow-300" />
                <span>{course.rating} Rating</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="mr-2" />
                <span>{course.lessons} Lessons</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;