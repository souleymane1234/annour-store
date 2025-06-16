import React from 'react';
import AboutHeader from '../components/AboutHeader';
import AboutContent from '../components/AboutContent';
import AboutTestimonials from '../components/AboutTestimonials';

const About = () => {
  return (
    <>
    <AboutHeader title={'À propos Annour Store'}/>
    <AboutContent />
    <AboutTestimonials />
    </>
  );
};

export default About;