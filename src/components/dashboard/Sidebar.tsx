import React from 'react';
import SidebarItem from './SidebarItem';
import SidebarToggle from './SidebarToggle';
import { SidebarHeader } from './SidebarHeader';
import { sidebarItems } from '../../config/sidebarConfig';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-white border-r transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <SidebarHeader isOpen={isOpen} />
      <SidebarToggle isOpen={isOpen} onToggle={onToggle} />

      <nav className="p-4 mt-4">
        {sidebarItems.map((item) => (
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

export default Sidebar;