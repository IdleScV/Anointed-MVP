import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link to={to} className="text-gray-600 hover:text-gray-900 font-medium">
      {children}
    </Link>
  );
};