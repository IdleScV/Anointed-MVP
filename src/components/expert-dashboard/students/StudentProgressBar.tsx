import React from 'react';

interface StudentProgressBarProps {
  progress: number;
}

const StudentProgressBar: React.FC<StudentProgressBarProps> = ({ progress }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-emerald-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-sm text-gray-600">{progress}%</span>
    </div>
  );
};

export default StudentProgressBar;