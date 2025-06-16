import React from 'react';
import ProductCard from '../components/ProductCard';
import HeroSlider from '../components/HeroSlider';
import InfoFeatures from '../components/InfoFeatures';
import TestimonialSection from '../components/TestimonialSection';

const Home: React.FC = () => {
  return (
    <>
    <HeroSlider />
    <div id="nos-produits">
      <ProductCard title={'Nos meilleurs produits'}/>
    </div>
    <InfoFeatures />
    <TestimonialSection />
    </>
  );
};

export default Home;