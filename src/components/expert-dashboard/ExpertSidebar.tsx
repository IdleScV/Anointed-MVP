import React from 'react';
import SidebarItem from '../dashboard/SidebarItem';
import SidebarToggle from '../dashboard/SidebarToggle';
import { ExpertSidebarHeader } from './ExpertSidebarHeader';
import { expertSidebarItems } from '../../config/expertSidebarConfig';

interface ExpertSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ExpertSidebar: React.FC<ExpertSidebarProps> = ({ isOpen, onToggle }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-white border-r transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <ExpertSidebarHeader isOpen={isOpen} />
      <SidebarToggle isOpen={isOpen} onToggle={onToggle} />

      <nav className="p-4 mt-4">
        {expertSidebarItems.map((item) => (
          <SidebarItem
            key={item.path}
            icon={item.icon}
            label={item.label}
            path={item.path}
            isOpen={isOpen}
          />
        ))}
      </nav>
    </div>
  );
};

export default ExpertSidebar;