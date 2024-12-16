import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { Link } from 'react-router-dom';

const Hero = () => {
  const theme = useTheme();

  return (
    <div className="text-center mb-12">
      <div className="mb-6">
        <span className={`${theme.colors.accent.DEFAULT} text-lg font-semibold`}>
          Matthew 28:19-20
        </span>
      </div>
      <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
        Empowering God's People to
        <br />
        Transform Communities
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
        Join us in spreading the Gospel through education, missions, and community outreach
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button className={`${theme.colors.primary.bg.DEFAULT} text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors`}>
          Start Your Journey
        </button>
        <button className="bg-white text-slate-800 px-6 py-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
           <Link  to="/about">Learn More </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;