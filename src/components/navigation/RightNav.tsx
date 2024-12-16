import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, User, LogIn } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { NavLink } from './NavLink';

interface RightNavProps {
  onLogout: () => void;
}

export const RightNav: React.FC<RightNavProps> = ({ onLogout }) => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="flex items-center space-x-6">
      <nav className="flex items-center space-x-6">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/give">Give</NavLink>
        
        {isAuthenticated ? (
          <div className="relative group">
            <button className="flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              <User size={18} />
              <span>{user?.name}</span>
              <ChevronDown size={18} />
            </button>
            <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-indigo-50">
                Dashboard
              </Link>
              <button
                onClick={onLogout}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-indigo-50"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className="flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <LogIn size={18} />
            <span>Sign In</span>
          </Link>
        )}
      </nav>
    </div>
  );
};