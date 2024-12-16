import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here (clear tokens, user data, etc.)
    localStorage.removeItem('token');
    navigate('/login');
  };

  return handleLogout;
};