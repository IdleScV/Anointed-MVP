import React from 'react';
import AboutHero from '../components/about/AboutHero';
import Vision from '../components/about/Vision';
import Values from '../components/about/Values';
import Team from '../components/about/Team';
import CallToAction from '../components/about/CallToAction';

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Vision />
        <Values />
        <Team />
        <CallToAction />
      </div>
    </div>
  );
};

export default AboutPage;