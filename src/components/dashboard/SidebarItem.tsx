import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { useLogout } from '../../hooks/useLogout';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  path: string;
  isOpen: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, path, isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = useLogout();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (path === '/logout') {
      handleLogout();
    } else {
      navigate(path);
    }
  };

  const isActive = () => {
    if (path === '/') {
      return location.pathname === '/';
    }
    if (path === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    if (path.startsWith('/dashboard/')) {
      return location.pathname === path;
    }
    return false;
  };

  return (
    <NavLink
      to={path}
      onClick={handleClick}
      className={
        `flex items-center p-3 mb-2 rounded-lg transition-colors ${
          isActive() && path !== '/logout'
            ? 'bg-indigo-50 text-indigo-600'
            : 'text-gray-600 hover:bg-gray-50'
        }`
      }
    >
      <Icon size={20} />
      <span
        className={`ml-3 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {label}
      </span>
    </NavLink>
  );
};

export default SidebarItem;