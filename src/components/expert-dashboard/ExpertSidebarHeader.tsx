import React from 'react';

interface ExpertSidebarHeaderProps {
  isOpen: boolean;
}

export const ExpertSidebarHeader: React.FC<ExpertSidebarHeaderProps> = ({ isOpen }) => {
  return (
    <div className="h-16 flex items-center px-4 border-b">
      <span className={`text-xl font-bold text-emerald-600 transition-opacity ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}>
        Expert Hub
      </span>
    </div>
  );
};