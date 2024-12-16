import React from 'react';
import { Chrome } from 'lucide-react';

interface SocialAuthProps {
  onSocialLogin: (provider: string) => Promise<void>;
}

export const SocialAuth: React.FC<SocialAuthProps> = ({ onSocialLogin }) => {
  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={() => onSocialLogin('google')}
          className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          <Chrome className="h-5 w-5 text-red-500" />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};