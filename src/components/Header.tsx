import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LeftNav } from './navigation/LeftNav';
import { RightNav } from './navigation/RightNav';
import { Logo } from './navigation/Logo';

const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <LeftNav />
          <Logo />
          <RightNav onLogout={handleLogout} />
        </div>
      </div>
    </header>
  );
};

export default Header;