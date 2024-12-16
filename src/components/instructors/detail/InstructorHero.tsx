import React from 'react';
import { Star, Users, BookOpen } from 'lucide-react';
import { Instructor } from '../../../types/instructor';

interface InstructorHeroProps {
  instructor: Instructor;
}

const InstructorHero: React.FC<InstructorHeroProps> = ({ instructor }) => {
  return (
    <div className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={instructor.image}
            alt={instructor.name}
            className="w-48 h-48 rounded-full object-cover border-4 border-white/20"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">{instructor.name}</h1>
            <p className="text-xl text-indigo-100 mb-6">{instructor.title}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <div className="flex items-center">
                <BookOpen className="mr-2" />
                <span>{instructor.courses} Courses</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2" />
                <span>{instructor.students.toLocaleString()} Students</span>
              </div>
              <div className="flex items-center">
                <Star className="mr-2 text-yellow-300" />
                <span>{instructor.rating} Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorHero;