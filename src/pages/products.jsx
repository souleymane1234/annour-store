import React from 'react';
import ProductCard from '../components/ProductCard';
import HeroSlider from '../components/HeroSlider';
import InfoFeatures from '../components/InfoFeatures';
import TestimonialSection from '../components/TestimonialSection';

const Products = () => {
  return (
    <>
    <HeroSlider />
    <ProductCard title={'Tout nos produits'} id="nos-produits"/>
    <InfoFeatures />
    </>
  );
};

export default Products;