import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface SidebarToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="absolute -right-3 top-4 bg-white border rounded-full p-1 hover:bg-gray-100"
    >
      <ChevronLeft
        className={`transform transition-transform ${!isOpen ? 'rotate-180' : ''}`}
        size={20}
      />
    </button>
  );
};

export default SidebarToggle;