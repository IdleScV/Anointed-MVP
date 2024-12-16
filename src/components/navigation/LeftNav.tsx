import React from 'react';
import { NavLink } from './NavLink';

export const LeftNav = () => {
  return (
    <div className="flex items-center space-x-8">
      <nav className="flex space-x-6">
        <NavLink to="/instructors">Instructors</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/missionary">Missionary</NavLink>
        <NavLink to="/trips">Trips</NavLink>
      </nav>
    </div>
  );
};