import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const SidebarHeader: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="h-16 flex items-center px-4 border-b">
      <div className="flex flex-col">
        <Link to="/" className="flex items-center">
          <span className={`text-xl font-bold text-indigo-600 transition-opacity ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}>
            Annointed
          </span>
        </Link>
        {isOpen && (
          <button 
            onClick={() => navigate('/expert-dashboard')}
            className="mt-1 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Expert Hub Dashboard
          </button>
        )}
      </div>
    </div>
  );
};