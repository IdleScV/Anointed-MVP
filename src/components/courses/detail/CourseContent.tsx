import React from 'react';
import { Course } from '../../../types/course';
import { BookOpen, CheckCircle } from 'lucide-react';

interface CourseContentProps {
  course: Course;
}

const CourseContent: React.FC<CourseContentProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Content</h2>
      <div className="space-y-4">
        {course.curriculum?.map((section, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 flex items-center justify-between">
              <h3 className="font-medium text-gray-900">{section.title}</h3>
              <span className="text-sm text-gray-500">{section.lessons.length} lessons</span>
            </div>
            <div className="divide-y">
              {section.lessons.map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center">
                    {lesson.type === 'video' ? (
                      <BookOpen size={16} className="text-indigo-600 mr-2" />
                    ) : (
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                    )}
                    <span className="text-gray-700">{lesson.title}</span>
                  </div>
                  <span className="text-sm text-gray-500">{lesson.duration}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;