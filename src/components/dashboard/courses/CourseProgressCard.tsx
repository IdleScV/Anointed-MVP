import React from 'react';
import { PlayCircle, Clock } from 'lucide-react';
import ProgressBar from './ProgressBar';

interface CourseProgressCardProps {
  title: string;
  thumbnail: string;
  progress: number;
  lastAccessed: string;
  timeAgo: string;
}

const CourseProgressCard: React.FC<CourseProgressCardProps> = ({
  title,
  thumbnail,
  progress,
  timeAgo
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="relative h-48">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <PlayCircle size={48} className="text-white" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-sm text-gray-500">
            <Clock size={16} className="mr-1" />
            <span>{timeAgo}</span>
          </div>
          <span className="text-sm font-medium text-indigo-600">{progress}% complete</span>
        </div>
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

export default CourseProgressCard;