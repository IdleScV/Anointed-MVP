import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  socialLogin: (provider: string) => Promise<void>;
  logout: () => void;
}

interface User {
  email: string;
  name: string;
  provider?: string;
  avatar?: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user was previously logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock authentication
    if (email && password) {
      const mockUser = { 
        email, 
        name: email.split('@')[0],
        provider: 'email'
      };
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const socialLogin = async (provider: string) => {
    // Mock social authentication
    const mockSocialUsers = {
      google: {
        email: 'user@gmail.com',
        name: 'Google User',
        provider: 'google',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100'
      }
    };

    const socialUser = mockSocialUsers[provider as keyof typeof mockSocialUsers];
    if (socialUser) {
      setUser(socialUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(socialUser));
    } else {
      throw new Error('Social login failed');
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, socialLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};