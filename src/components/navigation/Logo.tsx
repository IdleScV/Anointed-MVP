import React from 'react';
import { Link } from 'react-router-dom';
import { Cross } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const Logo = () => {
  const theme = useTheme();
  
  return (
    <div className="flex-shrink-0">
      <Link to="/" className="flex items-center gap-2">
        <Cross className={`${theme.colors.primary.DEFAULT}`} size={24} />
        <span className={`text-2xl font-bold ${theme.colors.primary.DEFAULT}`}>
          Annointed
        </span>
      </Link>
    </div>
  );
};